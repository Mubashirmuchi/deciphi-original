
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import TextChip from "../storyChip";
import Link from "next/link";

const Herosection = () => {
  return (
    <section>
      <div className="bg-[var(--color-neutral-1)] px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:gap-8 w-full items-center justify-center  pt-40 sm:pt-32 md:pt-40 pb-8 sm:pb-10 md:pb-12  ">
          {/* Top content */}
          <Button
            variant="outline"
            className="border border-black/10 bg-white flex items-center"
          >
            <span className="bg-green-600 w-2 h-2 rounded-full mr-2"></span>
            CYBER SECURITY CONSULTING
          </Button>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-rethink font-medium leading-snug tracking-tight text-gray-900">
            <span className="bg-[#E85744] text-white px-2 py-1 rounded">
              Secure
            </span>{" "}
            your cloud.
            <br />
            Empower your business.
          </h1>

          <p className="text-sm sm:text-base md:text-lg font-arial leading-relaxed text-gray-600 max-w-xl sm:max-w-2xl">
            We provide a comprehensive suite of tools and services that
            safeguard your cloud infrastructure, detect threats in real-time,
            and ensure secure access for users and systems.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 py-8 sm:py-12 px-4 sm:px-8 lg:px-12 rounded-2xl bg-[var(--color-neutral-3)] border border-gray-100 shadow-lg">
          <div className="flex flex-col gap-4 sm:gap-6">
            <div>
              <h3 className="text-sm sm:text-base font-rethink font-medium text-gray-700">
                Solution 1
              </h3>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-rethink font-medium leading-tight text-gray-900">
                Cloud Access Security Broker (CASB) That Fits
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm sm:text-base md:text-lg font-arial leading-relaxed text-gray-600 max-w-md">
                Visibility. Control. Compliance.
              </p>
              <p className="text-sm sm:text-base md:text-lg font-arial leading-relaxed text-gray-600 max-w-md">
                CASB acts as a gatekeeper between your users and cloud services,
                enforcing security policies and monitoring activity to prevent
                data loss, misconfigurations, and shadow IT.
              </p>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border border-black/10 w-fit cursor-pointer bg-[var(--color-primary)] text-white hover:bg-[#71120f] transition-all duration-300  "
                >
                  Contact us
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute bottom-4 sm:bottom-8 md:bottom-0 lg:bottom-28 left-0 md:-left-8 bg-white rounded-md shadow-lg p-4 sm:p-5 flex flex-col gap-2 w-11/12 sm:w-10/12 md:w-auto max-w-sm">
              <h4 className="text-sm sm:text-base md:text-lg font-rethink font-medium text-gray-800 flex-1">
                With our CASB solution, you can:
              </h4>
              <ul className="list-disc list-inside text-xs sm:text-sm text-gray-600">
                {[...Array(5)].map((_, index) => (
                  <TextChip
                    className="!mt-2"
                    key={index}
                    badge="Guided by Best Practices, Powered by Innovation"
                    badgeClassName="bg-gray-100 text-xs sm:text-sm"
                  />
                ))}
              </ul>
            </div>

            <Image
              src="/images/img_rectangle_42.png"
              alt="Cybersecurity Dashboard"
              width={382}
              height={494}
              className="w-full max-w-md sm:max-w-lg rounded-2xl shadow-lg object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
