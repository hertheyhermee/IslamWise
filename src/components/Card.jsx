import React from "react";
import { Link } from "react-router-dom";

const Card = ({ Surahs }) => {
  return (
    <div className="flex" key={Surahs.number}>
      <Link
        to={`/quran/${Surahs.number}`}
        className="flex justify-between items-center max-w-sm w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        {/* First Column */}
        <div className="flex flex-col">
          <h5 className="mb-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {Surahs.englishName}
          </h5>
          <small className="text-white">{Surahs.englishNameTranslation}</small>
          <p className="font-normal text-gray-700 dark:text-gray-400 mt-5">
            Ayah: {Surahs.numberOfAyahs}
          </p>
        </div>

        {/* Second Column */}
        <div className="flex flex-col text-right">
          <h3 className="mb-0 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {Surahs.name}
          </h3>
          <p className="font-normal text-gray-700 dark:text-gray-400 mt-5">
            {Surahs.revelationType}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
