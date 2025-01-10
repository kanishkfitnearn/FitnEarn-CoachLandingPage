import { forwardRef } from "react";

const HowItWorks = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="w-full hidden sm:block overflow-hidden bg-neutral-900"
    >
      <div
        className="w-full mx-auto bg-custom-gradient-3 p-10 m-0 space-y-16 relative min-h-[500px] mt-8"
        data-aos="fade-up"
      >
        {/* Title Section */}
        <div className="w-full text-center" data-aos="fade-down">
          <p className="font-roboto text-[36px] md:text-[48px] font-black text-neutral-200">
            How It Works ?
          </p>
        </div>

        {/* Images Section with Overlap */}
        <div className="relative">
          <img
            src="/Rectangle 7 (1).png"
            className="h-0.5 w-[90%] mx-8"
            alt=""
          />

          {/* Overlapping images */}
          <div className="absolute top-[-47px] left-0 w-full flex justify-between">
            <img src="/Group 1000005340.png" alt="" className="h-[80%]" />
            <img src="/Group 1000005341.png" alt="" className="h-[80%]" />
            <img src="/Group 1000005342.png" alt="" />
            <img src="/Group 1000005343.png" alt="" />
          </div>
        </div>

        {/* Text Section */}
        <div className="relative z-10 flex justify-center items-center gap-24 mt-10 top-24 text-center w-[100%]">
          <p className="text-neutral-300">
            Support for multiple languages, making health monitoring accessible
            and easy for users around the globe.
          </p>
          <p className="text-neutral-300">
            Support for multiple languages, making health monitoring accessible
            and easy for users around the globe.
          </p>
          <p className="text-neutral-300">
            Support for multiple languages, making health monitoring accessible
            and easy for users around the globe.
          </p>
          <p className="text-neutral-300">
            Support for multiple languages, making health monitoring accessible
            and easy for users around the globe.
          </p>
        </div>
      </div>
    </section>
  );
});

HowItWorks.displayName = "HowItWorks";

export default HowItWorks;
