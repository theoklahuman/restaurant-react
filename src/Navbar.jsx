import { useState } from "react";
import mainLogo from "./assets/mcd.jpg";
import Homepage from "./Homepage";
import CareersPage from "./CareersPage";
import MainPageBody from "./MainPageBody";

function Navbar({ status }) {
  function LoggedIn() {
    return (
      <>
        <li
          className="dropdown-item"
          onClick={() => clickHandler("AccountsPage")}
        >
          Account Dashboard
        </li>
        <li className="dropdown-item" onClick={() => clickHandler("Homepage")}>
          Sign Out
        </li>
      </>
    );
  }

  function NotLoggedIn() {
    return (
      <li>
        <a className="dropdown-item" href="/">
          Sign In/Register
        </a>
      </li>
    );
  }
  const [activeTab, setActiveTab] = useState("Homepage");
  function clickHandler(tabInfo) {
    setActiveTab(tabInfo);
  }
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
              <li
                className="btn nav-item nav-link active"
                onClick={() => clickHandler("Homepage")}
              >
                Home
              </li>
              <li
                className="btn nav-item nav-link active"
                onClick={() => clickHandler("AboutPage")}
              >
                About
              </li>
              <li
                className="nav-item nav-link active btn"
                onClick={() => clickHandler("DonationsPage")}
              >
                Request A Donation
              </li>
              <li
                className="nav-item nav-link active btn"
                onClick={() => clickHandler("CareersPage")}
              >
                Careers
              </li>
              <li
                className="btn nav-item nav-link active"
                onClick={() => clickHandler("ContactUsPage")}
              >
                Contact Us
              </li>
              <li
                className="btn bg-info nav-item nav-link dropdown"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
              >
                My Account
                <ul className="dropdown-menu">
                  {status === true ? <LoggedIn /> : <NotLoggedIn />}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <MainPageBody activeTab={activeTab} />
    </>
  );
}

export default Navbar;
