import React from 'react';
import RightArrow from '../assets/right-arrow.svg'

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="/">
        <img
          src="/assets/images/logo.svg"
          alt="Logo"
          style={{ height: '163px', marginTop: '60px' }}
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
               Home
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="productsDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
               Features
            </a>
            <ul className="dropdown-menu" aria-labelledby="productsDropdown">
              <li>
                <a className="dropdown-item" href="/nasheed">
                  {/* <img
                    src="/assets/images/right-arrow.svg"
                    alt="menu-item"
                    style={{ width: '15px' }}
                  />{' '} */}
                  Quran
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/books">
                  {/* <img
                    src=<RightArrow/>
                    alt="menu-item"
                    style={{ width: '15px' }}
                  />{' '} */}
                  Hadith
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/familytalks">
                  {/* <img
                    src="/assets/right-arrow.svg"
                    alt="menu-item"
                    style={{ width: '15px' }}
                  />{' '} */}
                  Zakat Calculator
                </a>
              </li>
              {/* <li>
                <a className="dropdown-item" href="/events">
                  <img
                    src="/assets/images/right-arrow.svg"
                    alt="menu-item"
                    style={{ width: '15px' }}
                  />{' '}
                  Upcoming Events
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/rws-subscribe">
                  <img
                    src="/assets/images/right-arrow.svg"
                    alt="menu-item"
                    style={{ width: '15px' }}
                  />{' '}
                  Read With Salam
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/fof-subscribe/about">
                  <img
                    src="/assets/images/right-arrow.svg"
                    alt="menu-item"
                    style={{ width: '15px' }}
                  />{' '}
                  Friend Of The Family
                </a>
              </li> */}
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              Madhab
            </a>
          </li>
          {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="servicesDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Services
            </a>
            <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
              <li>
                <a className="dropdown-item" href="/events">
                  <img
                    src="/assets/images/right-arrow.svg"
                    alt="menu-item"
                    style={{ width: '15px' }}
                  />{' '}
                  Upcoming Booking
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/events#book">
                  <img
                    src="/assets/images/right-arrow.svg"
                    alt="menu-item"
                    style={{ width: '15px' }}
                  />{' '}
                  Event Booking
                </a>
              </li>
            </ul>
          </li> */}
          <li className="nav-item">
            <a className="nav-link" href="/about">
              Login
            </a>
          </li>
        
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
