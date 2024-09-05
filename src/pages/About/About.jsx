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
      <div className="mx-auto w-4/5 md:w-full">
        {/* <Navbar /> */}
        <div>
          {/* video */}
          <video
            src={bgVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-1/6 object-cover"
          ></video>
        </div>
        {/* hero section */}
        <div>
          <h1
            className="container text-center py-5 font-semibold"
            data-aos="fade-up" // Add AOS animation
          >
            Knowing More About Your Deen
          </h1>
        </div>
        <div
          className="container flex flex-col lg:flex-row gap-4 items-center justify-center"
          data-aos="fade-right" // Add AOS animation
        >
          <div
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 "
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
          <div
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 "
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
          <div
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 "
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>
        {/* how it started */}
        <div className="container">
          <h1
            className="text-center pt-20 font-semibold"
            data-aos="zoom-in" // Add AOS animation
          >
            Islam Wise Is Bringing Deen To Your Doorstep
          </h1>
        </div>
        <div className="container flex flex-col-reverse lg:flex-row my-20 gap-5">
          <div
            className="w-full lg:w-1/2 flex items-center justify-center"
            data-aos="fade-left" // Add AOS animation
          >
            <img src={couples} alt="" className="rounded-lg" />
          </div>
          <div
            className="w-full lg:w-1/2"
            data-aos="fade-right" // Add AOS animation
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center sm:text-left">
              How it all began
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-justify">
              First of all, we are a family of 5, myself (Hanan), my husband
              (Abdul Malik), and our 3 children, Jannah, Abdusalaam, and Asiya.
              Our journey began several years ago when our daughter Jannah began
              Junior kindergarten. Jannah, a notorious sleepy-head, and despite
              being very excited to begin school, had a difficult time waking
              up. My husband, determined to get Jannah up and ready for school
              pulled out all the stops. He would pick her up and pretend to give
              her an airplane ride, give her a few extra minutes of shut-eye,
              and sing songs he would make up. One of the songs happened to be
              “It’s time for Schule (school- in Kiswahili)”.
            </p>
          </div>
        </div>
        <div className="container flex flex-col-reverse lg:flex-row my-20 gap-5">
          <div
            className="w-full lg:w-1/2"
            data-aos="fade-right" // Add AOS animation
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center sm:text-left">
              How it all began
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-justify">
              Jannah's Family and Friends is an animated series based loosely on
              the lives of our family and Friends. Not only do we produce
              animated nasheed’s but also books for the hope of inspiring little
              Muslims and encouraging them to feel proud to be Muslim. We strive
              to create content that teaches little Muslims and their families
              the proper perspective of Muslims with regards to the many issues
              Muslims encounter in the modern world. Also, we hope to educate
              little Muslims regarding some of the rituals of Islam as well as
              their relationship with Allah Subhaana wa t’Alaa and our last and
              final messenger Prophet Muhammad (Peace be upon him). We also
              provide discussions involving the many issues surrounding raising
              Muslim children in the modern world. These discussions involve
              assisting parents on how to confront the many foreign ideologies
              which creep into the minds of our children. Please subscribe to
              our Youtube page, and Follow us on Instagram, Facebook, and
              Tiktok..Soon enough Jannah was inspired to wake up for school and
              life went on. My husband, not thinking anything of it, carried on
              singing these songs to Jannah. One day a friend of ours shared a
              video of a nasheed artist, Ilyas Mao. Malik realized that Ilyas
              didn’t use instruments and only used his voice for the
              “beats/music”. It was then that the idea came to Malik to begin to
              write nasheed’s for Muslim children. After some consultation with
              a few mashaykh we trusted, we started to embark on the creation of
              Jannah's Family and Friends. /assets/images/fampic2.jpg
            </p>
          </div>
          <div
            className="w-full lg:w-1/2 flex items-center justify-center"
            data-aos="fade-left" // Add AOS animation
          >
            <img src={hijab} alt="" className="rounded-lg" />
          </div>
          
        </div>
        <div className="container my-5">
        <h2 className="text-center font-semibold text-4xl">Our Mission</h2>
        <div className="">
        <p className="text-justify md:text-center text-base md:text-lg lg:text-xl ">
          As a brand, we are more than just a single feature or application.
          From prayer times, qibla, content to streaming, our features have
          distinct propositions that add value to Muslim life. Since 2010, we
          have pioneered the Muslim tech scene and built a digital home where
          Muslims belong, whoever and wherever they are. Our pioneering platform
          nurtures and enriches everyday experiences by collaborating with
          trailblazing Muslims to champion and discover the latest trends,
          moments, and ideas. We are diverse a bunch of individuals of different
          nationalities across geographic regions. We are part of the Muslim
          community and are committed to the cause of progressing Muslim life.
        </p>
        </div>
        </div>

      </div>
      {/* footer */}
      <div className="container mx-auto w-4/5 md:w-full py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-700">
        <div>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>
        <div className="lg:col-span-3 flex justify-between mt-6">
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
