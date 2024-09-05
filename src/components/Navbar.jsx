
import { Link } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => (
  // <nav className="navbar navbar-expand-lg navbar-light backg-primary position-fixed w-100" style={{zIndex: '999'}}>
  //   <div className="container">
  //     <Link className="navbar-brand" href="/">
  //       <img
  //         src="/src/assets/logos/ISLAMWISE_LOGO-removebg-preview (3).png"
  //         alt="Logo"
  //         style={{ width: '150px', height: "80px", objectFit: 'contain' }}
  //       />
  //     </Link>
  //     <button
  //       className="navbar-toggler"
  //       type="button"
  //       data-bs-toggle="collapse"
  //       data-bs-target="#navbarNav"
  //       aria-controls="navbarNav"
  //       aria-expanded="false"
  //       aria-label="Toggle navigation"
  //     >
  //       <span className="navbar-toggler-icon"></span>
  //     </button>
  //     <div className="collapse navbar-collapse" id="navbarNav">
  //       <ul className="navbar-nav ms-auto">
  //         <li className="nav-item">
  //           <Link to="/" className="nav-link active text-light fs-6 fw-bold text-light" aria-current="page" href="/">
  //              Home
  //           </Link>
  //         </li>
  //         <li className="nav-item dropdown">
  //           <a
  //             className="nav-link dropdown-toggle fs-6 fw-bold text-light ms-md-4"
  //             href=""
  //             id="productsDropdown"
  //             role="button"
  //             data-bs-toggle="dropdown"
  //             aria-expanded="false"
  //           >
  //              Features
  //           </a>
  //           <ul className="dropdown-menu" aria-labelledby="productsDropdown">
  //             <li>
  //               <Link className="dropdown-item" to="/features/quran">
                 
  //                 Quran
  //               </Link>
  //             </li>
  //             <li>
  //               <Link className="dropdown-item fs-6" to="/features/hadith">
                 
  //                 Hadith
  //               </Link>
  //             </li>
  //             <li>
  //               <Link className="dropdown-item fs-6" to="features/zakat-calculator">
                  
  //                 Zakat Calculator
  //               </Link>
  //             </li>
             
  //           </ul>
  //         </li>
  //         <li className="nav-item">
  //           <Link className="nav-link fs-6 fw-bold text-light ms-md-4" to="/about">
  //             About
  //           </Link>
  //         </li>
  //         <li className="nav-item">
  //           <Link className="nav-link fs-6 fw-bold text-light ms-md-4" to="/inheritance-blog">
  //             Blog
  //           </Link>
  //         </li>
  //         <li className="nav-item">
  //           <Link className="nav-link fs-6 fw-bold text-light ms-md-4" to="/library">
  //             Madhab
  //           </Link>
  //         </li>
         
  //         <li className="nav-item">
  //           <Link className="nav-link fs-6 fw-bold text-light ms-md-4" href="/about">
  //             Login
  //           </Link>
  //         </li>
        
  //       </ul>
  //     </div>
  //   </div>
  // </nav>
  <nav class="bg-white border-gray-200 py-5 dark:bg-gray-900">
    <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <a href="#" class="flex items-center">
            <img src="/src/assets/logos/ISLAMWISE_LOGO-removebg-preview (3).png" alt="Logo" className="h-6 mr-3 sm:h-12" alt="IslamWise Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">IslamWise</span>
        </a>
        <div class="flex items-center lg:order-2">
            <div class="hidden mt-2 mr-4 sm:inline-block">
                <span></span>
            </div>

            <a href="https://themesberg.com/product/tailwind-css/landing-page"
                class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Download</a>
            <button data-collapse-toggle="mobile-menu-2" type="button"
				class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				aria-controls="mobile-menu-2" aria-expanded="true">
				<span class="sr-only">Open main menu</span>
				<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clip-rule="evenodd"></path>
				</svg>
				<svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clip-rule="evenodd"></path>
				</svg>
			</button>
        </div>
        <div class="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                    <a href="#"
                        class="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
                        aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#"
                        class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Company</a>
                </li>
                <li>
                    <a href="#"
                        class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
                </li>
                <li>
                    <a href="#"
                        class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Features</a>
                </li>
                <li>
                    <a href="#"
                        class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
                </li>
                <li>
                    <a href="#"
                        class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
);

export default Navbar;
