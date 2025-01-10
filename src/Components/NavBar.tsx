"use client";
import React, { useState } from "react";
import Image from "next/image"; // Import Image from Next.js

interface NavbarProps {
  scrollToFeatures: () => void;
  scrollToHowItWorks: () => void;
  scrollToHome: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  scrollToFeatures,
  scrollToHowItWorks,
  scrollToHome,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to handle the "Download Now" button click
  const handleDownloadClick = () => {
    window.open(
      "https://app.formbricks.com/s/clzmewgfs00009edi7qrj0n52",
      "_blank"
    );
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-neutral-800 bg-opacity-70 backdrop-blur-md fixed top-0 w-full z-50 px-4 md:px-11 py-2 flex items-center justify-between shadow-md transition duration-300">

        <div className="flex items-center space-x-2 ml-5 cursor-pointer">
          {/* Make the logo clickable to go to the top of the page */}
          <Image
            src="/Final FitnEarn Pal Logo (1).png"
            alt="Final FitnEarn Pal Logo (1)"
            width={32}
            height={32}
            quality={100}
            unoptimized={true}
            onClick={(e) => {
              e.preventDefault();
              scrollToHome(); // Scroll to home
            }}
            className="w-8 h-8"
          />
          <h1 className="text-orange-500 text-xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            <Image
              src="/FitnEarnPal.png"
              alt="FitnEarnPal"
              width={100}
              height={24}
              quality={100}
              unoptimized={true}
              onClick={(e) => {
                e.preventDefault();
                scrollToHome(); // Scroll to home
              }}
              className="h-6 w-auto"
            />
          </h1>
        </div>

        <ul className="hidden md:space-x-8 sm:flex space-x-6">
          {["Home", "Features", "How It Works"].map((item) => (
            <li key={item}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (item === "Home") {
                    scrollToHome(); // Handle Home scroll
                  } else if (item === "Features") {
                    scrollToFeatures();
                  } else if (item === "How It Works") {
                    scrollToHowItWorks();
                  }
                }}
                className="relative flex items-center space-x-2 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:rounded-lg after:bg-red-400 after:transition-all after:duration-500 hover:after:w-[110%] rounded-lg text-neutral-200 transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden sm:block mr-5">
          <button
            className="w-[172px] h-[40px] text-neutral-100 rounded-full bg-transparent hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 hover:text-white transition duration-300 opacity-100"
            style={{
              padding: "var(--2) var(--3) var(--2) var(--3)",
              gap: "4px",
              borderImageSource:
                "linear-gradient(to right, var(--custom-gradient2-start), var(--custom-gradient2-end))",
              borderWidth: "1.5px",
              borderStyle: "solid",
              borderImageSlice: 1,
            }}
            onClick={handleDownloadClick}
          >
            Sign Up Form
          </button>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          onClick={toggleSidebar}
          className="md:hidden text-3xl text-orange-500"
          aria-label="Open Sidebar"
        >
          ☰
        </button>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 bg-opacity-50 z-40 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar} // Close sidebar when clicked outside
      ></div>
      <div
        className={`fixed top-0 left-0 w-64 h-full backdrop-blur-3xl shadow-lg z-50 transition-transform duration-300 ${
          isSidebarOpen
            ? "transform translate-x-0"
            : "transform -translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleSidebar}
            className="text-orange-500 text-2xl"
            aria-label="Close Sidebar"
          >
            x
          </button>
        </div>

        <ul className="flex flex-col space-y-4 p-6 h-full backdrop-blue-3xl">
          {["Home", "Features", "How It Works"].map((item) => (
            <li key={item}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (item === "Home") {
                    scrollToHome();
                  } else if (item === "Features") {
                    scrollToFeatures();
                  } else if (item === "How It Works") {
                    scrollToHowItWorks();
                  }
                  setIsSidebarOpen(false); // Close sidebar after click
                }}
                className="bg-custom-gradient2 hover:from-pink-600 hover:to-orange-600 text-white font-bold px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg p-4 flex items-center space-x-3"
              >
                {item}
              </a>
            </li>
          ))}
          <div className="md:block mr-5">
            <button
              className="bg-custom-gradient2 hover:from-pink-600 hover:to-orange-600 font-bold text-white px-4 py-2 rounded-xl hover:scale-105 transition duration-300"
              onClick={handleDownloadClick}
            >
              Sign Up Form
            </button>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
