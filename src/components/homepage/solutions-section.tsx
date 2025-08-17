import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import {
  Check,
  Cloud,
  Database,
  Globe,
  IdCard,
  MousePointerClick,
  ShieldAlert,
} from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";

const items = [
  {
    title: "Identity and Access Management ",
    content:
      "At Deciphi, we offer more than just cybersecurity—we provide peace of mind. Backed by real-world experience and deep technical expertise, we tailor solutions that",
    icon: IdCard,
  },
  {
    title: "Network Security ",
    content:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
    icon: Globe,
  },
  {
    title: "Endpoint Security",
    content:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
    icon: ShieldAlert,
  },
  {
    title: "Data Security ",
    content:
      "Yes. It's animated by default, but you can disable it if you prefer.",
    icon: Database,
  },
  {
    title: "Cloud Security ",
    content:
      "Yes. It's animated by default, but you can disable it if you prefer.",
    icon: Cloud,
  },
  {
    title: "Application Security ",
    content:
      "Yes. It's animated by default, but you can disable it if you prefer.",
    icon: MousePointerClick,
  },
];

const Solutions = () => {
  return (
    <section className="w-full  py-12 sm:py-16 lg:py-24 bg-[var(--color-neutral-3)]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="order-1 lg:order-1 space-y-8">
          <div className="space-y-6">
            <Button variant={"outline"} className="border border-black/10">
              <div className="bg-green-600 w-2 h-2 rounded-full mr-2 "></div>
              SOLUTIONS
            </Button>

            <div className="space-y-4">
              <div className="relative">
                <div className="absolute -bottom-2 left-0 w-48 sm:w-56 md:w-64 h-16 sm:h-18 md:h-20 bg-accent-orange1 rounded opacity-80 -z-10" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-rethink font-medium leading-tight   w-fit">
                  <span className="bg-[#E85744] text-white  p-2 mr-2">
                    Built
                  </span>
                  for You
                </h2>
              </div>

              <p className="text-base sm:text-lg font-arial leading-relaxed text-text-secondary1 max-w-2xl">
                We design cybersecurity solutions around your unique needs—no
                templates, no fluff. Just smart, effective protection that fits
                your business.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Left Column - Image and Features */}
          <div className="order-2 lg:order-2 space-y-6 relative">
            {/* Feature Tags */}
            <div className="space-y-3 lg:ml-8 xl:ml-16   ">
              <div className="lg:ml-8 xl:ml-16">
                <div className="absolute top-16 right-24 shadow-2xl bg-white  rounded-2xl px-6 py-2  flex gap-2 items-center">
                  <span className="bg-[var(--color-blue)] rounded-full  ">
                    <Check color="white" fill="#0088FF" />
                  </span>

                  <span className="text-xs sm:text-sm font-space font-normal leading-4 text-text-dark1">
                    Single Sign-On (SSO)
                  </span>
                </div>
              </div>
              <div className="absolute top-32 left-32 shadow-md bg-white  rounded-2xl px-6 py-2  flex gap-2 items-center">
                <span className="bg-[var(--color-blue)] rounded-full  ">
                  <Check color="white" fill="#0088FF" />
                </span>
                <span className="text-xs sm:text-sm font-space font-normal leading-4 text-text-dark1">
                  Privileged Access Management (PAM)
                </span>
              </div>
              <div className="absolute top-48 left-40 shadow-md bg-white  rounded-2xl px-6 py-2  flex gap-2 items-center">
                <span className="bg-[var(--color-blue)] rounded-full  ">
                  <Check color="white" fill="#0088FF" />
                </span>
                <span className="text-xs sm:text-sm font-space font-normal leading-4 text-text-dark1">
                  Multi-Factor Authentication (MFA)
                </span>
              </div>
              {/*  */}
            </div>

            {/* Main Image */}
            {/* <div className="relative"> */}
            <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-4">
              <Image
                src="/images/img_rectangle_22018.png"
                alt="Cybersecurity Dashboard"
                width={382}
                height={494}
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            {/* </div> */}
          </div>
          <div className="order-2 lg:order-2 space-y-6 relative">
            <Accordion
              defaultValue="item-0"
              type="single"
              collapsible
              className="max-w-lg my-4 w-full space-y-3"
            >
              {items.map(({ title, content, icon: Icon }, index) => (
                <AccordionItem
                  className=" border-1 border-black/10 rounded-md p-2"
                  key={index}
                  value={`item-${index}`}
                >
                  <AccordionPrimitive.Header className="flex">
                    <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-45">
                      <div className="flex items-start gap-3 text-[var(--color-text-1)] font-semibold">
                        <Icon color="var(--color-text-1)" />
                        {title}
                      </div>
                      {/* <Icon /> {title} */}
                      <Plus className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>
                  <AccordionContent className="text-[var(--color-text-2)]">
                    {content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
