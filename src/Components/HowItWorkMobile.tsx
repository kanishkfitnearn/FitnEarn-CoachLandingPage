import { forwardRef } from "react";
import { Timeline } from "./ui/timeline";

interface ContentType {
  image: string;
  title: string;
  heading: string;
  description: string;
}

const Data: ContentType[] = [
  {
    image: "/Circle (17).png",
    title: "Register",
    heading: "",
    description:
      "Support for multiple languages, making health monitoring accessible and easy for users around the globe.",
  },
  {
    image: "/Circle (18).png",
    title: "Verify",
    heading: "7 days free trial",
    description:
      "Support for multiple languages, making health monitoring accessible and easy for users around the globe.",
  },
  {
    image: "/Circle (19).png",
    title: "Create Content",
    heading: "Enjoy the Experience",
    description:
      "Support for multiple languages, making health monitoring accessible and easy for users around the globe.",
  },
  {
    image: "/Circle (20).png",
    title: "Engage with Users",
    heading: "Enjoy the Experience",
    description:
      "Support for multiple languages, making health monitoring accessible and easy for users around the globe.",
  },
];

const HowItWorksMobile = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="block md:hidden w-full">
      <div
        className="w-[87%] max-w-[1200px] space-y-16 relative min-h-[500px]"
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