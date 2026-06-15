import { Helmet } from "react-helmet-async";
import "./Home.css";
import { CV_URL, GITHUB_URL, HOME_MY_NAME, HOME_PAGE_TITLE, HOME_SUB_TITLE } from "../../consts/consts";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          {HOME_PAGE_TITLE}
        </title>
      </Helmet>

      <div className="home-hero pb-sm-5 pb-md-0 pb-lg-0">
        <div className="row d-flex gap-5 flex-sm-column flex-md-row flex-lg-row">
        <div className="col text-center">
          <h1 className="text-info display-1 main-title">{HOME_MY_NAME}</h1>
          <h2 className="sub-title">
            {HOME_SUB_TITLE}
          </h2>
          <p className="text-info mt-4 ms-lg-2 home-p">
            
          </p>
          <div className="d-flex gap-3 justify-content-center">
            <a
              href={GITHUB_URL}
              className="btn btn-primary"
              target="_blank"
            >
              <span className="pt-1">
                <i className="bi bi-github me-2"></i> GitHub
              </span>
            </a>

            <a href={CV_URL} target="_blank" className="btn btn-primary">
              <span className="pt-1">
                <i className="bi bi-file-earmark-arrow-down-fill me-2"></i>{" "}
                Download CV
              </span>
            </a>
          </div>
        </div>
        <div className="col-sm-12 col-md-5 text-center">
          <div className="placeholder home-placeholder bg-info w-100"></div>
        </div>
      </div>
      </div>
    </>
  );
}
