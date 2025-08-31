import { getBlogPost, getBlogPosts } from "@/lib/cms";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Article } from "@/components/craft";
import { LinkedinIcon, TwitterIcon } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export const revalidate = 3600;

export async function generateStaticParams() {
  try {
    const posts = await getBlogPosts();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found | Deciphi Blog",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: post.seo.metaTitle,
    description: post.seo.metaDescription,
    keywords: post.seo.keywords,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [
        {
          url: post.featuredImage.url,
          width: post.featuredImage.width,
          height: post.featuredImage.height,
          alt: post.featuredImage.alt,
        },
      ],
      url: `https://deciphi.com/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      images: [post.featuredImage.url],
    },
    alternates: {
      canonical:
        post.seo.canonicalUrl || `https://deciphi.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  const allPosts = await getBlogPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage.url,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "Deciphi",
      logo: {
        "@type": "ImageObject",
        url: "https://deciphi.com/images/img_frame_38.svg",
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://deciphi.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Full-width Hero Image */}
      <div className="relative h-[60vh] w-full">
        <Image
          src={post.featuredImage.url}
          alt={post.featuredImage.alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full max-w-7xl mx-auto px-4 pb-12">
            <div className="text-white">
              {/* Categories */}
              {post.categories.length > 0 && (
                <div className="mb-4">
                  {post.categories.map((category) => (
                    <span
                      key={category}
                      className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full mr-2"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              )}
              <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-4xl">
                {post.title}
              </h1>

              <div className="flex items-center gap-4 text-sm">
                <span>{post.author.name}</span>
                <span>•</span>
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                {/* <span>•</span>
                <span>5 min read</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-8">
                {/* Breadcrumb */}
                <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
                  <Link href="/" className="hover:text-blue-600">
                    Home
                  </Link>
                  <span>/</span>
                  <Link href="/blog" className="hover:text-blue-600">
                    Blog
                  </Link>
                  <span>/</span>
                  <span className="text-gray-900">Article</span>
                </nav>

                {/* Content */}
                {/* <div
                  className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                /> */}

                <Article dangerouslySetInnerHTML={{ __html: post.content }} />

                {/* Tags */}
                {post.tags.length > 0 && (
                  <div className="mt-12 pt-8 border-t">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Share */}
                <div className="mt-8 pt-8 border-t">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Share this article
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                        post.title
                      )}&url=${encodeURIComponent(
                        `https://deciphi.com/blog/${post.slug}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" p-2  text-white transition-colors rounded-full border border-gray-700 hover:border-gray-900"
                      // hover:bg-blue-600 bg-blue-500
                    >
                      <TwitterIcon stroke="currentColor" fill="black" />
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                        `https://deciphi.com/blog/${post.slug}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                                         className=" p-2  text-white transition-colors rounded-full border border-gray-700 hover:border-gray-900"

                    >
                      <LinkedinIcon stroke="currentColor" fill="black" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Author Card */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  About the Author
                </h3>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {post.author.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {post.author.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Cybersecurity Expert
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mt-4 text-sm">
                  Expert in cybersecurity solutions, network protection, and
                  data security for businesses in Qatar.
                </p>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.slug}
                        href={`/blog/${relatedPost.slug}`}
                        className="block group"
                      >
                        <div className="flex gap-3">
                          <div className="relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={relatedPost.featuredImage.url}
                              alt={relatedPost.featuredImage.alt}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform"
                              sizes="80px"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 text-sm group-hover:text-blue-600 transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <p className="text-gray-600 text-xs mt-1">
                              {new Date(
                                relatedPost.publishedAt
                              ).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Back to Blog */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <Link
                  href="/blog"
                  className="block w-full text-center px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  ← Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
