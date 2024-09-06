import React,{useEffect} from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import Scholars from "../../components/Scholars";
import Learning from "../../components/Learning";
import AOS from "aos";
import "aos/dist/aos.css";


const Home = () => {
  useEffect(() => {
    
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="">
      <Navbar />
      <Hero/>
      <Features/>
      <Scholars/>
      <Learning/>
      <Footer/>
    </div>
  );
};

export default Home;
