import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col gap-5 w-full items-center justify-center h-screen  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      {children}
    </section>
  );
};

export default Wrapper;
