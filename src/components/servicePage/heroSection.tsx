import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex flex-col gap-8 w-full items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-40">
      {/* Top content */}
      <Button
        variant={"outline"}
        className="border border-black/10 relative bg-white"
      >
        <div className="bg-green-600 w-2 h-2 rounded-full mr-2"></div>
        CYBER SECURITY CONSULTING
      </Button>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-rethink font-medium leading-snug md:leading-tight xl:leading-snug text-gray-900">
        Navigate regulatory complexity. <br />
        Manage risk.{" "}
        <span className="bg-[#E85744] text-white p-2 rounded">
          Build trust.
        </span>
      </h1>

      <p className="text-base sm:text-lg font-arial leading-relaxed text-gray-600 max-w-2xl">
        Get strategic, expert-driven guidance to build and scale a resilient
        security program that fits your goals.
      </p>

      <div className="relative mt-24">
        {/* Quote box */}
        <div
          className="
    absolute top-2 
    left-1/2 -translate-x-1/2 -translate-y-1/2 
    bg-white shadow-lg rounded-xl p-6 z-10
    w-full max-w-full 
    md:max-w-2xl
  "
        >
          <span className="text-6xl text-blue-600 font-bold absolute -top-8 left-4">
            “
          </span>
          <p className="text-gray-700 text-lg">
            In a connected world, trust is your most valuable currency — and
            security is how you protect it.
          </p>
        </div>

        {/* Image section */}
        <div className="relative w-full max-w-5xl mt-6 h-[600px]">
          <Image
            src="/images/ship.jpg"
            alt="hero"
            width={1056}
            height={1280}
            className="rounded-xl object-contain w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
