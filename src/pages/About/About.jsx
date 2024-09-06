import React, { useEffect } from "react";
import bgVideo from "../../assets/bgVid.mp4";
import couples from "../../assets/couples2.webp";
import hijab from "../../assets/hijab.webp";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import Navbar from "../../components/Navbar";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Full-Width Navbar */}
      <div className="w-full"> {/* Ensure navbar is full-width */}
        <Navbar />
      </div>

      {/* Full-Width Video Section */}
      <div className="relative w-full overflow-hidden"> {/* Full width for the video */}
        <video
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-64 object-cover md:h-96 lg:h-[500px]"
        ></video>
      </div>

      {/* Hero Section */}
      <div className="text-center py-5">
        <h1 className="font-semibold text-3xl md:text-4xl" data-aos="fade-up">
          Knowing More About Your Deen
        </h1>
      </div>

      {/* Card Section */}
      <div className="flex flex-col lg:flex-row gap-6 justify-center items-stretch container mx-auto px-4">
        <div
          className="flex-1 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          data-aos="fade-right"
        >
          <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Biggest enterprise technology acquisitions in reverse chronological order.
          </p>
        </div>
        <div
          className="flex-1 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          data-aos="fade-right"
        >
          <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Biggest enterprise technology acquisitions in reverse chronological order.
          </p>
        </div>
        <div
          className="flex-1 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          data-aos="fade-right"
        >
          <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Biggest enterprise technology acquisitions in reverse chronological order.
          </p>
        </div>
      </div>

      {/* How It Started Section */}
      <div className="container mx-auto my-16 px-4">
        <h1 className="text-center font-semibold text-3xl lg:text-4xl mb-10" data-aos="zoom-in">
          Islam Wise Is Bringing Deen To Your Doorstep
        </h1>
        <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <img src={couples} alt="Couples" className="rounded-lg w-full" />
          </div>
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">How it all began</h2>
            <p className="text-lg text-justify">
              First of all, we are a family of 5, myself (Hanan), my husband (Abdul Malik), and our 3
              children, Jannah, Abdusalaam, and Asiya. Our journey began several years ago when our
              daughter Jannah began Junior kindergarten...
            </p>
          </div>
        </div>
      </div>

      {/* Animated Series Section */}
      <div className="container mx-auto my-16 px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">How it all began</h2>
            <p className="text-lg text-justify">
              Jannah's Family and Friends is an animated series based loosely on the lives of our
              family and friends. We produce animated nasheeds and books to inspire little Muslims.
              Our content educates young Muslims about their relationship with Allah and the Prophet
              Muhammad (PBUH)...
            </p>
          </div>
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <img src={hijab} alt="Hijab" className="rounded-lg w-full" />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="container mx-auto w-full lg:w-4/5 py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-700">
        <div>
          <div className="flex justify-between w-[75%] my-6">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between">
          <div>
            <h2 className="font-medium text-gray-400">Solutions</h2>
            <ul>
              <li className="py-2 text-sm">Inheritance</li>
              <li className="py-2 text-sm">Fiqh</li>
              <li className="py-2 text-sm">Quran</li>
              <li className="py-2 text-sm">Hadeeth</li>
            </ul>
          </div>
          <div>
            <h2 className="font-medium text-gray-400">Support</h2>
            <ul>
              <li className="py-2 text-sm">Pricing</li>
              <li className="py-2 text-sm">Documentation</li>
              <li className="py-2 text-sm">Guides</li>
              <li className="py-2 text-sm">API Status</li>
            </ul>
          </div>
          <div>
            <h2 className="font-medium text-gray-400">Legal</h2>
            <ul>
              <li className="py-2 text-sm">Claim</li>
              <li className="py-2 text-sm">Policy</li>
              <li className="py-2 text-sm">Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
