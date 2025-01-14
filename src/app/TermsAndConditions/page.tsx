"use client";

import React, { useState} from "react";

// Define types for blocks
type BlockType =
  | { type: "header"; data: { text: string; level: number } }
  | { type: "paragraph"; data: { text: string } }
  | { type: "list"; data: { style: string; items: string[] } };

// Define type for content
type ContentType = {
  time: number;
  blocks: BlockType[];
};

const TermsAndConditions = () => {
  const [content] = useState<ContentType>({
  time: new Date().getTime(),
  blocks: [
    {
      type: "header",
      data: {
        text: "Terms and Conditions for FitnEarnPal",
        level: 1,
      },
    },
    {
      type: "paragraph",
      data: {
        text: "Effective Date: 12.01.2025",
      },
    },
    {
      type: "paragraph",
      data: {
        text: "Welcome to FitnEarnPal! These Terms and Conditions ('Terms') govern your access to and use of the FitnEarnPal platform ('Platform'), a product of Fit Earn Meditate. By accessing or using our Platform, you agree to comply with and be bound by these Terms. If you do not agree, you may not use the Platform.",
      },
    },
    {
      type: "header",
      data: {
        text: "1. Acceptance of Terms",
        level: 2,
      },
    },
    {
      type: "paragraph",
      data: {
        text: "By creating an account or using the Platform, you confirm that you are at least 18 years old and capable of entering into legally binding agreements. If you are accessing the Platform on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.",
      },
    },
    {
      type: "header",
      data: {
        text: "2. Platform Overview",
        level: 2,
      },
    },
    {
      type: "paragraph",
      data: {
        text: "FitnEarnPal connects certified health and fitness professionals ('Coaches') with users seeking health and wellness advice. Coaches can provide services such as blogs, videos, posts, live sessions, and workout plans, which are subject to review and approval by the FitnEarnPal admin team.",
      },
    },
    {
      type: "header",
      data: {
        text: "3. Coach Responsibilities",
        level: 2,
      },
    },
    {
      type: "list",
      data: {
        style: "unordered",
        items: [
          "Provide accurate and truthful information in your profile and all content you share.",
          "Ensure that your content adheres to our Content Guidelines and does not violate any applicable laws.",
          "Obtain all necessary certifications and permissions to provide health and fitness advice.",
          "Respect the privacy and confidentiality of users and refrain from sharing their personal information without consent.",
          "FitnEarnPal reserves the right to suspend or terminate your account for violations of these responsibilities.",
        ],
      },
    },
    {
      type: "header",
      data: {
        text: "4. User Responsibilities",
        level: 2,
      },
    },
    {
      type: "list",
      data: {
        style: "unordered",
        items: [
          "Use the Platform responsibly and in accordance with these Terms.",
          "Not misuse, harass, or engage in inappropriate behavior with Coaches or other users.",
          "Acknowledge that all advice and recommendations provided on the Platform are for informational purposes and should not replace professional medical advice.",
        ],
      },
    },
    {
      type: "header",
      data: {
        text: "5. Content Ownership and Licensing",
        level: 2,
      },
    },
    {
      type: "list",
      data: {
        style: "unordered",
        items: [
          "Coach Content: As a Coach, you retain ownership of the content you create and share on the Platform. By submitting content, you grant FitnEarnPal a non-exclusive, worldwide, royalty-free license to use, distribute, and display your content for the purposes of operating and promoting the Platform.",
          "User Content: Any feedback, comments, or suggestions you provide to FitnEarnPal may be used by the Platform to improve its services without compensation to you.",
        ],
      },
    },
    {
      type: "header",
      data: {
        text: "6. Content Moderation",
        level: 2,
      },
    },
    {
      type: "list",
      data: {
        style: "unordered",
        items: [
          "Violates these Terms or our Content Guidelines.",
          "Is deemed inappropriate, offensive, or harmful.",
          "Infringes on intellectual property rights or applicable laws.",
        ],
      },
    },
    {
      type: "header",
      data: {
        text: "7. Payments and Refunds",
        level: 2,
      },
    },
    {
      type: "list",
      data: {
        style: "unordered",
        items: [
          "Coaches may earn revenue through services provided on the Platform. Payment processing details are outlined in our Payment Policy.",
          "Users agree to the terms of service and payment for accessing premium content or sessions. Refunds are subject to our Refund Policy and are evaluated on a case-by-case basis.",
        ],
      },
    },
    {
      type: "header",
      data: {
        text: "8. Prohibited Activities",
        level: 2,
      },
    },
    {
      type: "list",
      data: {
        style: "unordered",
        items: [
          "Engage in illegal, fraudulent, or unauthorized activities on the Platform.",
          "Share or distribute harmful content, such as malware or viruses.",
          "Misrepresent your identity, certifications, or qualifications.",
        ],
      },
    },
    {
      type: "header",
      data: {
        text: "9. Privacy Policy",
        level: 2,
      },
    },
    {
      type: "paragraph",
      data: {
        text: "Your use of the Platform is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information. By using the Platform, you consent to our data practices as outlined in the Privacy Policy.",
      },
    },
    {
      type: "header",
      data: {
        text: "10. Termination of Account",
        level: 2,
      },
    },
    {
      type: "list",
      data: {
        style: "unordered",
        items: [
          "Violate these Terms or any applicable laws.",
          "Engage in actions that harm the reputation, functionality, or security of the Platform.",
        ],
      },
    },
    {
      type: "header",
      data: {
        text: "11. Limitation of Liability",
        level: 2,
      },
    },
    {
      type: "paragraph",
      data: {
        text: "FitnEarnPal is not responsible for the accuracy or reliability of content shared by Coaches or users. Any damages resulting from your use of the Platform are your responsibility.",
      },
    },
    {
      type: "header",
      data: {
        text: "12. Indemnification",
        level: 2,
      },
    },
    {
      type: "paragraph",
      data: {
        text: "You agree to indemnify and hold harmless FitnEarnPal, its affiliates, and employees from any claims, damages, or losses arising from your use of the Platform or violation of these Terms.",
      },
    },
    {
      type: "header",
      data: {
        text: "13. Changes to Terms",
        level: 2,
      },
    },
    {
      type: "paragraph",
      data: {
        text: "FitnEarnPal may update these Terms from time to time. Significant changes will be communicated via email or in-app notifications.",
      },
    },
    {
      type: "header",
      data: {
        text: "14. Governing Law and Jurisdiction",
        level: 2,
      },
    },
    {
      type: "paragraph",
      data: {
        text: "These Terms are governed by the laws of GoI, and any disputes shall be resolved in the courts of Haridwar District.",
      },
    },
    {
      type: "header",
      data: {
        text: "15. Contact Us",
        level: 2,
      },
    },
    {
      type: "paragraph",
      data: {
        text: "For questions or concerns about these Terms, you can contact us at: support.fitnearnpal@gmail.com.",
      },
    },
  ],
});


//   useEffect(() => {
//     const fetchContent = async () => {
//       try {
//         const response = await fetch(
//           "https://admin-panel-backend-knoh.onrender.com/api/terms"
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

const renderBlock = (block: BlockType, index: number) => {
    switch (block.type) {
      case "header":
        return (
          <h2
            key={index}
            className="text-lg font-bold underline text-white mb-4"
          >
            {block.data.text}
          </h2>
        );
      case "paragraph":
        return (
          <p key={index} className="text-gray-300 mb-4">
            {renderText(block.data.text)}
          </p>
        );
      case "list":
        // Render unordered or ordered list based on style
        if (block.data.style === "unordered") {
          return (
            <ul
              key={index}
              className="list-disc pl-6 text-gray-300 mb-4 space-y-1"
            >
              {block.data.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          );
        } else if (block.data.style === "ordered") {
          return (
            <ol
              key={index}
              className="list-decimal pl-6 text-gray-300 mb-4 space-y-1"
            >
              {block.data.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ol>
          );
        }
        return null;
      default:
        return null;
    }
  };

  const renderText = (text: string | undefined) => {
    if (!text) return null;

    const sanitizedText = text
      .replace(/&nbsp;/g, " ")
      .replace(/<b>/g, "<strong>")
      .replace(/<\/b>/g, "</strong>");
    return <span dangerouslySetInnerHTML={{ __html: sanitizedText }} />;
  };

  return (
    <div className="min-h-screen flex bg-neutral-900 text-white pt-4 pb-4">
      <div className="max-w-7xl mx-auto bg-neutral-900 mt-11 p-11 rounded-lg shadow-lg border border-gray-700">
        <div className="bg-custom-gradient-3 shadow-lg p-6 rounded-lg border border-gray-600">
          {content.blocks.map((block, index) => renderBlock(block, index))}
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
