"use client";

import React, { useState } from "react";

type BlockType = 
  | { type: "header"; data: { text: string; level: number } }
  | { type: "paragraph"; data: { text: string } }
  | { type: "list"; data: { style: string; items: string[] } };

type ContentType = {
  time: number;
  blocks: BlockType[];
};

const DataDeletionPolicy = () => {
    const [content] = useState<ContentType>({
      time: new Date().getTime(),
      blocks: [
        {
          "type": "header",
          "data": {
            "text": "Data Deletion Policy for FitnEarnPal",
            "level": 1
          }
        },
        {
          "type": "paragraph",
          "data": {
            "text": "Effective Date: 12.01.2025  Last Updated: 12.01.2025"
          }
        },
        {
          "type": "paragraph",
          "data": {
            "text": "At FitnEarnPal, we respect your right to privacy and are committed to providing a transparent and straightforward process for managing your data. This Data Deletion Policy explains how user data is handled when a deletion request is made."
          }
        },
        {
          "type": "header",
          "data": {
            "text": "1. Data Deletion Request",
            "level": 2
          }
        },
        {
          "type": "list",
          "data": {
            "style": "unordered",
            "items": [
              "Users can request the deletion of their account and personal data by contacting us at supportfitnearnpal@gmail.com or through the \"Delete My Account\" option available within the app settings.",
              "Upon receiving a deletion request, we will process and permanently delete all associated data within 15 days of the request."
            ]
          }
        },
        {
          "type": "header",
          "data": {
            "text": "2. Data Retention Exceptions",
            "level": 2
          }
        },
        {
          "type": "list",
          "data": {
            "style": "unordered",
            "items": [
              "Legal Obligations: Certain data may be retained if required to comply with applicable laws, regulations, or legal processes. This includes data related to financial transactions, tax compliance, or any ongoing legal matters.",
              "Dispute Resolution: If a deletion request coincides with an active dispute or investigation, the relevant data may be retained until the matter is resolved."
            ]
          }
        },
        {
          "type": "header",
          "data": {
            "text": "3. Scope of Data Deletion",
            "level": 2
          }
        },
        {
          "type": "list",
          "data": {
            "style": "unordered",
            "items": [
              "Personal information, including name, email, and phone number.",
              "Content created or shared by the user, such as blogs, posts, and comments.",
              "Payment information and transaction history, unless legally required to retain."
            ]
          }
        },
        {
          "type": "paragraph",
          "data": {
            "text": "Any anonymized or aggregated data, which cannot be linked back to the individual user, may be retained for analytical or operational purposes."
          }
        },
        {
          "type": "header",
          "data": {
            "text": "4. Notification of Deletion",
            "level": 2
          }
        },
        {
          "type": "paragraph",
          "data": {
            "text": "Once the deletion process is complete, users will receive a confirmation email to notify them that their data has been successfully removed."
          }
        },
        {
          "type": "header",
          "data": {
            "text": "5. Third-Party Services",
            "level": 2
          }
        },
        {
          "type": "paragraph",
          "data": {
            "text": "If the user’s data has been shared with third-party services integrated into the FitnEarnPal platform, we will notify these third parties of the deletion request and ensure the data is also removed from their systems, subject to their respective policies."
          }
        },
        {
          "type": "header",
          "data": {
            "text": "6. Reinstating Deleted Accounts",
            "level": 2
          }
        },
        {
          "type": "list",
          "data": {
            "style": "unordered",
            "items": [
              "Once the deletion process is complete, the data is permanently removed and cannot be restored.",
              "Users who wish to use FitnEarnPal again must create a new account."
            ]
          }
        },
        {
          "type": "header",
          "data": {
            "text": "7. Contact Us",
            "level": 2
          }
        },
        {
          "type": "list",
          "data": {
            "style": "unordered",
            "items": [
              "Email: support.fitnearnpal@gmail.com"
            ]
          }
        },
        {
          "type": "paragraph",
          "data": {
            "text": "At FitnEarnPal, we are committed to ensuring the highest standards of data privacy and security. Thank you for trusting us with your information."
          }
        }
      ]
    });
  

  // Fetch existing content from backend
//   useEffect(() => {
//     const fetchContent = async () => {
//       try {
//         const response = await fetch(
//           "https://admin-panel-backend-knoh.onrender.com/api/datadeletion"
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

  // Render blocks with validation for text content
  const renderText = (text: string | undefined) => {
    if (!text) return null;
    return <span dangerouslySetInnerHTML={{ __html: text }} />;
  };

  return (
    <div className="min-h-screen flex bg-black text-white pt-4 pb-4">
      <div className="max-w-7xl mx-auto bg-neutral-900 mt-11 p-11 rounded-lg shadow-lg border border-gray-700">
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
                    return block.data.style === "unordered" ? (
                      <ul key={index} className="list-disc pl-6 text-gray-300 mb-2">
                        {block.data.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <ol key={index} className="list-decimal pl-6 text-gray-300 mb-2">
                        {block.data.items.map((item, i) => (
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

export default DataDeletionPolicy;
