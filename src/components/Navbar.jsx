
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light backg-primary position-fixed w-100" style={{zIndex: '1'}}>
    <div className="container">
      <Link className="navbar-brand" href="/">
        <img
          src="/src/assets/logos/ISLAMWISE_LOGO-removebg-preview (3).png"
          alt="Logo"
          style={{ width: '150px', height: "80px", objectFit: 'contain' }}
        />
      </Link>
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
            <Link className="nav-link active text-light fs-6 fw-bold text-light" aria-current="page" href="/">
               Home
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle fs-6 fw-bold text-light ms-md-4"
              href=""
              id="productsDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
               Features
            </a>
            <ul className="dropdown-menu" aria-labelledby="productsDropdown">
              <li>
                <Link className="dropdown-item" to="/features/quran">
                 
                  Quran
                </Link>
              </li>
              <li>
                <Link className="dropdown-item fs-6" to="/features/hadith">
                 
                  Hadith
                </Link>
              </li>
              <li>
                <Link className="dropdown-item fs-6" to="features/zakat-calculator">
                  
                  Zakat Calculator
                </Link>
              </li>
             
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link fs-6 fw-bold text-light ms-md-4" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fs-6 fw-bold text-light ms-md-4" to="/inheritance-blog">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fs-6 fw-bold text-light ms-md-4" to="/library">
              Madhab
            </Link>
          </li>
         
          <li className="nav-item">
            <Link className="nav-link fs-6 fw-bold text-light ms-md-4" href="/about">
              Login
            </Link>
          </li>
        
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
