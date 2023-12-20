import { useState } from "react";
import mainLogo from "./assets/mcd.jpg";

function Navbar({ status, onSelect }) {
  function LoggedIn() {
    return (
      <>
        <li className="dropdown-item" onClick={() => onSelect("AccountsPage")}>
          Account Dashboard
        </li>
        <li className="dropdown-item" onClick={() => onSelect("Homepage")}>
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
                onClick={() => onSelect("Homepage")}
              >
                Home
              </li>
              <li
                className="btn nav-item nav-link active"
                onClick={() => onSelect("AboutPage")}
              >
                About
              </li>
              <li
                className="nav-item nav-link active btn"
                onClick={() => onSelect("DonationsPage")}
              >
                Request A Donation
              </li>
              <li
                className="nav-item nav-link active btn"
                onClick={() => onSelect("CareersPage")}
              >
                Careers
              </li>
              <li
                className="btn nav-item nav-link active"
                onClick={() => onSelect("ContactUsPage")}
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
    </>
  );
}

export default Navbar;
