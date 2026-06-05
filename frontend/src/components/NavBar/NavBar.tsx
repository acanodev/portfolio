import { Link } from "react-router-dom";
import './NavBar.css';

export default function NavBar() {
  return (
    <div className="p-1 mt-1 position-fixed w-100">
      <nav
        className="navbar navbar-dark bg-opacity-50 p-2"
      >
        <div className="container-fluid">
          <a className="navbar-brand p-2" href="/">
            <h1>Aarón Cano</h1>
          </a>
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
            <ul className="navbar-nav p-2 me-auto mb-2">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
