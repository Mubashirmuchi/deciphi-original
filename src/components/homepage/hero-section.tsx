import React from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className=" min-h-screen flex items-center justify-center w-full">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/images/img_frame_38.svg"
      >
        <source
          src="https://videos.pexels.com/video-files/3147938/3147938-uhd_2560_1440_30fps.mp4"
          type="video/mp4"
        />
      </video>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="space-y-6 sm:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-rethink font-medium leading-tight text-text-light1">
            Securing Your Network,
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>With Cybersecurity
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Expertise.
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-arial font-normal leading-relaxed  max-w-3xl mx-auto text-text-2">
            At Deciphi, we help organizations stay ahead of evolving cyber
            risks. Our expert-led services empower you to act with confidence
            and secure your future.
          </p>
          <div className="pt-4">
            <Button className="bg-[linear-gradient(113deg,#ac1b1b_0%,#721212_50%,#460a0a_100%)] border-border-secondary1 rounded-[6px] text-sm sm:text-base py-6">
              Contact us
              <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
