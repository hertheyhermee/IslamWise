import { Link } from "react-router-dom";

import muslim1 from "../assets/characters/5.png";
import muslim2 from "../assets/characters/6.png";
import muslim3 from "../assets/characters/7.png";

const Scholars = () => {
  return (
    <section id="Scholars">
      {/* Container to heading and testm blocks */}
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center">
          Do You Wish To Learn More About Islam Virtually?
        </h2>
        {/* Scholars Container */}
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {/* Scholar 1 */}
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-300  md:w-1/3 shadow-2xl">
            <img src={muslim1} className="w-16 -mt-14 rounded-3xl" alt="" />
            <h5 className="text-lg font-bold">Mukhtaar Tijani</h5>
            <p className="text-lg text-darkGrayishBlue text-center">
              “ For those interested in learning more about important religious
              topics like Tawheed, fiqh ,Nahw and Sorfu, we encourage you to
              reach out to Ustadh Mukhtaar. <br/>(+2348119018487). ”
            </p>
          </div>

          {/* Scholar 2 */}
          <div className="flex my-10 flex-col items-center p-6 space-y-6 rounded-lg bg-gray-300 md:flex md:w-1/3 shadow-2xl">
            <img src={muslim2} className="w-16 -mt-14 rounded-3xl" alt="" />
            <h5 className="text-lg font-bold">Abdulazeez Asafa</h5>
            <p className="text-lg text-darkGrayishBlue text-center">
              “ You can reach out to Ustadh Abdulazeez to learn more about quran
              recitations and hadeeth virtually in a simplified manner.
              (+2348141847168) ”
            </p>
          </div>

          {/* Scholar 3 */}
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-300 md:flex md:w-1/3 shadow-2xl">
            <img src={muslim3} className="w-16 -mt-14 rounded-3xl" alt="" />
            <h5 className="text-lg font-bold">Abdulazeez Tiamiyu</h5>
            <p className="text-lg text-darkGrayishBlue text-center">
              “ Reach out with ustadh Abdulazeez to learn more about
              Faraaid(inheritance), islamic literature and other related islamic
              courses.(+2348037967406). ”
            </p>
          </div>
        </div>
        {/* Button */}
        <div className="my-16">
          <Link
            to="#"
            className="p-3 px-6 pt-3 inline-block mt-4  dark:bg-gray-900 py-4 text-white text-base md:text-lg font-semibold hover:bg-accent-600 transition-all rounded-lg shadow-md"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Scholars;
