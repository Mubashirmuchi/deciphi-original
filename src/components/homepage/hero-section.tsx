import React from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { MediaSlideshow } from "./mediaSlideshow";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center w-full overflow-hidden"
    >
      {/* Background Video with Fallback */}
      <div className="absolute inset-0 w-full h-full">
        {/* <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          poster="/images/background.jpeg"
        >
          <source
            src="https://videos.pexels.com/video-files/3147938/3147938-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video> */}
        <MediaSlideshow
          mediaItems={[
            {
              type: "video",
              src: "https://videos.pexels.com/video-files/3147938/3147938-uhd_2560_1440_30fps.mp4",
            },
            // {
            //   type: "image",
            //   src: "/images/background.jpeg",
            // },
          ]}
        />
        <div className="absolute inset-0 bg-black opacity-20" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="space-y-6 sm:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-rethink font-medium leading-tight text-text-light1">
            Securing Your Network,
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>With Cybersecurity
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Expertise.
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-arial font-normal leading-relaxed max-w-3xl mx-auto text-text-2">
            Deciphi empowers organizations with intelligent, adaptable defenses
            so you can innovate with confidence while we protect what matters
            most.
          </p>
          <div className="pt-4">
            <Link href="/contact">
              <Button
                className="bg-[linear-gradient(113deg,#ac1b1b_0%,#721212_50%,#460a0a_100%)]   hover:bg-[linear-gradient(113deg,#c62828_0%,#8b1c1c_50%,#5a0d0d_100%)]
  transition-all duration-300  border-border-secondary1 rounded-[6px] text-sm sm:text-base py-6 cursor-pointer"
              >
                Contact us
                <ChevronRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
