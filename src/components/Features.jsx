import React from "react";

const Features = () => {
  return (
    <section id="features" className=" mt-5 sm:mt-32">
      {/* Flex Container */}
      <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        {/* What's Different */}
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            What's different about IslamWise?
          </h2>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Islamwise is dedicated to bridging the gap between Muslims by
            offering resources that promote understanding across various schools
            of thought. We provide a platform for learning through features like
            Tafseer Quran, a comprehensive Zakat calculator, and guidance on
            Islamic inheritance laws.
          </p>
        </div>

        {/* Numbered List */}
        <div className="flex flex-col space-y-8 md:w-1/2">
          {/* List Item 1 */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            {/* Heading */}
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-purple-700">
                  01
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Track Your Deen progress
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Track Your Deen progress
              </h3>
              <p className="text-center text-darkGrayishBlue md:text-left">
                Islamwise is a platform designed to enhance understanding and unity within the Muslim community. 
              </p>
            </div>
          </div>

          {/* List Item 2 */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            {/* Heading */}
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-purple-700">
                  02
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Advanced built-in reports
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Advanced built-in reports
              </h3>
              <p className="text-darkGrayishBlue">
                Through our tools like the
                Tafseer Quran, Hadith, inheritance blog, Madhab and Zakat calculator.
              </p>
            </div>
          </div>

          {/* List Item 3 */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            {/* Heading */}
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-purple-700">
                  03
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Everything you need in one place
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Everything you need in one place
              </h3>
              <p className="text-darkGrayishBlue">
                We aim to
                simplify complex Islamic teachings and bring them to life for
                both new and practicing Muslims.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
