import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import illustrationIntro from '../assets/quranstudents.webp';
import AOS from "aos";
import "aos/dist/aos.css";


const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id='hero' className=' '>
      {/* Flex Container */}
      <div className='container flex flex-col-reverse items-center px-12 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row'>
        {/* Left Item */}
        <div className='flex flex-col mb-32 space-y-8 md:w-1/2'>
          <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
            Bringing Islam To Your Doorstep In An Easy Way
          </h1>
          <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
            Learn More about Your Deen Virtually In A More Simplified Way.
          </p>
          <div className='flex justify-center md:justify-start'>
            <Link
              to='#'
              className='p-3 px-6 pt-2 text-white bg-purple-700 rounded-full baseline hover:bg-gray-400 hover:text-purple-700'
            >
              Get Started
            </Link>
          </div>
        </div>
        {/* Image */}
        <div className='md:w-1/2'>
          <img src={illustrationIntro} alt='' className='rounded-xl'/>
        </div>
      </div>
    </section>
  );
};

export default Hero;