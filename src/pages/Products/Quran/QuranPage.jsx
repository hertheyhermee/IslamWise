import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import { FaPlay, FaPause, FaStop, FaStepForward, FaStepBackward } from "react-icons/fa"; // Importing icons from react-icons

const QuranPage = () => {
  const { id } = useParams();
  const [surah, setSurah] = useState(null); // Surah data
  const [translations, setTranslations] = useState([]); // Translations data
  const [showTranslation, setShowTranslation] = useState(true); // Toggle translation visibility
  const [currentAyahIndex, setCurrentAyahIndex] = useState(0); // Track current ayah index
  const [isPlaying, setIsPlaying] = useState(false); // Audio play/pause state
  const audioRefs = useRef([]); // Array of refs for each ayah's audio element

  // Fetch Surah and Audio (Arabic text)
  useEffect(() => {
    fetch(`https://api.alquran.cloud/v1/quran/ar.alafasy`)
      .then((response) => response.json())
      .then((data) => {
        const filteredSurah = data.data.surahs.find((surah) => surah.number === parseInt(id));
        setSurah(filteredSurah);
      })
      .catch((error) => {
        console.error("Error fetching the surah:", error);
      });
  }, [id]);

  // Fetch translation data
  useEffect(() => {
    fetch(`http://api.alquran.cloud/v1/surah/${id}/en.asad`)
      .then((response) => response.json())
      .then((data) => {
        setTranslations(data.data.ayahs);
      })
      .catch((error) => {
        console.error("Error fetching translation:", error);
      });
  }, [id]);

  // Play an ayah
  const playAyah = (index) => {
    if (audioRefs.current[index]) {
      audioRefs.current[index].play();
      setIsPlaying(true);
      setCurrentAyahIndex(index);

      // When ayah ends, automatically play next one
      audioRefs.current[index].onended = () => {
        if (index < surah?.ayahs.length - 1) {
          playAyah(index + 1);
        } else {
          setIsPlaying(false); // Stop if it's the last ayah
        }
      };
    }
  };

  // Pause an ayah
  const pauseAyah = (index) => {
    if (audioRefs.current[index]) {
      audioRefs.current[index].pause();
      setIsPlaying(false);
    }
  };

  // Stop an ayah and reset
  const stopAyah = (index) => {
    if (audioRefs.current[index]) {
      audioRefs.current[index].pause();
      audioRefs.current[index].currentTime = 0; // Reset to the beginning
      setIsPlaying(false);
    }
  };

  // Play the entire Surah (all ayahs sequentially)
  const playSurah = () => {
    playAyah(0); // Start from the first ayah
  };

  // Pause the entire Surah
  const pauseSurah = () => {
    pauseAyah(currentAyahIndex); // Pause the currently playing ayah
  };

  // Stop the entire Surah
  const stopSurah = () => {
    stopAyah(currentAyahIndex); // Stop the currently playing ayah
    setCurrentAyahIndex(0); // Reset to the first ayah
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-y-auto bg-gray-100 p-6 relative">
        {/* Checkbox to toggle translation */}
        <div className="absolute top-6 right-6 flex items-center space-x-2">
          <input
            type="checkbox"
            id="toggleTranslation"
            className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            checked={showTranslation}
            onChange={() => setShowTranslation(!showTranslation)}
          />
          <label htmlFor="toggleTranslation" className="text-gray-700">
            Show Translation
          </label>
        </div>

        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          {/* Surah controls (play/pause/stop entire Surah) */}
          <div className="flex justify-center space-x-4 mb-6">
            <FaPlay
              className="text-3xl text-green-600 cursor-pointer hover:text-green-800"
              onClick={playSurah}
              title="Play Surah"
            />
            <FaPause
              className="text-3xl text-yellow-600 cursor-pointer hover:text-yellow-800"
              onClick={pauseSurah}
              title="Pause Surah"
            />
            <FaStop
              className="text-3xl text-red-600 cursor-pointer hover:text-red-800"
              onClick={stopSurah}
              title="Stop Surah"
            />
          </div>

          {/* Surah details */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">{surah?.englishName}</h1>
            <p className="text-lg text-gray-600">{surah?.englishNameTranslation}</p>
            {/* <p className="text-gray-500">Number of Ayahs: {surah?.numberOfAyahs}</p> */}
          </div>

          {/* Ayah list */}
          <ul className="space-y-6">
            {surah?.ayahs.map((ayah, index) => {
              const translation = translations[index]; // Match translation by index

              return (
                <li key={ayah.numberInSurah} className="border-b border-gray-300 pb-6 text-right">
                  {/* Arabic text */}
                  <p className="text-2xl leading-relaxed font-serif">{ayah.text}</p>

                  {/* Translation text */}
                  {showTranslation && translation && (
                    <p className="text-left text-gray-700 mt-4">
                      {translation.numberInSurah + ". "}
                      {translation.text || "Translation unavailable"}
                    </p>
                  )}

                  {/* Ayah controls (Play, Pause, Stop, Next, Previous) */}
                  <div className="flex justify-end space-x-4 mt-4">
                    <FaPlay
                      className="text-2xl text-green-600 cursor-pointer hover:text-green-800"
                      onClick={() => playAyah(index)}
                      title="Play Ayah"
                    />
                    <FaPause
                      className="text-2xl text-yellow-600 cursor-pointer hover:text-yellow-800"
                      onClick={() => pauseAyah(index)}
                      title="Pause Ayah"
                    />
                    <FaStop
                      className="text-2xl text-red-600 cursor-pointer hover:text-red-800"
                      onClick={() => stopAyah(index)}
                      title="Stop Ayah"
                    />
                    <FaStepBackward
                      className={`text-2xl cursor-pointer hover:text-blue-800 ${
                        index === 0 ? "text-gray-400 cursor-not-allowed" : "text-blue-600"
                      }`}
                      onClick={() => index > 0 && setCurrentAyahIndex(index - 1)}
                      title="Previous Ayah"
                    />
                    <FaStepForward
                      className={`text-2xl cursor-pointer hover:text-blue-800 ${
                        index === surah?.ayahs.length - 1 ? "text-gray-400 cursor-not-allowed" : "text-blue-600"
                      }`}
                      onClick={() => index < surah?.ayahs.length - 1 && setCurrentAyahIndex(index + 1)}
                      title="Next Ayah"
                    />
                  </div>

                  {/* Audio element for each Ayah */}
                  <audio
                    ref={(el) => (audioRefs.current[index] = el)} // Store ref for each audio element
                    src={ayah.audio}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuranPage;
