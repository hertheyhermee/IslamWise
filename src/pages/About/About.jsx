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
           IslamWise your goto Muslim App to learn more about your Religion
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            The App consist of Basic Features like Qu'ran, Hadith, Zakat Calculator, Inheritance Blog and Madhab.
          </p>
        </div>
        <div
          className="flex-1 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          data-aos="fade-right"
        >
          <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
          Islam the beautiful religion of peace
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          There are five pillars of Islam.And they are Eeman, Solat, Zakat (Alms giving) Ramadan (Fasting) and Hajj (Holy Pilgrimage).
          </p>
        </div>
        <div
          className="flex-1 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          data-aos="fade-right"
        >
          <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
            Peace and Blessings Upon the Noble Prophet Muhammad S.A.W
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Prophet Muhammad and other noble prophets are the messemgers of Allah S.W.T sent to mankind to deliver the teachings of Islam.
          </p>
        </div>
      </div>

      {/* How It Started Section */}
      <div className="container mx-auto my-16 px-4">
        <h1 className="text-center font-semibold text-3xl lg:text-4xl mb-10" data-aos="zoom-in">
          IslamWise Is Bringing Deen To Your Doorstep
        </h1>
        <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <img src={couples} alt="Couples" className="rounded-lg w-full" />
          </div>
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">Connecting Muslims to Knowledge and Understanding</h2>
            <p className="text-lg text-justify">
            IslamWise was founded with the vision of closing the gap between Muslims from different walks of life and providing them with an accessible platform to deepen their understanding of Islam. Our aim is to foster unity, encourage learning, and promote the rich heritage of Islamic knowledge. Through resources such as Tafseer Quran, hadith, a zakat calculator, and an inheritance blog, we strive to make learning accessible to all, regardless of their background or level of knowledge.
            </p>
          </div>
        </div>
      </div>

      {/* Animated Series Section */}
      <div className="container mx-auto my-16 px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">Empowering Communities through Islamic Knowledge</h2>
            <p className="text-lg text-justify">
            At IslamWise, our mission is to bridge the gap between Muslims by providing access to essential Islamic knowledge. Through carefully curated resources, including Tafseer, zakat calculation tools, and guidance on Islamic inheritance laws, we aim to make the teachings of Islam more accessible. Our journey began with a vision to educate, inspire, and unite Muslims in their spiritual growth, ensuring that everyone has the tools to learn and apply Islamic principles in their daily lives.
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
