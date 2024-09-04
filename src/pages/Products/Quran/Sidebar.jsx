import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [surahs, setSurahs] = useState([]);

  
    useEffect(() => {
      fetch('http://api.alquran.cloud/v1/surah')
      .then(response => response.json())
      .then(data => {
        console.log(data.data); // Assuming the data structure has a `data` key holding the surah array
        setSurahs(data.data);
      })
      .catch(error => {
        console.error('Error fetching the surahs:', error);
      });
    }, []);
  
    return (
      <div>
        <ul className="sidebar-ul">
        {surahs.map((surah) => (
          <Link to={`/features/quran/${surah.number}`} className="list-style-none links quran-bg" style={{listStyleType: "none !important"}} key={surah.number}>
            <h1 className="fs-3 text-white">{surah.englishName}</h1>
            {/* <small className="text-decoration-none text-white">{surah.name}</small> */}
          </Link>
        ))}
  
        </ul>
        {}
      </div>
    );
}

export default Sidebar