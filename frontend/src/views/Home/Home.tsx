import { Helmet } from "react-helmet-async";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Aarón Cano - Computer Technician & Junior Full Stack Developer · Home
        </title>
      </Helmet>

      <div className="row d-flex gap-5">
        <div className="col-5 text-center">
          <h1 className="text-info display-1 main-title">Aarón Cano</h1>
          <h2 className="sub-title ms-lg-5 ms-sm-3">
            Full Stack Developer Computer Technician
          </h2>
          <p className="text-info mt-4 ms-lg-2">
            Passionate about Linux, web development and building scalable
            applications.
          </p>
          <div className="d-flex gap-3 justify-content-center">
            <Link
              to={"https://github.com/acanodev"}
              className="btn btn-primary"
            >
              <span className="pt-1">
                <i className="bi bi-github me-2"></i> GitHub
              </span>
            </Link>

            <a href={"/cv/AaronCanoFdez_CV-1.pdf"} target="_blank" className="btn btn-primary">
              <span className="pt-1">
                <i className="bi bi-file-earmark-arrow-down-fill me-2"></i>{" "}
                Download CV
              </span>
            </a>
          </div>
        </div>
        <div className="col-5">
          <div className="placeholder bg-info w-100"></div>
        </div>
      </div>
    </>
  );
}
