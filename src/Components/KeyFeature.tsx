// import Image from "next/image";

// const features = [
//   {
//     imgSrc: "/blogIcon.png",
//     altText: "Blog Writing",
//     title: "Blog Writing",
//     description: "Coaches can write blogs",
//   },
//   {
//     imgSrc: "/liveSessionsIcon.png",
//     altText: "Live Sessions",
//     title: "Live Sessions",
//     description: "Coaches can create live sessions",
//   },
//   {
//     imgSrc: "/contentCreationIcon.png",
//     altText: "Content Creation",
//     title: "Content Creation",
//     description: "Coaches can create content",
//   },
//   {
//     imgSrc: "/workoutVideosIcon.png",
//     altText: "Workout Videos",
//     title: "Workout Videos",
//     description: "Coaches can create workout videos",
//   },
// ];

// const KeyFeatures = () => {
//   return (
//     <div className="text-white bg-neutral-900 h-screen w-screen min-h-screen">
//          <h2 className="text-3xl font-bold text-center">Key Features</h2>
//         <div className="flex flex-wrap justify-center gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-neutral-800 p-8 rounded-2xl w-64 shadow-lg text-center "
//             >
//               <div className="relative -top-16 left-1/2 shadow-lg">
//                 <Image
//                   src={feature.imgSrc}
//                   alt={feature.altText}
//                   width={120} // specify the width
//                   height={120} // specify the height
//                   quality={100}
//                   className="rounded-full"
//                 />
//               </div>

//               <h3 className="text-xl font-semibold text-gray-200">
//                 {feature.title}
//               </h3>
//               <p className="text-sm">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//      </div>
//   );
// };

// export default KeyFeatures;

import React from "react";
import Image from "next/image";

const KeyFeatures = () => {
  const features = [
    {
      title: "Blog Writing",
      altText: "Blog Writing",
      description: "Coaches can write blogs",
      icon: "/blogIcon.png",
    },
    {
      title: "Live Sessions",
      altText: "Live Sessions",
      description: "Coaches can create live sessions",
      icon: "/liveSessionsIcon.png",
    },
    {
      title: "Content Creation",
      altText: "Content Creation",
      description: "Coaches can create content",
      icon: "/contentCreationIcon.png",
    },
    {
      title: "Workout Videos",
      altText: "Workout Videos",
      description: "Coaches can create workout videos",
      icon: "/workoutVideosIcon.png",
    },
  ];

  return (
    <div className="text-white bg-neutral-900 h-full w-screen">
      <div className="py-12">
        <h1
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          data-aos="zoom-in-up"
        >
          Key Features
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="hover:scale-110 bg-neutral-800 rounded-2xl transition-transform duration-500"
            >
              <div
                className="group relative rounded-lg p-6 w-64 text-center "
                data-aos="flip-up"
              >
                <div className="absolute -top-8 left-[50%] transform -translate-x-1/2  flex items-center justify-center">
                  <div className="  flex items-center justify-center p-0">
                    <Image
                      src={feature.icon}
                      alt={feature.altText}
                      width={100}
                      height={100}
                      unoptimized={true}
                      quality={100}
                      className=" w-[75px] h-[75px]"
                    />
                  </div>
                </div>

                {/* Card Content */}
                <h3 className="mt-10 text-xl font-semibold text-gray-200">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-300 text-lg mb-8">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
