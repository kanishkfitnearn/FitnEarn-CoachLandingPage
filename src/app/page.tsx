"use client";
import { useRef } from "react";
import Navbar from "../Components/NavBar";
import JoinCommunity from "../Components/JoinCommunity";
import KeyFeatures from "../Components/KeyFeature";
import Testimonials from "../Components/test";
import Footer from "../Components/Footer";
import HealthJourney from "../Components/HealthJourney";
import HowItWorks from "../Components/HowItWork";
import HowitWorksMobile from "../Components/HowItWorkMobile";
import WhatCoachGets from "../Components/WhatIsInItForCoach";
import BecomeACoach from "../Components/BecomeACoach";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const homeRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const howItWorksRef = useRef<HTMLElement>(null);
  const howItWorksMobileRef = useRef<HTMLElement>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHowItWorks = () => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
      howItWorksMobileRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      howItWorksRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section ref={homeRef}>
        <Navbar
          scrollToHome={scrollToHome}
          scrollToFeatures={scrollToFeatures}
          scrollToHowItWorks={scrollToHowItWorks}
        />
      </section>
<br /><br />
      <section>
        <HealthJourney />
      </section>


      <section>
        <JoinCommunity />
      </section>

      <section>
        <WhatCoachGets />
      </section>
      <section ref={featuresRef}>
        <KeyFeatures />
      </section>

      <section>
        <BecomeACoach />
      </section>

      <section ref={howItWorksRef}>
        <HowItWorks />
      </section>

      <section ref={howItWorksMobileRef}>
        <HowitWorksMobile />
      </section>

      <section>
        <Testimonials />
      </section>

      <Footer />
    </>
  );
}
