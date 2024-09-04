import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./quran.css"

const QuranPage = () => {
  const { id } = useParams();
  const [surah, setSurah] = useState(null);

  useEffect(() => {
    fetch(`http://api.alquran.cloud/v1/surah/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data); // Log the structure of the response
        setSurah(data.data); // Set the surah data to state
      })
      .catch((error) => {
        console.error("Error fetching the surah:", error);
      });
  }, [id]);

  if (!surah) {
    return <p>Loading...</p>;
  }

  return (
    <div
      className="main-bg text-dark demo"
      style={{
        padding: "130px 10%",
        position: "fixed",
        zIndex: "-1",
        height: "100vh",
        width: "80%",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: "1",
          width: "100%",
        //   height: "calc(100vh - 260px)", // Adjust height based on padding to fit within the container
          overflowY: "auto",
        }}
      >
        <div className="border text-center">
          <h1>{surah.englishName}</h1>
          <p>{surah.englishNameTranslation}</p>
          <p>Ayahs: {surah.numberOfAyahs}</p>
        </div>
        <div>
          {surah.ayahs.map((ayah) => (
            <div key={ayah.numberInSurah}>
              <p style={{ textAlign: "right" }}>{ayah.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuranPage;
