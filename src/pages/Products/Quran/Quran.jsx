import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../../components/Card";
import Navbar from "../../../components/Navbar";

const Quran = () => {
  const [surahs, setSurahs] = useState([]);

  useEffect(() => {
    fetch("http://api.alquran.cloud/v1/surah")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data); // Assuming the data structure has a `data` key holding the surah array
        setSurahs(data.data);
      })
      .catch((error) => {
        console.error("Error fetching the surahs:", error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      {/* <ul className="sidebar-ul"> */}
      <div className="text-center bg-gray-300 text-5xl font-extrabold py-11">
        <h1 className="">Al-Quran</h1>
      </div>
      <div className="grid grid-cols-1 gap-8 p-6 px-16 bg-gray-300 sm:grid-cols-2 lg:grid-cols-3">
        {surahs.map((surah) => (
          <Link
            to={`/quran/${surah.number}`}
            className="links "
            style={{ listStyleType: "none !important" }}
            key={surah.number}
          >
            <Card Surahs={surah} />
          </Link>
        ))}
      </div>

      {/* </ul> */}
      {}
    </div>
  );
};

export default Quran;
