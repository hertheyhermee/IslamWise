import React from "react";
import { useEffect } from "react";
import inheritance1 from "../../assets/inheritance3.webp";
import inheritance2 from "../../assets/inheritance2.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../components/Navbar";

const InheritanceBlog = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="bg-red-500 text-center">
        <Navbar />
      </div>
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-16 lg:gap-x-24 text-lg items-center">
        <div className="lg:col-span-3">
          <h1 className="text-3xl md:text-4xl mb-8 lg:mb-10 text-accent-400 font-medium">
            Welcome to The Islamic Inheritance Blog
          </h1>

          <div className="space-y-6 md:space-y-8">
            <p>
              In the Islamic tradition, the rules around the distribution of
              wealth are carefully outlined in the Shariah and apply to every
              Muslim. These rules are strict and do not differ from person to
              person, which is the primary difference between an Islamic will
              and a conventional will.{" "}
            </p>
            <p>
              While the fixed shares of one’s wealth are outlined in the
              Shariah, there are a number of conditions that must be met in each
              case. Bequeathing or ‘gifting’ is also allowed in an Islamic will,
              given that certain conditions are also met.
            </p>
            <p>
              It can be tricky to know where to start when compiling an Islamic
              will, since the matter is rich in rules and guidelines. Seeking
              professional advice, services and support is crucial for ensuring
              that your will is valid.
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <img
            src={inheritance1}
            alt="Family sitting around a fire pit in front of cabin"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>

        <div className="lg:col-span-2">
          <img
            src={inheritance2}
            alt="Family that manages The Wild Oasis"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>

        <div className="lg:col-span-3">
          <h1 className="text-3xl md:text-4xl mb-8 lg:mb-10 text-accent-400 font-medium">
            Learning The Islamic Inheritance Through Blog
          </h1>

          <div className="space-y-6 md:space-y-8">
            <p>
              In Islam, the heirs of a deceased Muslim’s wealth are determined
              in the Shariah and apply to every Muslim. What’s more, a Muslim is
              not permitted to distribute their wealth to only a select few of
              the heirs that are outlined, the heirs and their shares are fixed.
            </p>
            <p>
              In Islam, a wife is entitled to a quarter share of her husband’s
              estate upon his passing if she has no children. In the instance
              that she does have children, she is only entitled to one eighth.
              If the wife passes, the husband will receive half of the deceased
              wife’s estate if she has no children, and a quarter share if she
              does.{" "}
            </p>

            <div>
              <a
                href="https://athaqafahaorg.substack.com/p/medical-forensic-evidence-and-its"
                className="inline-block mt-4 dark:bg-gray-900 px-6 py-4 text-white text-base md:text-lg font-semibold hover:bg-accent-600 transition-all rounded-lg shadow-md"
              >
                Explore More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InheritanceBlog;
