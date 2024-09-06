import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../../../components/Navbar";
import './quran.css'

const New = () => {
  const [surahs, setSurahs] = useState([]);
  const [activeSurah, setActiveSurah] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetch("http://api.alquran.cloud/v1/surah")
      .then((response) => response.json())
      .then((data) => {
        setSurahs(data.data);
      })
      .catch((error) => {
        console.error("Error fetching the surahs:", error);
      });
  }, []);

  // Set active surah from URL
  useEffect(() => {
    const path = location.pathname.split("/")[2];
    setActiveSurah(Number(path));
  }, [location]);

  return (
    <>
    <Navbar />
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white overflow-y-auto">
        <ul className="p-4 space-y-2">
          {surahs.map((surah) => (
            <li key={surah.number}>
              <Link
                to={`/quran/${surah.number}`}
                className={`block py-2 px-4 rounded-lg ${
                  activeSurah === surah.number ? "bg-blue-500" : "bg-gray-800"
                } hover:bg-blue-500`}
              >
                {surah.englishName}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
    </>
  );
};

export default New;
