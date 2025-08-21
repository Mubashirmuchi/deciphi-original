import {
  CheckCircle,
  Mail,
  MessageSquareIcon,
  PlayIcon,
  Shield,
} from "lucide-react";
import React from "react";
import { BentoGridItem } from "../ui/bento-grid";
import Image from "next/image";

const GridSection = () => {
  const cards = [
    {
      icon: <PlayIcon size={24} color="#D87F6E" />,
      title: "Training Programmes",
      description:
        "Tailored content to address your organization’s specific risks and industry requirements.",
    },
    {
      icon: <Shield size={24} color="#D87F6E" />,
      title: "Compliance Support",
      description:
        "Ensure your organization meets regulatory and compliance requirements through structured training modules.",
    },
    {
      icon: <CheckCircle size={24} color="#D87F6E" />,
      title: "Hands-On Workshops",
      description:
        "Interactive sessions to teach practical skills for recognizing and mitigating threats.",
    },
    {
      icon: <CheckCircle size={24} color="#D87F6E" />,
      title: "Ongoing Assessment",
      description:
        "Regular testing and feedback to measure progress and reinforce a culture of continuous improvement.",
    },
    {
      icon: <Mail size={24} color="#D87F6E" />,
      title: "Adversary Insights",
      description:
        "Training grounded in real-world threat scenarios, helping your team think like an attacker to strengthen defenses.",
    },
    {
      icon: <MessageSquareIcon size={24} color="#D87F6E" />,
      title: "Phishing Simulations",
      description:
        "Realistic simulations to help employees identify and respond to phishing attacks.",
    },
  ];

  return (
    <div className="parent grid grid-cols-1  md:grid-cols-3 grid-rows-3  max-h-[70vh]">
      <div className="div1 style bg-[var(--neutral-1)] p-2 flex flex-col h-full">
        <BentoGridItem
          icon={cards[0].icon}
          title={cards[0].title}
          description={cards[0].description}
        />
      </div>
      <div className="div2 style  p-2">
        {" "}
        <BentoGridItem
          icon={cards[3].icon}
          title={cards[3].title}
          description={cards[3].description}
        />
      </div>
      <div className="div3 style  p-2">
        {" "}
        {/* <div className="">{cards[0].icon}</div>
        <p className="">{cards[0].title}</p>
        <span className="">{cards[0].description}</span> */}
        <BentoGridItem
          icon={cards[1].icon}
          title={cards[1].title}
          description={cards[1].description}
        />
      </div>
      <div
        className="div4-2-5-8 style  p-2 hidden md:block"
        style={{
          gridColumn: "2 / 3",
          gridRow: "1 / 4",
        }}
      >
        <Image
          width={500}
          height={500}
          src="/images/Rectangle42.png"
          alt="Hot air balloons"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="div5 style  p-2 flex flex-col">
        <BentoGridItem
          icon={cards[3].icon}
          title={cards[3].title}
          description={cards[3].description}
        />
      </div>
      <div className="div6 style  p-2">
        <BentoGridItem
          icon={cards[2].icon}
          title={cards[2].title}
          description={cards[2].description}
        />
      </div>
      <div className="div7 style  p-2">
        <BentoGridItem
          icon={cards[4].icon}
          title={cards[4].title}
          description={cards[4].description}
        />
      </div>
    </div>
  );
};

export default GridSection;
