"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image"; // Import Next.js Image component
import "./Testimonials.css";

const testimonialsData = [
  {
    text: "After joining FitnEarnPal, my audience reach has increased and I can work according to my time, which I liked the most.",
    name: "Yashita",
    role: "Yoga Trainer",
    stars: 5,
    image: "/Screenshot 2025-01-06 151837.png", // Image for Yashita
  },
  {
    text: "FitnEarnPal gave me a platform to share my fitness journey and help others achieve their goals.",
    name: "Neha",
    role: "Zumba Trainer",
    stars: 4,
    image: "/Screenshot 2025-01-06 151812.png", // Image for Neha
  },
  {
    text: "The ability to conduct live sessions and write blogs has made me connect better with my audience.",
    name: "Pooja",
    role: "Meditation Trainer",
    stars: 5,
    image: "/Screenshot 2025-01-06 151933.png", // Image for Pooja
  },
];

const coachImages = [
  "/Circle (21).png",
  "/Group 1000005368.png",
  "/Group 1000005371 (1).png",
  "/Group 1000005372.png",
  "/Group 1000005369.png",
  "/Group 1000005370.png",
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(0);

  // Auto-scroll functionality for the main testimonial
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials">
      <h2 className="testimonials__title">
        What our <span>Coach Say</span>
      </h2>
      <p className="testimonials__subtitle">
        FitnEarnPal empowers coaches to grow and reach a global audience while
        providing valuable health and fitness insights to users.
      </p>
      <div className="testimonials__container">
        {coachImages.map((coach, index) => (
          <div
            key={index}
            className={`testimonial__avatar-container ${
              hoveredIndex === index ? "hovered" : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(0)}
          >
            <Image
              src={coach}
              alt={`Coach ${index + 1}`}
              className="testimonial__avatar"
              width={100} // Add width and height
              height={100}
            />
          </div>
        ))}

        <div className="rounded-lg py-8 px-6 text-center mx-auto w-72 relative min-h-[250px] z-20">
          <div className="text-lg text-yellow-400 mb-4">
            {"★".repeat(testimonialsData[activeIndex].stars)}
            {"☆".repeat(5 - testimonialsData[activeIndex].stars)}
          </div>
          <p className="text-base text-gray-400 mb-4">
            {testimonialsData[activeIndex].text}
          </p>
          <Image
            src={testimonialsData[activeIndex].image} // Dynamic image based on activeIndex
            alt={testimonialsData[activeIndex].name}
            className="w-24 h-24 rounded-full mb-4 mx-auto"
            width={96} // Add width and height for Image component
            height={96}
          />
          <p className="text-lg font-bold text-white mb-1">
            {testimonialsData[activeIndex].name}
          </p>
          <p className="text-base text-red-400">
            {testimonialsData[activeIndex].role}
          </p>
        </div>
      </div>

      <div className="testimonials__dots">
        {testimonialsData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
