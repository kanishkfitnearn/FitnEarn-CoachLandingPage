import { forwardRef } from "react";
import Image from "next/image"; // Import Image from Next.js
import { Timeline } from "./ui/timeline";

interface ContentType {
  image: string;
  title: string;
  heading: string;
  description: string;
}

const Data: ContentType[] = [
  {
    image: "Circle (17).png",
    title: "Register",
    heading: "",
    description:
      "Support for multiple languages, making health monitoring accessible and easy for users around the globe.",
  },
  {
    title: "Verify",
    heading: "7 days free trial",
    description:
      "Support for multiple languages, making health monitoring accessible and easy for users around the globe.",
    image: "Frame 2608479.png",
  },
  {
    title: "Create Content",
    heading: "Enjoy the Experience",
    description:
      "Support for multiple languages, making health monitoring accessible and easy for users around the globe.",
    image: "Frame 2608479 (1).png",
  },
  {
    title: "Engage with Users",
    heading: "Enjoy the Experience",
    description:
      "Support for multiple languages, making health monitoring accessible and easy for users around the globe.",
    image: "Frame 2608479 (1).png",
  },
];

const HowItWorksMobile = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="block md:hidden w-full bg-neutral-900">
      <div
        className="w-[87%] max-w-[1200px] mx-auto rounded-[54px] bg-custom-gradient-3 p-10 m-10 space-y-16 relative min-h-[500px]"
        data-aos="fade-up"
      >
        {/* Title Section */}
        <div className="w-full text-center" data-aos="fade-down">
          <p className="font-roboto text-[36px] md:text-[48px] font-black text-neutral-200">
            How It Works ?
          </p>
        </div>

        {/* Timeline Section */}
        <Timeline data={Data} />

        {/* Text Section */}
        {/* <div className="relative z-10 flex justify-between gap-10 mt-10 top-24">
          <p className="text-neutral-300">Support for multiple languages, making health monitoring accessible and easy for users around the globe.</p>
          <p className="text-neutral-300">Support for multiple languages, making health monitoring accessible and easy for users around the globe.</p>
          <p className="text-neutral-300">Support for multiple languages, making health monitoring accessible and easy for users around the globe.</p>
          <p className="text-neutral-300">Support for multiple languages, making health monitoring accessible and easy for users around the globe.</p>
        </div> */}
      </div>
    </section>
  );
});

// Add displayName to the component
HowItWorksMobile.displayName = "HowItWorksMobile";

export default HowItWorksMobile;
