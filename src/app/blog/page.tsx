import { getBlogPosts } from "@/lib/cms";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cybersecurity Blog | Latest Insights & Best Practices | Deciphi",
  description: "Stay updated with the latest cybersecurity trends, expert insights, and best practices. Read our comprehensive guides on network security, data protection, and threat prevention.",
  keywords: ["cybersecurity blog", "security insights", "cyber threats", "network security", "data protection", "Qatar cybersecurity"],
  openGraph: {
    title: "Cybersecurity Blog | Deciphi",
    description: "Expert cybersecurity insights and best practices from Qatar's leading security professionals.",
    type: "website",
    url: "https://deciphi.com/blog",
  },
  alternates: {
    canonical: "https://deciphi.com/blog",
  },
};

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage() {
  const posts = await getBlogPosts();

  if (posts.length === 0) {
    return (
      <div className="min-h-screen bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cybersecurity Insights
          </h1>
          <p className="text-xl text-gray-600">
            Blog posts are being loaded. Please check back soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cybersecurity Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest cybersecurity trends, best practices, and expert insights from our security professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src={post.featuredImage.url}
                  alt={post.featuredImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                {/* Categories - Primary tags */}
                {post.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.categories.slice(0, 2).map((category) => (
                      <span key={category} className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                        {category}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Tags - Secondary */}
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
                
                <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <p>{post.author.name}</p>
                    <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
