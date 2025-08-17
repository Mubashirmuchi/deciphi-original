import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Grid  from "../grid";

const Services = () => {
  return (
    <div className="relative  max-w-7xl mx-auto flex flex-col gap-5 w-full items-center justify-center bg-white ">
      {/* dark:bg-black */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#fff_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#BFBDBD_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] ">
        {/* dark:bg-black */}
      </div>
      <Button
        variant={"outline"}
        className="border border-black/10 relative bg-white"
      >
        <div className="bg-green-600 w-2 h-2 rounded-full mr-2 "></div>
        About Us
      </Button>
      <h2 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-rethink font-medium leading-tight ">
        <span className=" p-2 mr-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-rethink font-medium leading-tight  bg-[#E85744] text-white w-fit">
          Security{" "}
        </span>
        That Fits
        {/* <h2 className="">
          Deciphi.
        </h2> */}
        <br />
      </h2>

      <p className="relative max-w-5xl text-base sm:text-lg font-arial leading-relaxed text-black/60">
        I We connect the dots — so you don&apos;t have to. Partnering with industry
        leaders, we design and implement solutions tailored to your business,
        ensuring resilience and seamless operations without missing a beat.
      </p>
      <Grid  />
    </div>
  );
};

export default Services;
