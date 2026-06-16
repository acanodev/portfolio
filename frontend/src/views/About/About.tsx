import "./About.css";
import { ABOUT_ENJOY, ABOUT_HEADER_TITLE, ABOUT_LONG_TERM, ABOUT_PAGE_TITLE, ABOUT_TEXT, FEATURE_IN_DEVELOPMENT, RANDOM_FACTS_TITLE } from "../../consts/consts";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>
          {ABOUT_PAGE_TITLE}
        </title>
      </Helmet>

      <header className="pt-5 text-center">
        <h1 className="text-info display-3">{ABOUT_HEADER_TITLE}</h1>
      </header>

      <div className="about-container pb-sm-5 pb-md-5 pb-lg-5">
        <div className="row d-flex flex-sm-column flex-md-row flex-lg-row mt-4 mb-auto">
          <div className="col">
            <div className="placeholder about-placeholder bg-info w-100"></div>
          </div>
          <div className="col">
            <div className="pt-sm-5 pt-md-0 pt-lg-0">
              <p className="about-p">{ABOUT_TEXT}</p>
              <p className="about-p">
                <strong>🎯 Long term:</strong> {ABOUT_LONG_TERM}
              </p>
              <p className="about-p">{ABOUT_ENJOY}</p>
            </div>
          </div>
        </div>
      </div>

      <header className="pt-0 text-center">
        <h1 className="text-info display-3">{RANDOM_FACTS_TITLE}</h1>
      </header>

      <div className="about-container random-facts-container pb-sm-5 pb-md-5 pb-lg-5">
        <h3 className="text-info pt-2">{FEATURE_IN_DEVELOPMENT}</h3>
      </div>
    </>
  );
}
