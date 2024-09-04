import React from "react";
import Navbar from "../../components/Navbar";
import Carousel from "../../components/carousel";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Carousel/>
      <div className="container-fluid text-center my-5">
        <h3>
          IslamWise your companion on the 
        </h3>
        <div className="row">
          <div className="col-md-4">
            <div className="card p-3">
              <img
                src="src/assets/music-note.svg"
                alt="nasheeds"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Animated Nasheeds</h5>
                <p className="card-text">
                  The Prophets Loved By Allah and Much More
                </p>
                <a href="/nasheed" className="btn btn-primary">
                  See All Nasheeds
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3">
              <img
                src="/src/assets/books.svg"
                alt="books"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Books</h5>
                <p className="card-text">
                  Discover our collection of Islamic books for children
                </p>
                <a href="/books" className="btn btn-primary">
                  See All Books
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3">
              <img
                src="src/assets/family.svg"
                alt="family fun"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Family Fun & Talks</h5>
                <p className="card-text">
                  Join our family talks and activities
                </p>
                <a href="/familytalks" className="btn btn-primary">
                  See All Activities
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
