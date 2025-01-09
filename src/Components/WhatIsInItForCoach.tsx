import React from "react";
import Image from "next/image";

const WhatCoachGets = () => {
  return (
    <section className="py-24 px-10 bg-neutral-900 text-white text-center relative overflow-hidden">
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
        <Image
          src="/Ellipse 1794 (2).png"
          alt="Background Ellipse"
          width={400}
          height={400}
          className="absolute"
          quality={100}
          unoptimized={true}
        />

        <Image
          src="/Ellipse 1794 (2).png"
          alt="Foreground Ellipse"
          width={300}
          height={300}
          className="absolute"
          quality={100}
          unoptimized={true}
        />

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

        <div className="absolute -top-[5%] left-[63%] text-left">
          <Image
            src="/c2.png"
            alt="Decorative Circle"
            width={100}
            height={100}
            quality={100}
            unoptimized={true}
          />
          <p>Personal Brand</p>
          <p className="font-thin text-gray-300">
            Helps you gain global audience
          </p>
        </div>

        <div className="absolute top-[10%] left-[28%] text-left">
          <Image
            src="/c1.png"
            alt="Decorative Circle"
            width={100}
            height={100}
            quality={100}
            unoptimized={true}
          />
          <p>Global Audience Access</p>
          <p className="font-thin text-gray-300 mr-5">
            Helps you gain global audience
          </p>
        </div>
        <div className="absolute top-[50%] left-[63%] text-left">
          <Image
            src="/c4.png"
            alt="Decorative Circle"
            width={100}
            height={100}
            quality={100}
            unoptimized={true}
          />
          <p>Work on Your Own Schedule</p>
          <p className="font-thin text-gray-300">
            Helps you gain global audience
          </p>
        </div>
        <div className="absolute top-[72%] left-[28%] text-left">
          <Image
            src="/c3.png"
            alt="Decorative Circle"
            width={100}
            height={100}
            quality={100}
            unoptimized={true}
          />
          <p>Revenue Opportunities</p>
          <p className="font-thin text-gray-300">
            Helps you gain global audience
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatCoachGets;
