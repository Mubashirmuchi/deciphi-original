import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Check } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about-us" className="w-full  py-12 sm:py-16 lg:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Left Column - Image and Features */}
          <div className="order-2 lg:order-1 space-y-6 relative">
            {/* Feature Tags */}
            <div className="space-y-3 lg:ml-8 xl:ml-16   ">
              <div className="lg:ml-8 xl:ml-16">
                <div className="absolute top-3 left-28 shadow-md bg-white  rounded-2xl px-6 py-2  flex gap-2 items-center">
                  <span className="bg-[var(--color-blue)] rounded-full  ">
                    <Check color="white" fill="#0088FF" />
                  </span>

                  <span className="text-xs sm:text-sm font-space font-normal leading-4 text-text-dark1">
                    Simplify Compliance with Automated Reporting Tools
                  </span>
                </div>
              </div>
              <div className="absolute top-16 left-40 shadow-md bg-white  rounded-2xl px-6 py-2  flex gap-2 items-center">
                <span className="bg-[var(--color-blue)] rounded-full  ">
                  <Check color="white" fill="#0088FF" />
                </span>
                <span className="text-xs sm:text-sm font-space font-normal leading-4 text-text-dark1">
                  Get Expert Support When You Need It, On-Demand
                </span>
              </div>
              <div className="absolute top-36 left-3 bg-white  rounded-2xl px-6 py-2  flex gap-2 items-center">
                <span className="bg-[var(--color-blue)] rounded-full  ">
                  <Check color="white" fill="#0088FF" />
                </span>
                <span className="text-xs sm:text-sm font-space font-normal leading-4 text-text-dark1">
                  Stay Protected 24/7 with Real-Time Threat Monitoring
                </span>
              </div>
            </div>

            {/* Main Image */}
            {/* <div className="relative"> */}
            <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-4">
              <Image
                src="/images/img_rectangle_42.png"
                alt="Cybersecurity Dashboard"
                width={382}
                height={494}
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            {/* </div> */}
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-6">
              <Button variant={"outline"} className="border border-black/10">
                <div className="bg-green-600 w-2 h-2 rounded-full mr-2 "></div>
                About Us
              </Button>

              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute -bottom-2 left-0 w-48 sm:w-56 md:w-64 h-16 sm:h-18 md:h-20 bg-accent-orange1 rounded opacity-80 -z-10" />
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-rethink font-medium leading-tight ">
                    <span className="text-text-secondary1">
                      Smarter. Safer.
                    </span>
                    <br />
                  </h2>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-rethink font-medium leading-tight  bg-[#E85744] text-white w-fit p-2">
                    Deciphi.
                  </h2>
                </div>

                <p className="text-base sm:text-lg font-arial leading-relaxed text-text-secondary1">
                  We connect the dots — so you do not have to. Partnering with
                  industry leaders, we design and implement solutions tailored
                  to your business, ensuring resilience and seamless operations
                  without missing a beat.
                </p>
              </div>
            </div>

            <Button size="sm" className="bg-[var(--color-primary)] text-white">
              Contact us
            </Button>
          </div>
        </div>

        <div className="mt-14 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 border-y border-black/5">
          {/* Item 1 */}
          <div className="flex items-center p-4 sm:p-6 border-b sm:border-b-0 sm:border-r border-black/10">
            <Image
              src="/images/img_frame.svg"
              alt="Expert Solutions"
              width={24}
              height={24}
              className="flex-shrink-0"
            />
            <span className="ml-3 text-base sm:text-lg font-arial text-text-secondary1">
              Expert Solutions
            </span>
          </div>

          {/* Item 2 */}
          <div className="flex items-center p-4 sm:p-6">
            <Image
              src="/images/img_svg.svg"
              alt="Advanced Defense"
              width={24}
              height={24}
              className="flex-shrink-0"
            />
            <span className="ml-3 text-base sm:text-lg font-arial text-text-secondary1">
              Advanced Defense
            </span>
          </div>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 border-b border-black/5">
          {/* Item 1 */}
          <div className="flex items-center p-4 sm:p-6 border-b sm:border-b-0 sm:border-r border-black/10">
            <Image
              src="/images/img_frame_blue_gray_100.svg"
              alt="Strategic Consulting"
              width={24}
              height={24}
              className="flex-shrink-0"
            />
            <span className="ml-3 text-base sm:text-lg font-arial text-text-secondary1">
              Strategic Consulting
            </span>
          </div>

          {/* Item 2 */}
          <div className="flex items-center p-4 sm:p-6">
            <Image
              src="/images/img_svg_blue_gray_100.svg"
              alt="Seamless Integration"
              width={24}
              height={24}
              className="flex-shrink-0"
            />
            <span className="ml-3 text-base sm:text-lg font-arial text-text-secondary1">
              Seamless Integration{" "}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
