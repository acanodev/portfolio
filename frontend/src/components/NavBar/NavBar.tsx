import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="p-1 mt-1 position-fixed w-100 navbar-wrapper">
      <nav className="navbar navbar-expand-lg navbar-dark bg-opacity-50 p-0 m-2">
        <div className="container-fluid">
          <Link className="navbar-brand p-2" to="/">
            <strong>
              <i className="bi bi-code-slash me-2"></i> Aarón Cano
            </strong>
          </Link>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list navbar-list"></i>
          </button>

          <div className="navbar-collapse collapse" id="navbar">
            <ul className="navbar-nav mt-2 p-2 ms-auto mb-2">
              <li className="nav-item">
                <Link className="nav-link text-info" aria-current="page" to={"/home"}>
                  <i className="bi bi-house-door-fill"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-info" to={"/about"}>
                  <i className="bi bi-person-fill"></i> About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-info" to={"/skills"}>
                  <i className="bi bi-bullseye"></i> Skills
                </Link>
              </li>
              <li>
                <Link className="nav-link text-info" to={"#"}>
                  <i className="bi bi-journal-code"></i> Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-info" to={"#"}>
                  <i className="bi bi-archive-fill"></i> Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-info" to={"#"}>
                  <i className="bi bi-envelope-fill"></i> Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
