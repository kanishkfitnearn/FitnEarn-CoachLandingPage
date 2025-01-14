"use client";
import React, { useState } from "react";

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

const ReturnAndRefund = () => {
  const [content] = useState<ContentType>({
    time: new Date().getTime(),
    blocks: [
      {
        type: "header",
        data: {
          text: "Payment Policy for FitnEarnPal",
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
          text: "At FitnEarnPal, we strive to provide a seamless and transparent payment process for all our Coaches. This Payment Policy outlines the terms and conditions regarding payments for services provided by Coaches through the Platform. By using FitnEarnPal, you agree to the terms outlined in this Payment Policy.",
        },
      },
      {
        type: "header",
        data: {
          text: "1. Payment Cycle",
          level: 2,
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Payments for services provided by Coaches, such as live sessions, bookings, or any other paid offerings, will be processed within 3-5 business days after the successful completion of the service, provided there are no objections or disputes raised by the user who availed the service.",
        },
      },
      {
        type: "header",
        data: {
          text: "2. Payment Conditions",
          level: 2,
        },
      },
      {
        type: "list",
        data: {
          style: "unordered",
          items: [
            "An agreement will be signed by the Coach and FitnEarnPal bearing all details of cost of services, partnership time period, and validation of agreement conditions and obligations.",
            "Payments will be initiated only after the user confirms that the service was completed to their satisfaction or if no objection is raised within the stipulated time frame (24 hours post-service completion).",
            "In cases where objections are raised by the user, the payment may be delayed until the issue is resolved. FitnEarnPal will work to mediate and resolve disputes promptly.",
          ],
        },
      },
      {
        type: "header",
        data: {
          text: "3. Service Completion Confirmation",
          level: 2,
        },
      },
      {
        type: "list",
        data: {
          style: "unordered",
          items: [
            "Coaches must mark the session or service as completed in the app.",
            "Users will have a 24-hour window to raise any disputes or objections regarding the service. If no objections are raised, the service will be deemed completed.",
          ],
        },
      },
      {
        type: "header",
        data: {
          text: "4. Payment Methods",
          level: 2,
        },
      },
      {
        type: "list",
        data: {
          style: "unordered",
          items: [
            "All digital payments for Indian nationals.",
            "Paypal Account for foreigners (anyone outside India).",
          ],
        },
      },
      {
        type: "header",
        data: {
          text: "5. Payment Fees",
          level: 2,
        },
      },
      {
        type: "list",
        data: {
          style: "unordered",
          items: [
            "FitnEarnPal may deduct a service fee or commission from the total amount earned by Coaches for each service. The applicable fee will be communicated to Coaches during their onboarding process and detailed in the Coach agreement.",
            "Any additional transaction charges (e.g., bank fees, currency conversion fees) will be borne by the Coach.",
          ],
        },
      },
      {
        type: "header",
        data: {
          text: "6. Taxes",
          level: 2,
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Coaches are responsible for reporting and paying any applicable taxes on the earnings received through FitnEarnPal, as per their local tax regulations. FitnEarnPal may provide earning reports to assist Coaches with tax filing.",
        },
      },
      {
        type: "header",
        data: {
          text: "7. Disputes and Refunds",
          level: 2,
        },
      },
      {
        type: "list",
        data: {
          style: "unordered",
          items: [
            "User Disputes: If a user raises a dispute regarding a service, FitnEarnPal will investigate the matter. Payments may be withheld until the dispute is resolved.",
            "Refunds: If a refund is issued to the user due to dissatisfaction or a breach of service by the Coach, the payment for that service will not be processed to the Coach.",
          ],
        },
      },
      {
        type: "header",
        data: {
          text: "8. Late Payments",
          level: 2,
        },
      },
      {
        type: "paragraph",
        data: {
          text: "While FitnEarnPal strives to ensure timely payments, unforeseen circumstances such as technical issues, incorrect payment information, or disputes may cause delays. Coaches are encouraged to contact our support team at support.fitnearnpal@gmail.com if they experience any payment delays.",
        },
      },
      {
        type: "header",
        data: {
          text: "9. Changes to Payment Policy",
          level: 2,
        },
      },
      {
        type: "paragraph",
        data: {
          text: "FitnEarnPal reserves the right to update or modify this Payment Policy at any time. Coaches will be notified of significant changes via email or through a notification on the Platform. Continued use of the Platform after such updates will constitute acceptance of the revised Payment Policy.",
        },
      },
      {
        type: "header",
        data: {
          text: "10. Contact Us",
          level: 2,
        },
      },
      {
        type: "paragraph",
        data: {
          text: "If you have questions or concerns about payments or this Payment Policy, please contact us at:",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Email: support.fitnearnpal@gmail.com",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "We value your trust and are committed to ensuring a smooth payment process for all our Coaches.",
        },
      },
    ],
  });

  // Fetch dynamic content from the backend
  //   useEffect(() => {
  //     const fetchContent = async () => {
  //       try {
  //         const response = await fetch(
  //           "https://admin-panel-backend-knoh.onrender.com/api/return"
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

  // Function to render text with sanitization
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
                  <ol
                    key={index}
                    className="list-decimal pl-6 text-gray-300 mb-2"
                  >
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

export default ReturnAndRefund;
