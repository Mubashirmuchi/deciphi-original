import Image from "next/image";
import React from "react";

const Grid = () => {
  return (
    <div className="relative space-y-4 sm:space-y-6">
      {/* First Row */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6">
        {/* Cybersecurity Consulting */}
        <div className="lg:col-span-2 bg-bg-card1 border-2 bg-[var(--color-neutral-3)] border-gray-100 rounded-lg p-6 sm:p-8">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-start pb-6 border-b-2 border-gray-100">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-rethink font-medium text-text-secondary1 flex-1 pr-4">
                  Cybersecurity Consulting
                </h3>
                <div className="bg-accent-yellow1 rounded-full p-2 flex-shrink-0">
                  <Image
                    src="/images/img_consulting_1.png"
                    alt="Consulting Icon"
                    width={32}
                    height={32}
                  />
                </div>
              </div>
              <p className="text-base sm:text-lg font-arial leading-relaxed text-text-muted1">
                Get strategic, expert-driven guidance to build and scale a
                resilient security program that fits your goals.
              </p>
            </div>
            <div className="mt-auto">
              <Image
                src="/images/img_image_31.png"
                alt="Consulting Service"
                width={344}
                height={148}
                className="w-full rounded"
              />
            </div>
          </div>
        </div>

        {/* Security Assessment & Testing */}
        <div className="lg:col-span-3  border-2 bg-[var(--color-neutral-3)] border-gray-100 rounded-lg p-6 sm:p-8">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-start pb-6 border-b-2 border-gray-100">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-rethink font-medium text-text-secondary1 flex-1 pr-4">
                  Security Assessment & Testing
                </h3>
                <div className="bg-accent-green1 rounded-full p-2 flex-shrink-0">
                  <Image
                    src="/images/img_penetration_testing.png"
                    alt="Testing Icon"
                    width={32}
                    height={32}
                  />
                </div>
              </div>
              <p className="text-base sm:text-lg font-arial leading-relaxed text-text-muted1">
                Uncover vulnerabilities before attackers do—with thorough
                assessments, penetration testing, and actionable insights.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <div className="flex-1">
                <Image
                  src="/images/img_65e15c96dcb88d9.png"
                  alt="Assessment Service"
                  width={354}
                  height={220}
                  className="w-full rounded"
                />
              </div>
              <div className="w-full sm:w-40">
                <Image
                  src="/images/img_image_31_226x158.png"
                  alt="Testing Service"
                  width={158}
                  height={226}
                  className="w-full rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cybersecurity Awareness Training */}
      <div className="bg-[var(--color-neutral-3)] border-2 border-gray-100 rounded-lg p-6 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-end">
          <div className="space-y-6">
            <div className="space-y-6">
              <div className="bg-primary-dark1 rounded-full p-2 w-12 h-12">
                <Image
                  src="/images/img_frame_65.png"
                  alt="Training Icon"
                  width={32}
                  height={32}
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-rethink font-medium text-text-secondary1">
                Cybersecurity Awareness Training
              </h3>
            </div>
            <p className="text-base sm:text-lg font-arial leading-relaxed text-text-muted1">
              Empower your team with practical training that turns your people
              into your first line of defense.
            </p>
          </div>
          <div className="w-full">
            <Image
              src="/images/img_676e144f27d86c3.svg"
              alt="Training Service"
              width={392}
              height={266}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Additional Services Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* System Integration */}
        <div className="bg-[var(--color-neutral-3)] border-2 border-gray-100 rounded-lg p-6">
          <div className="space-y-6 h-full flex flex-col">
            <div className="space-y-4">
              <div className="flex justify-between items-start pb-6 border-b-2 border-gray-100">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-rethink font-medium text-text-secondary1 flex-1 pr-4">
                  System Integration
                </h3>
                <div className="bg-accent-blue1 rounded-full p-2 flex-shrink-0">
                  <Image
                    src="/images/img_encryption_1.png"
                    alt="Integration Icon"
                    width={32}
                    height={32}
                  />
                </div>
              </div>
              <p className="text-sm sm:text-base font-arial leading-relaxed text-text-muted1">
                Seamlessly connect and secure your tools, platforms, and
                infrastructure—without compromising performance.
              </p>
            </div>
            <div className="mt-auto">
              <div className="bg-gradient-to-b from-red-600 to-red-800 rounded p-4">
                <Image
                  src="/images/img_65e163ee818a060.png"
                  alt="Integration Service"
                  width={300}
                  height={92}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* OT Cybersecurity */}
        <div className="bg-[var(--color-neutral-3)] border-2 border-gray-100 rounded-lg p-6">
          <div className="space-y-6 h-full flex flex-col">
            <div className="space-y-4">
              <div className="flex justify-between items-start pb-6 border-b-2 border-gray-100">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-rethink font-medium text-text-secondary1 flex-1 pr-4">
                  OT Cybersecurity
                </h3>
                <div className="bg-red-500 rounded-full p-2 flex-shrink-0">
                  <Image
                    src="/images/img_cybersecurity_1.png"
                    alt="OT Security Icon"
                    width={32}
                    height={32}
                  />
                </div>
              </div>
              <p className="text-sm sm:text-base font-arial leading-relaxed text-text-muted1">
                Protect your operational technology from growing cyber threats
                with industry-specific defense strategies.
              </p>
            </div>
            <div className="mt-auto space-y-3">
              <Image
                src="/images/img_group_61.svg"
                alt="OT Service 1"
                width={304}
                height={38}
                className="w-full"
              />
              <Image
                src="/images/img_group_65.svg"
                alt="OT Service 2"
                width={306}
                height={86}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Cloud Security */}
        <div className="bg-[var(--color-neutral-3)] border-2 border-gray-100 rounded-lg p-6 md:col-span-2 lg:col-span-1">
          <div className="space-y-6 h-full flex flex-col">
            <div className="space-y-4">
              <div className="flex justify-between items-start pb-6 border-b-2 border-gray-100">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-rethink font-medium text-text-secondary1 flex-1 pr-4">
                  Cloud
                  <br />
                  Security
                </h3>
                <div className="bg-accent-blue1 rounded-full p-2 flex-shrink-0">
                  <Image
                    src="/images/img_secure_database.png"
                    alt="Cloud Security Icon"
                    width={32}
                    height={32}
                  />
                </div>
              </div>
              <p className="text-sm sm:text-base font-arial leading-relaxed text-text-muted1">
                Secure your cloud environment with confidence—from configuration
                to compliance, we have got you covered.
              </p>
            </div>
            <div className="mt-auto">
              <Image
                src="/images/img_image_31_172x302.png"
                alt="Cloud Security Service"
                width={302}
                height={172}
                className="w-full rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
