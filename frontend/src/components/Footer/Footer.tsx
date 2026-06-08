import "./Footer.css";

export default function Footer() {
  return (
    <div className="p-3">
      <footer className="text-center text-info p-3">
        <div className="row">
          <span>
            Made with <i className="bi bi-heart-fill"></i> and MERN Stack (with
            MariaDB) by Aarón Cano
          </span>
        </div>
        <div className="row d-flex justify-content-center mt-4">
          <div className="col-1">
            <a href="https://github.com/acanodev" className="text-info footer-link">
              <i className="bi bi-github"></i>
            </a>
          </div>
          <div className="col-1">
                <a href="https://www.linkedin.com/in/aar%C3%B3n-cano-42b694304/" className="text-info footer-link">
                    <i className="bi bi-linkedin"></i>
                </a>
          </div>
          <div className="col-1">
            <a href="mailto:aaroncanofdez@gmail.com" className="text-info footer-link">
                <i className="bi bi-envelope-fill"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
