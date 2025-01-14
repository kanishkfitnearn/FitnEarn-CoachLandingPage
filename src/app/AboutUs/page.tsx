"use client";

import React, { useState, useEffect } from "react";

const AboutUs = () => {
  const [content, setContent] = useState<Content>({
    time: new Date().getTime(),
    blocks: [
      {
        type: "header",
        data: {
          text: "About Us",
          level: 1,
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Welcome to FitnEarnPal! FitnEarnPal is a global platform designed to empower health and fitness coaches, connecting them with users worldwide. We aim to bridge the gap between expert knowledge and user needs, fostering a community that thrives on inspiration, motivation, and education. FitnEarnPal is a product of Fit Earn Meditate, committed to promoting physical and mental well-being.",
        },
      },
      {
        type: "header",
        data: {
          text: "Our Mission",
          level: 2,
        },
      },
      {
        type: "paragraph",
        data: {
          text: "At FitnEarnPal, our mission is to create a thriving ecosystem where certified health and fitness professionals can share their expertise, inspire users, and achieve mutual growth. By leveraging the power of technology and community, we strive to make fitness and well-being accessible to everyone.",
        },
      },
      {
        type: "header",
        data: {
          text: "What We Do",
          level: 2,
        },
      },
      {
        type: "paragraph",
        data: {
          text: "FitnEarnPal offers a wide array of features for coaches to showcase their skills, including:",
        },
      },
      {
        type: "list",
        data: {
          style: "unordered",
          items: [
            "Blog Writing: Share insights and expertise with a global audience.",
            "Live Sessions: Host real-time interactive sessions with users.",
            "Content Sharing: Create and publish engaging videos, posts, and fitness tips.",
            "Workout Videos: Inspire users by sharing exercise routines and tutorials.",
            "Global Connectivity: Support in multiple languages to reach diverse audiences.",
          ],
        },
      },
      {
        type: "paragraph",
        data: {
          text: "For users, we provide access to curated content, personalized advice, and a direct connection with certified professionals, ensuring a comprehensive approach to health and fitness.",
        },
      },
      {
        type: "header",
        data: {
          text: "Our Vision",
          level: 2,
        },
      },
      {
        type: "paragraph",
        data: {
          text: "To be the leading global platform for health and fitness professionals, inspiring millions to lead healthier and happier lives.",
        },
      },
      {
        type: "header",
        data: {
          text: "Why Choose FitnEarnPal?",
          level: 2,
        },
      },
      {
        type: "list",
        data: {
          style: "unordered",
          items: [
            "A user-friendly platform built for engagement and growth.",
            "A diverse and inclusive community of coaches and users.",
            "A focus on quality and credibility with content moderation and expert oversight.",
            "Continuous innovation to enhance user and coach experiences.",
          ],
        },
      },
      {
        type: "paragraph",
        data: {
          text: "At FitnEarnPal, we’re not just building a platform; we’re cultivating a community that supports and uplifts its members, driving positive change in health and fitness. Join us today and be a part of this transformative journey!",
        },
      },
      {
        type: "header",
        data: {
          text: "Join Us",
          level: 2,
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Are you a certified health and fitness professional ready to inspire and transform lives? Join FitnEarnPal today and unlock endless opportunities to grow your personal brand, connect with a global audience, and contribute to a community committed to health and wellness.",
        },
      },
      {
        type: "list",
        data: {
          style: "ordered",
          items: [
            "Sign Up: Create your account on the FitnEarnPal platform.",
            "Set Up Your Profile: Highlight your expertise, certifications, and experience.",
            "Start Creating: Share blogs, videos, and live sessions to engage users and grow your influence.",
          ],
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Ready to make a difference? Click the button below to get started:",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "https://app.formbricks.com/s/clzlf0t9u0000ajhzqf1n63wo",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Join Now",
        },
      },
      {
        type: "header",
        data: {
          text: "Contact Us",
          level: 2,
        },
      },
      {
        type: "paragraph",
        data: {
          text: "We’re here to help! Whether you have questions, feedback, or need assistance, feel free to reach out to us. Our team is dedicated to supporting your journey on FitnEarnPal.",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Email: support.fitnearnpal@gmail.com",
        },
      },
    ],
  });

  interface Block {
    type: "header" | "paragraph" | "list";
    data: {
      text?: string;
      level?: number;
      style?: string;
      items?: string[];
    };
  }

  interface Content {
    time: number;
    blocks: Block[];
  }

  const renderText = (text: string | undefined) => {
    if (typeof text !== "string") return null;
    text = text
      .replace(/&nbsp;/g, " ")
      .replace(/<b>/g, "<strong>")
      .replace(/<\/b>/g, "</strong>");
    return <span dangerouslySetInnerHTML={{ __html: text }} />;
  };

  return (
    <div className="min-h-screen flex bg-black text-white pt-4 pb-4 ">
      <div className="max-w-7xl mx-auto bg-black  mt-11 p-11 rounded-lg shadow-lg border border-gray-700">
        <div className="bg-custom-gradient-3  p-4 rounded-lg border border-gray-600 shadow-lg shadow-white">
          {content.blocks.map((block: Block, index: number) => {
            switch (block.type) {
              case "header":
                return (
                  <h2
                    key={index}
                    className="text-lg underline font-bold text-white mb-2"
                  >
                    {block.data?.text}
                  </h2>
                );
              case "paragraph":
                return (
                  <p key={index} className="text-gray-300 mb-2">
                    {renderText(block.data?.text)}
                  </p>
                );
              case "list":
                return block.data.style === "unordered" ? (
                  <ul
                    key={index}
                    className="list-disc list-inside text-gray-300 mb-4"
                  >
                    {block.data.items?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <ol
                    key={index}
                    className="list-decimal list-inside text-gray-300 mb-4"
                  >
                    {block.data.items?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ol>
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
