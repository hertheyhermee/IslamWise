import React, { useState } from "react";

const Carousel = () => {

  const carouselDetails = useState([
    {title: "Calculate Your Zakat with Ease", subTitle: "Simplifying Obligations, Maximizing Rewards...", },
    {title: "Navigate Islamic Inheritance Laws", subTitle: "Knowledge to Ensure Fair Distribution...",},
    {title: "Unlock the Wisdom of the Quran", subTitle: "Deep Insights for a Meaningful Understanding...", img: "/src/assets/images/quran.jpg"},
    {title: "Discover Authentic Hadiths", subTitle: "Guidance from the Words of the Prophet (PBUH)...",},
    {title: "Learn from Esteemed Scholars", subTitle: "Diverse Perspectives, Unified Faith...",},
  ]);

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1>Read With Salam</h1>
              <h2>
                And your little Muslims will develop their reading skills...
              </h2>
              <div className="d-flex">
                <button className="btn btn-primary me-2">Subscribe Now</button>
                <button className="btn btn-light">Account Login</button>
              </div>
            </div>
            <div>
              <img
                src="/src/assets/tablet.png"
                alt="drawing of girl and boy"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="carousel-item active">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1>Read With Salam</h1>
              <h2>
                And your little Muslims will develop their reading skills...
              </h2>
              <div className="d-flex">
                <button className="btn btn-primary me-2">Subscribe Now</button>
                <button className="btn btn-light">Account Login</button>
              </div>
            </div>
            <div>
              <img
                src="/src/assets/tablet.png"
                alt="drawing of girl and boy"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1>Book Us For Your Event/Party</h1>
              <h2>See Jannahs Family and Friends characters perform...</h2>
              <div className="d-flex">
                <button className="btn btn-primary me-2">Book Event</button>
                <button className="btn btn-light">Upcoming Events</button>
              </div>
            </div>
            <div>
              <img
                src="/src/assets/event.png"
                alt="event"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1>Islamic Nasheeds, Books &amp; Cartoons for Kids</h1>
              <h2>
                JFF is an edutainment studio that produces Islamic educational
                materials...
              </h2>
              <div className="d-flex">
                <button className="btn btn-primary me-2">Learn More</button>
                <button className="btn btn-light">Explore E-books</button>
              </div>
            </div>
            <div>
              <img
                src="/src/assets/sis-bro.png"
                alt="sis and bro"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
