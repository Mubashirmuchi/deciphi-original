import React from "react";
import { Button } from "../ui/button";
import { getBlogPosts } from "@/lib/cms";
import Link from "next/link";
import BlogCard from "../card";

const BlogSection = async () => {
  const posts = await getBlogPosts();
  const latestPosts = posts.slice(0, 3);

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 max-w-7xl mx-auto flex flex-col gap-5 w-full items-center justify-center bg-white px-4 sm:px-6 lg:px-8 ">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center "></div>
      <Button
        variant={"outline"}
        className="border border-black/10 relative bg-white"
      >
        <div className="bg-green-600 w-2 h-2 rounded-full mr-2 "></div>
        Blogs
      </Button>
      <h2 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-rethink font-medium leading-tight ">
        Whats
        <span className=" p-2 ml-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-rethink font-medium leading-tight  bg-[#E85744] text-white w-fit">
          New?
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestPosts.map((post) => (
          
       

          
        <BlogCard key={post.id} post={post} />

        ))}


      </div>
      <div className="mt-8">
        <Link
          href="/blog"
          className="inline-flex items-center px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          View All Posts →
        </Link>
      </div>
    </section>
  );
};

export default BlogSection;
