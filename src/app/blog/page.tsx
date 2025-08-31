import { getBlogPosts } from "@/lib/cms";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import BlogCard from "@/components/card";

export const metadata: Metadata = {
  title: "Cybersecurity Blog | Latest Insights & Best Practices | Deciphi",
  description:
    "Stay updated with the latest cybersecurity trends, expert insights, and best practices. Read our comprehensive guides on network security, data protection, and threat prevention.",
  keywords: [
    "cybersecurity blog",
    "security insights",
    "cyber threats",
    "network security",
    "data protection",
    "Qatar cybersecurity",
  ],
  openGraph: {
    title: "Cybersecurity Blog | Deciphi",
    description:
      "Expert cybersecurity insights and best practices from Qatar's leading security professionals.",
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
    <section>
      <div className="bg-[var(--color-neutral-1)]">
        <div className="flex  flex-col gap-8 w-full items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:pb-5 md:pt-40 pt-40">
          {/* Top content */}
          <Button
            variant={"outline"}
            className="border border-black/10 relative bg-white"
          >
            <div className="bg-green-600 w-2 h-2 rounded-full mr-2"></div>
            BLOGS
          </Button>

          <h1 className=" text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-rethink font-medium leading-relaxed md:leading-relaxed xl:leading-snug text-gray-900 ">
            The latest Trends , Events and
            <br />
             Articles 
            <span className="bg-[#E85744] text-white p-2 rounded">
              on Cyber Securityty.
            </span>
          </h1>

          <p className=" text-center text-base sm:text-lg font-arial leading-relaxed text-gray-600 max-w-2xl">
            Get strategic, expert-driven guidance to build and scale a resilient
            security program that fits your goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
              
              >
               <BlogCard key={post.id} post={post} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
