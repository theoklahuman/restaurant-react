import mainLogo from "./assets/mcd.jpg"

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={mainLogo} alt="logo" width="30" height="24" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                  id="homepage__tab"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  id="donations-page"
                  className="nav-link active"
                  aria-current="page"
                  href="/donations"
                >
                  Request A Donation
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="careers-page__tab"
                  aria-current="page"
                  href="/careers"
                >
                  Careers
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/contact"
                  id="contact-us__tab"
                >
                  Contact Us
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  My Account
                </a>
                <ul className="dropdown-menu">
                    <li>
                    <a className="dropdown-item" href="/">Account Dashboard</a> 
                    </li>
                    <li>
                    <a className="dropdown-item" href="/">Sign In/Register</a> 
                    </li>
                    <li>
                    <a className="dropdown-item" href="/">Sign Out</a> 
                    </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
