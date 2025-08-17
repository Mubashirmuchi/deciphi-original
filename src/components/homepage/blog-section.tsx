import React from "react";
import { Button } from "../ui/button";
import Card from "../card";

const BlogSection = () => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24 max-w-7xl mx-auto flex flex-col gap-5 w-full items-center justify-center bg-white ">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] "></div>
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
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {" "}
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default BlogSection;
