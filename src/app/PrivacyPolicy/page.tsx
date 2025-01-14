"use client";
import React, { useState} from "react";

type BlockType =
  | { type: "header"; data: { text: string; level: number } }
  | { type: "paragraph"; data: { text: string } }
  | { type: "list"; data: { style: string; items: string[] } };

type ContentType = {
  time: number;
  blocks: BlockType[];
};

const PrivacyPolicy = () => {
  const [content, setContent] = useState<ContentType>({
    time: new Date().getTime(),
    blocks: [
      {
        type: "header",
        data: {
          text: "Privacy Policy for FitnEarnPal",
          level: 1,
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Effective Date: 12.01.2025  Last Updated: 12.01.2025",
        },
      },
      {
        type: "paragraph",
        data: {
          text: 'FitnEarnPal is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you access or use our platform ("Platform"), a product of Fit Earn Meditate. By using FitnEarnPal, you agree to the terms outlined in this Privacy Policy.',
        },
      },
      {
        type: "header",
        data: {
          text: "1. Information We Collect",
          level: 2,
        },
      },
      {
        type: "header",
        data: {
          text: "1.1. Information You Provide to Us",
          level: 3,
        },
      },
      {
        type: "paragraph",
        data: {
          text: "When you sign up or use our Platform, we may collect the following personal information:",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Name, email address, phone number, and date of birth.",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Professional credentials, certifications, and expertise (for Coaches).",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Content you create, share, or upload, such as blogs, videos, and posts.",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Payment details for processing transactions (securely handled by a third-party payment processor).",
        },
      },
      {
        type: "header",
        data: {
          text: "1.2. Information We Automatically Collect",
          level: 3,
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Device information, such as IP address, browser type, and operating system.",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Usage data, including pages viewed, time spent, and actions taken on the Platform.",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Location information if you enable location services on your device.",
        },
      },
      {
        type: "header",
        data: {
          text: "1.3. Information from Third Parties",
          level: 3,
        },
      },
      {
        type: "paragraph",
        data: {
          text: "We may receive information about you from third-party services, such as payment processors or social media platforms, if you choose to link your accounts.",
        },
      },
      {
        type: "header",
        data: {
          text: "2. How We Use Your Information",
          level: 2,
        },
      },
      {
        type: "paragraph",
        data: {
          text: "We use the information collected to:",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Provide and personalise the Platform's features and services.",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Facilitate communication between Coaches and users.",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Process payments, subscriptions, and refunds.",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Ensure the quality and security of content shared on the Platform.",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Send notifications, updates, and promotional materials (with your consent).",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Comply with legal obligations and enforce our Terms and Conditions.",
        },
      },
      {
        type: "header",
        data: {
          text: "3. How We Share Your Information",
          level: 2,
        },
      },
      {
        type: "paragraph",
        data: {
          text: "We may share your information under the following circumstances:",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "With Your Consent: When you agree to share your information with others.",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Service Providers: With third-party vendors who help us operate the Platform, such as payment processors, analytics providers, and hosting services.",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Legal Requirements: If required by law or to protect our rights, users, or the Platform.",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.",
        },
      },
      {
        type: "header",
        data: {
          text: "4. Your Data Rights",
          level: 2,
        },
      },
      {
        type: "paragraph",
        data: {
          text: "You have the following rights regarding your personal information:",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Access and Update: You can access and update your personal information through your account settings.",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Data Deletion: You can request deletion of your personal data by contacting us at support.fitnearnpal@gmail.com.",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Opt-Out: You can opt out of receiving promotional communications by following the unsubscribe instructions in our emails.",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Data Portability: You can request a copy of your data in a commonly used format.",
        },
      },
      {
        type: "header",
        data: {
          text: "5. Data Security",
          level: 2,
        },
      },
      {
        type: "paragraph",
        data: {
          text: "We implement industry-standard security measures to protect your information, including encryption of sensitive data, regular monitoring, and restricted access. However, no method of transmission over the Internet or electronic storage is 100% secure.",
        },
      },
      {
        type: "header",
        data: {
          text: "6. Children's Privacy",
          level: 2,
        },
      },
      {
        type: "paragraph",
        data: {
          text: "FitnEarnPal is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe a child has provided us with their information, please contact us at support.fitnearnpal@gmail.com.",
        },
      },
      {
        type: "header",
        data: {
          text: "7. International Data Transfers",
          level: 2,
        },
      },
      {
        type: "paragraph",
        data: {
          text: "If you access the Platform from outside India, your data may be transferred to and processed in India or other countries where our service providers are located. By using the Platform, you consent to such transfers.",
        },
      },
      {
        type: "header",
        data: {
          text: "8. Changes to This Privacy Policy",
          level: 2,
        },
      },
      {
        type: "paragraph",
        data: {
          text: "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of significant updates via email or a notice on the Platform.",
        },
      },
      {
        type: "header",
        data: {
          text: "9. Contact Us",
          level: 2,
        },
      },
      {
        type: "paragraph",
        data: {
          text: "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:",
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

  //   useEffect(() => {
  //     const fetchContent = async () => {
  //       try {
  //         const response = await fetch(
  //           "https://admin-panel-backend-knoh.onrender.com/api/privacy"
  //         );
  //         if (!response.ok) throw new Error("Failed to fetch content");

  //         const data: { content: ContentType } = await response.json();
  //         setContent(data.content);
  //       } catch (error) {
  //         console.error("Error fetching content:", error);
  //       }
  //     };
  //     fetchContent();
  //   }, []);

  const renderText = (text: string | undefined) => {
    if (!text) return null;
    const sanitizedText = text
      .replace(/&nbsp;/g, " ")
      .replace(/<b>/g, "<strong>")
      .replace(/<\/b>/g, "</strong>");
    return <span dangerouslySetInnerHTML={{ __html: sanitizedText }} />;
  };

  return (
    <div className="min-h-screen flex bg-neutral-900 text-white pt-4 pb-4 ">
      <div className="max-w-7xl mx-auto bg-neutral-900  mt-11 p-11 rounded-lg shadow-lg border border-gray-700">
        <div className="bg-custom-gradient-3 shadow-lg shadow-white p-4 rounded-lg border border-gray-600">
          {content.blocks.map((block, index) => {
            switch (block.type) {
              case "header":
                return (
                  <h2 key={index} className="text-lg font-bold text-white mb-2">
                    {block.data.text}
                  </h2>
                );
              case "paragraph":
                return (
                  <p key={index} className="text-gray-300 mb-2">
                    {renderText(block.data.text)}
                  </p>
                );
              case "list":
                return (
                  <ul
                    key={index}
                    className={`${
                      block.data.style === "unordered"
                        ? "list-disc"
                        : "list-decimal"
                    } pl-6 text-gray-300 mb-2`}
                  >
                    {block.data.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
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

export default PrivacyPolicy;
