import { BackgroundBeams } from "../shockwave";

const CommingSoon = () => {
  return (
    <div className="h-screen w-full rounded-md  bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          We&apos;re almost ready to launch!
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to Deciphi, your trusted partner in cybersecurity. We deliver
          reliable, scalable, and customized security solutions to protect your
          business from evolving digital threats. From safeguarding sensitive
          data to ensuring compliance and resilience, Deciphi empowers you to
          operate with confidence in today&apos;s connected world.
        </p>
        <input
          type="text"
          placeholder="hi@manuarora.in"
          className="rounded-lg border text-white p-3 border-neutral-800 focus:outline-none focus:ring-2 focus:ring-red-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default CommingSoon;
