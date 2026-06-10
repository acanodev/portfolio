import "./About.css";
import { ABOUT_TEXT } from "../../consts/consts";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>
          Aarón Cano - Computer Technician & Junior Full Stack Developer · About
        </title>
      </Helmet>

      <header className="pt-5 text-center">
        <h1 className="text-info display-3">About</h1>
      </header>

      <div className="about-container pb-sm-5 pb-md-0 pb-lg-0">
        <div className="row d-flex flex-sm-column flex-md-row flex-lg-row mt-4 mb-auto">
          <div className="col">
            <div className="placeholder about-placeholder bg-info w-100"></div>
          </div>
          <div className="col">
            <p className="about-p">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </>
  );
}
