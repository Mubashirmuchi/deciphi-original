import React from "react";

const AboutUs = () => {
  return (
    // <div className="flex justify-between  mx-auto ">
      <section className="w-full  min-h-screen flex flex-col">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <div className="w-full max-w-7xl mx-auto relative flex-1"></div>
      </section>
    // </div>
  );
};

export default AboutUs;
