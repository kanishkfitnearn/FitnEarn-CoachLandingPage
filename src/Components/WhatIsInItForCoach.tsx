import React from "react";
import Image from "next/image";

const WhatCoachGets = () => {
  return (
    <section className="py-0 px-10 text-white text-center h-[42.5rem]">
      <div className="mb-20 w-full max-w-[82%] sm:max-w-[440px] lg:max-w-[540px] mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-5">
          What&apos;s in it for{" "}
          <span className="bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
            Coach
          </span>
        </h2>
        <p className="text-base sm:text-lg text-gray-400 mb-8">
          FitnEarnPal empowers coaches to grow and reach a global audience while
          providing valuable health and fitness insights to users.
        </p>
      </div>

      <div className="relative w-full h-[400px] flex justify-center items-center">
        <Image
          src="/Ellipse 1794 (2).png"
          alt="Background Ellipse"
          width={400}
          height={400}
          className="absolute min-w-60 sm:block hidden"
          quality={100}
          unoptimized={true}
        />

        <Image
          src="/Ellipse 1794 (2).png"
          alt="Foreground Ellipse"
          width={300}
          height={300}
          className="absolute min-w-48 sm:block hidden"
          quality={100}
          unoptimized={true}
        />

        <div className="relative z-10">
          <Image
            src="/111-removebg-preview.png" //iphone wali image
            alt="Mobile Mockup"
            width={250}
            height={500}
            quality={100}
            unoptimized={true}
            className="w-full max-w-xs md:max-w-md max-h-[390px] md:max-h-[490px] object-contain"
          />
        </div>

        <div className="absolute top-[0%] left-[78%] md:left-[68%] z-40 text-left">
          <Image
            src="/c2.png"
            alt="Decorative Circle"
            width={100}
            height={100}
            quality={100}
            unoptimized={true}
          />
          <p>Personal Brand</p>
          <p className="font-thin text-gray-300 sm:block hidden">
            Helps you gain global audience
          </p>
        </div>
        <div className=" absolute top-[15%] left-[5%] z-40 md:left-[18%] text-left">
          <div className="flex flex-col w-16 md:w-52">
            <Image
              src="/c1.png"
              alt="Decorative Circle"
              width={100}
              height={100}
              quality={100}
              unoptimized={true}
            />
            <p className="z-50 ">Global Audience Access</p>
            <p className="font-thin text-gray-300 mr-5 sm:block hidden">
              Helps you gain global audience
            </p>
          </div>
        </div>
        <div className="absolute top-[70%] left-[79%] md:left-[68%] z-40 text-left">
          <Image
            src="/c4.png"
            alt="Decorative Circle"
            width={100}
            height={100}
            quality={100}
            unoptimized={true}
          />
          <p>Work on Your Own Schedule</p>
          <p className="font-thin text-gray-300 sm:block hidden">
            Helps you gain global audience
          </p>
        </div>
        {/* absolute top-[80%] left-[1%] md:left-[10%] z-40 text-left */}
        <div className="absolute top-[80%] left-[5%] md:left-[18%] z-40 text-lef text-left">
          <div className="flex flex-col w-16 md:w-auto">
            <Image
              src="/c3.png"
              alt="Decorative Circle"
              width={100}
              height={100}
              quality={100}
              unoptimized={true}
              className=""
            />
            <p>Revenue Opportunities</p>
            <p className="font-thin text-gray-300 sm:block hidden">
              Helps you gain global audience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatCoachGets;
