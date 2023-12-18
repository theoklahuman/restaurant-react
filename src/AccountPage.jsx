function AccountPage() {
    return (
        <>
            <h1 className="">
                Welcome Test User!!!
              </h1>
              <div className="list-group">
                <a href="/schedule" className="list-group-item list-group-item-action">
                  {" "}
                  My Schedule{" "}
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action dropdown-toggle"
                  data-bs-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                >
                  Request
                </a>
                <ul className="dropdown-menu">
                  <li>
            <a href="" className="dropdown-item">
              {" "}
              Time Off{" "}
            </a>
                  </li>
                  <li>
            <a href="" className="dropdown-item">
              Tuition Assistance{" "}
            </a>
                  </li>
                  <li>
            <a href="" className="dropdown-item">
              Time Correction{" "}
            </a>
                  </li>
                </ul>
                <a href="#" className="list-group-item list-group-item-action">
                  {" "}
                  Training{" "}
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  Employee Handbook
                </a>
              </div>
        </>
    )
}

export default AccountPage;