import ChooseUsSection from "@/components/homepage/why-choose-us-section";
import HeroSection from "@/components/servicePage/heroSection";
import ProvideSection from "@/components/servicePage/provide-section";
import React from "react";

const Services = () => {
  return (
    <main>
      <HeroSection />
      <ProvideSection/>
      <ChooseUsSection/>
    </main>
  );
};

export default Services;
