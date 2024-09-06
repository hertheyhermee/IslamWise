import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const scriptUrls = [
    "https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js",
  ];

  useEffect(() => {
    // This function will run when the component mounts
    setIsPageLoaded(true);

    // Import and load your JavaScript script if the page has loaded
    if (isPageLoaded) {
      scriptUrls.forEach((scriptUrl) => {
        const script = document.createElement("script");
        script.src = scriptUrl;
        script.async = true;
        document.body.appendChild(script);
      });
    }
  }, [isPageLoaded]);
  // <nav classNameName="navbar navbar-expand-lg navbar-light backg-primary position-fixed w-100" style={{zIndex: '999'}}>
  //   <div classNameName="container">
  //     <Link classNameName="navbar-brand" href="/">
  //       <img
  //         src="/src/assets/logos/ISLAMWISE_LOGO-removebg-preview (3).png"
  //         alt="Logo"
  //         style={{ width: '150px', height: "80px", objectFit: 'contain' }}
  //       />
  //     </Link>
  //     <button
  //       classNameName="navbar-toggler"
  //       type="button"
  //       data-bs-toggle="collapse"
  //       data-bs-target="#navbarNav"
  //       aria-controls="navbarNav"
  //       aria-expanded="false"
  //       aria-label="Toggle navigation"
  //     >
  //       <span classNameName="navbar-toggler-icon"></span>
  //     </button>
  //     <div classNameName="collapse navbar-collapse" id="navbarNav">
  //       <ul classNameName="navbar-nav ms-auto">
  //         <li classNameName="nav-item">
  //           <Link to="/" classNameName="nav-link active text-light fs-6 fw-bold text-light" aria-current="page" href="/">
  //              Home
  //           </Link>
  //         </li>
  //         <li classNameName="nav-item dropdown">
  //           <a
  //             classNameName="nav-link dropdown-toggle fs-6 fw-bold text-light ms-md-4"
  //             href=""
  //             id="productsDropdown"
  //             role="button"
  //             data-bs-toggle="dropdown"
  //             aria-expanded="false"
  //           >
  //              Features
  //           </a>
  //           <ul classNameName="dropdown-menu" aria-labelledby="productsDropdown">
  //             <li>
  //               <Link classNameName="dropdown-item" to="/features/quran">

  //                 Quran
  //               </Link>
  //             </li>
  //             <li>
  //               <Link classNameName="dropdown-item fs-6" to="/features/hadith">

  //                 Hadith
  //               </Link>
  //             </li>
  //             <li>
  //               <Link classNameName="dropdown-item fs-6" to="features/zakat-calculator">

  //                 Zakat Calculator
  //               </Link>
  //             </li>

  //           </ul>
  //         </li>
  //         <li classNameName="nav-item">
  //           <Link classNameName="nav-link fs-6 fw-bold text-light ms-md-4" to="/about">
  //             About
  //           </Link>
  //         </li>
  //         <li classNameName="nav-item">
  //           <Link classNameName="nav-link fs-6 fw-bold text-light ms-md-4" to="/inheritance-blog">
  //             Blog
  //           </Link>
  //         </li>
  //         <li classNameName="nav-item">
  //           <Link classNameName="nav-link fs-6 fw-bold text-light ms-md-4" to="/library">
  //             Madhab
  //           </Link>
  //         </li>

  //         <li classNameName="nav-item">
  //           <Link classNameName="nav-link fs-6 fw-bold text-light ms-md-4" href="/about">
  //             Login
  //           </Link>
  //         </li>

  //       </ul>
  //     </div>
  //   </div>
  // </nav>
  return (
    <nav className="bg-white border-gray-200 py-5 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <Link to="/" className="flex items-center">
          <img
            src="/src/assets/logos/ISLAMWISE_LOGO-removebg-preview (3).png"
            className="h-6 mr-3 sm:h-12"
            alt="IslamWise Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            IslamWise
          </span>
        </Link>
        <div className="flex items-center lg:order-2">
          <div className="hidden mt-2 mr-4 sm:inline-block">
            <span></span>
          </div>

          <Link
            to="/login"
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
          >
            Login
          </Link>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="true"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 flex items-center justify-between w-full md:w-auto"
              >
                Feature{"s"}{" "}
                <svg
                  className="w-4 h-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              {/* Dropdown menu  */}
              <div
                id="dropdownNavbar"
                className="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44"
              >
                  <ul className="py-1" aria-labelledby="dropdownLargeButton">
                  <li>
                    <Link
                      to="/features/quran"
                      className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    >
                      Quran
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/features/hadith"
                      className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    >
                      Hadith
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/features/zakat-calculator"
                      className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    >
                      Zakat Calculator
                    </Link>
                  </li>
                </ul>
                <div className="py-1">
                  <a
                    href="#"
                    className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/inheritance-blog"
                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/library"
                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Madhab
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
