import React from "react";
import Image from "next/image";

const WhatCoachGets = () => {
  return (
    <section className="py-10 px-10 bg-neutral-900 text-white text-center relative overflow-hidden">
      <div className="mb-20 w-full max-w-[82%] sm:max-w-[440px] lg:max-w-[540px] mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-5">
          What's in it for{" "}
          <span className="bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
            Coach
          </span>
        </h2>
        <p className="text-base sm:text-lg text-gray-400 mb-8">
          FitnEarnPal empowers coaches to grow and reach a global audience while
          providing valuable health and fitness insights to users.
        </p>
      </div>

      <div className="relative flex justify-center items-center h-[400px]">
        {/* Background Ellipse */}
        <Image
          src="/Ellipse 1794 (2).png"
          alt="Background Ellipse"
          width={400}
          height={400}
          className="absolute"
          quality={100}
          unoptimized={true}
        />

        {/* Foreground Ellipse */}
        <Image
          src="/Ellipse 1794 (2).png"
          alt="Foreground Ellipse"
          width={300}
          height={300}
          className="absolute"
          quality={100}
          unoptimized={true}
        />

        {/* Mobile Mockup */}
        <div className="relative z-10 left-9 top-5 object-cover">
          <Image
            src="/iPhone Coach.png"
            alt="Mobile Mockup"
            width={350}
            height={700}
            quality={100}
            unoptimized={true}
          />
        </div>

        {/* Decorative Circle 1 */}
        <div className="absolute -top-[5%] left-[67%] sm:text-left text-center sm:left-[67%] left-[50%] transform -translate-x-1/2 sm:translate-x-0">
          <Image
            src="/c2.png"
            alt="Decorative Circle"
            width={100}
            height={100}
            className="mx-auto sm:mx-0"
            quality={100}
            unoptimized={true}
          />
          <p className="text-sm sm:text-base">Personal Brand</p>
          <p className="font-thin text-gray-300 text-xs sm:text-sm">
            Helps you gain global audience
          </p>
        </div>

        {/* Decorative Circle 2 */}
        <div className="absolute top-[0%] sm:left-[14%] left-[50%] text-center sm:text-right transform -translate-x-1/2 sm:translate-x-0">
          <Image
            src="/c1.png"
            alt="Decorative Circle"
            width={100}
            height={100}
            className="mx-auto sm:ml-32"
            quality={100}
            unoptimized={true}
          />
          <p className="text-sm sm:text-base">Global Audience Access</p>
          <p className="font-thin text-gray-300 text-xs sm:text-sm mr-5">
            Helps you gain global audience
          </p>
        </div>

        {/* Decorative Circle 3 */}
        <div className="absolute top-[60%] sm:left-[67%] left-[50%] text-center sm:text-left transform -translate-x-1/2 sm:translate-x-0">
          <Image
            src="/c4.png"
            alt="Decorative Circle"
            width={100}
            height={100}
            className="mx-auto sm:mx-0"
            quality={100}
            unoptimized={true}
          />
          <p className="text-sm sm:text-base">Work on Your Own Schedule</p>
          <p className="font-thin text-gray-300 text-xs sm:text-sm">
            Helps you gain global audience
          </p>
        </div>

        {/* Decorative Circle 4 */}
        <div className="absolute top-[72%] sm:left-[14%] left-[50%] text-center sm:text-right transform -translate-x-1/2 sm:translate-x-0">
          <Image
            src="/c3.png"
            alt="Decorative Circle"
            width={100}
            height={100}
            className="mx-auto sm:ml-32"
            quality={100}
            unoptimized={true}
          />
          <p className="text-sm sm:text-base">Revenue Opportunities</p>
          <p className="font-thin text-gray-300 text-xs sm:text-sm">
            Helps you gain global audience
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatCoachGets;
