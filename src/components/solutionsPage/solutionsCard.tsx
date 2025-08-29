import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import TextChip from "../storyChip";

const SolutionsCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-[64px] px-[52px] rounded-2xl bg-[var(--color-neutral-3)] border border-gray-100 shadow-lg">
      <div className="flex flex-col  gap-6">
        <div className="">
          <h3>Solution 1</h3>
          <h2 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-rethink font-medium leading-tight ">
            Cloud Access Security Broker (CASB) That Fits
            <br />
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-base sm:text-lg font-arial leading-relaxed text-gray-600 max-w-2xl">
            Visibility. Control. Compliance.
          </p>
          <p className="text-base sm:text-lg font-arial leading-relaxed text-gray-600 max-w-md">
            CASB acts as a gatekeeper between your users and cloud services,
            enforcing security policies and monitoring activity to prevent data
            loss, misconfigurations, and shadow IT.
          </p>
          <Button variant={"outline"} className="border border-black/10 w-fit">
            Contact us
          </Button>
        </div>
      </div>
      <div className="relative ">
        <div className="absolute bottom-28 -left-9 bg-white rounded-md shadow-lg p-5 flex flex-col gap-2">
          <h4 className="text-md sm:text-lg lg:text-xl font-rethink font-medium text-text-secondary1 flex-1 pr-4">
            With our CASB solution, you can:
          </h4>
          <ul className="list-disc list-inside text-sm">
            {[...Array(5)].map((_, index) => (
              <TextChip
                className="!mt-2"
                key={index}
                badge="Guided by Best Practices, Powered by Innovation"
                badgeClassName="bg-gray-100 "
              />
            ))}
          </ul>
        </div>

        <Image
          src="/images/img_rectangle_42.png"
          alt="Cybersecurity Dashboard"
          width={382}
          height={494}
          className="w-full rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default SolutionsCard;
