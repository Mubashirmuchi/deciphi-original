"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { WritingText } from "../ui/animate-ui-writingtext";

export default function SplashScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <motion.div
        className="flex flex-col gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 h-screen pb-32 sm:pb-40 md:pb-48 w-screen items-center justify-center bg-black"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.5, delay: 1.3 }}
      >
        {/* Responsive Logo */}
        <div className="relative">
          <Image
            src="/images/img_frame_38.svg"
            alt="Logo"
            width={120}
            height={68}
            className="w-24 h-auto sm:w-32 md:w-40 lg:w-44"
            priority
          />
        </div>

        {/* Responsive Text */}
        <div className="text-center px-2">
          <WritingText
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white leading-tight"
            text="Your Trusted Cyber Guardian"
            spacing={9}
            transition={{
              type: "spring",
              bounce: 0,
              duration: 2,
              delay: 0.1,
            }}
          />
        </div>
      </motion.div>
    );
  }

  return <div>{children}</div>;
}
