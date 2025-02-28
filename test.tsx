"use client"
import React, { useState, useEffect } from "react";
import "./Testimonials.css";
 

const testimonialsData = [
  {
    text: "After joining FitnEarnPal, my audience reach has increased and I can work according to my time, which I liked the most.",
    name: "John Doe",
    role: "Yoga Trainer",
    stars: 5,
  },
  {
    text: "FitnEarnPal gave me a platform to share my fitness journey and help others achieve their goals.",
    name: "Jane Smith",
    role: "Fitness Coach",
    stars: 4,
  },
  {
    text: "The ability to conduct live sessions and write blogs has made me connect better with my audience.",
    name: "Mark Johnson",
    role: "Meditation Trainer",
    stars: 5,
  },
];

const coachComments = [
  "Best decision to join FitnEarnPal!",
  "I’ve improved my audience reach greatly!",
  "Now I can work on my schedule. Love it!",
  "Highly recommended for any fitness coach!",
  "Incredible platform for yoga professionals.",
  "Amazing tools to manage live sessions!",
];

const coachImages = ["/coach1.png", "/coach1.png", "/coach1.png", "/coach1.png", "/coach1.png", "/coach1.png"];

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
        What our <span>Coach</span> Say
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
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={coach}
              alt={`Coach ${index + 1}`}
              className="testimonial__avatar"
            />
            {hoveredIndex === index && (
              <div className="testimonial__comment">{coachComments[index]}</div>
            )}
          </div>
        ))}

        {/* Main Central Testimonial */}
        <div className="testimonial__main">
          <div className="testimonial__rating">
            {"★".repeat(testimonialsData[activeIndex].stars)}
            {"☆".repeat(5 - testimonialsData[activeIndex].stars)}
          </div>
          <p className="testimonial__text">
            {testimonialsData[activeIndex].text}
          </p>
          <img
            src="/coachMain.png"
            alt="Central Coach"
            className="testimonial__main-avatar"
          />
          <p className="testimonial__name">
            {testimonialsData[activeIndex].name}
          </p>
          <p className="testimonial__role">
            {testimonialsData[activeIndex].role}
          </p>
        </div>
      </div>

      {/* Carousel Dots */}
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
