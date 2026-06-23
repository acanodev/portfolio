import { Helmet } from "react-helmet-async";
import {
  SKILLS_HEADER_TITLE,
  SKILLS_PAGE_DISPLAY_KEY,
  SKILLS_PAGE_TITLE,
  SOFT_SKILLS_HEADER_TITLE,
} from "../../consts/consts";
import { useEffect, useState } from "react";
import type { TechnologyType } from "../../types/TechnologyType";
import { getTechnologies } from "../../services/TechnologyService";
import "./Skills.css";
import type { SoftSkillType } from "../../types/SoftSkillType";
import { getSoftSkills } from "../../services/SoftSkillService";
import type { SkillsType } from "../../types/SkillsType";

export default function Skills() {
  const [technologies, setTechnologies] = useState<TechnologyType[]>([]);
  const [softSkills, setSoftSkills] = useState<SoftSkillType[]>([]);
  const [loadingTechnologies, setLoadingTechnologies] = useState<boolean>(true);
  const [loadingSoftSkills, setLoadingSoftSkills] = useState<boolean>(true);
  const [errorTechnologies, setErrorTechnologies] = useState<boolean>(false);
  const [errorSoftSkills, setErrorSoftSkills] = useState<boolean>(false);
  const [pageDisplay, setPageDisplay] = useState<SkillsType>(() => {
    return (
      (localStorage.getItem(SKILLS_PAGE_DISPLAY_KEY) as SkillsType) ||
      "my_stack"
    );
  });

  useEffect(() => {
    localStorage.setItem(SKILLS_PAGE_DISPLAY_KEY, pageDisplay);
  }, [pageDisplay]);

  useEffect(() => {
    getTechnologies()
      .then((res) => {
        setTechnologies(res);
        setLoadingTechnologies(false);
      })
      .catch(() => {
        setErrorTechnologies(true);
        setLoadingTechnologies(false);
      });
    getSoftSkills()
      .then((res) => {
        setSoftSkills(res);
        setLoadingSoftSkills(false);
      })
      .catch(() => {
        setErrorSoftSkills(true);
        setLoadingSoftSkills(false);
      });
  }, []);

  const switchSkills = (curSkills: SkillsType): void => {
    const selectedSkills =
      curSkills !== "soft_skills" ? "soft_skills" : "my_stack";
    setPageDisplay(selectedSkills);
  };

  return (
    <>
      <Helmet>
        <title>{SKILLS_PAGE_TITLE}</title>
      </Helmet>

      <header className="pt-5 text-center">
        <h1 className="text-info display-3">
          {pageDisplay === "my_stack"
            ? SKILLS_HEADER_TITLE
            : SOFT_SKILLS_HEADER_TITLE}
        </h1>
        <button
          className="btn btn-primary switch-skills-button"
          onClick={() => switchSkills(pageDisplay)}
        >
          {pageDisplay === "my_stack" && (
            <>
              <i className="bi bi-toggle-off me-2"></i>
              <span>Switch to Soft Skills</span>
            </>
          )}

          {pageDisplay === "soft_skills" && (
            <>
              <i className="bi bi-toggle-on me-2"></i>{" "}
              <span>Switch to My Stack</span>
            </>
          )}
        </button>
      </header>

      <div className="skills-container pt-5">
        {pageDisplay === "my_stack" &&
          !loadingTechnologies &&
          !errorTechnologies && (
            <div className="row d-flex justify-content-center">
              <div
                className="carousel slide"
                data-bs-ride="carousel"
                id="myStackCarousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <h2 className="text-info text-center">Frontend</h2>

                    <ul className="technology-list d-flex flex-lg-row flex-md-row flex-sm-column flex-wrap justify-content-center gap-5 pt-5">
                      {technologies.map(
                        (t) =>
                          t.category === "frontend" && (
                            <li key={t.id} className="technology-list-item">
                              <figure>
                                <img
                                  src={t.image_url}
                                  className="technology-image"
                                />
                              </figure>
                              <strong className="text-info text-center">
                                {t.name}
                              </strong>
                            </li>
                          ),
                      )}
                    </ul>
                  </div>

                  <div className="carousel-item">
                    <h2 className="text-info text-center mt-5">Backend</h2>

                    <ul className="technology-list d-flex flex-lg-row flex-md-row flex-sm-column flex-wrap justify-content-center gap-5 pt-5">
                      {technologies.map(
                        (t) =>
                          t.category === "backend" && (
                            <li key={t.id} className="technology-list-item">
                              <figure>
                                <img
                                  src={t.image_url}
                                  className="technology-image"
                                />
                              </figure>
                              <strong className="text-info text-center">
                                {t.name}
                              </strong>
                            </li>
                          ),
                      )}
                    </ul>
                  </div>

                  <div className="carousel-item">
                    <h2 className="text-info text-center mt-5">CMS</h2>

                    <ul className="technology-list d-flex flex-lg-row flex-md-row flex-sm-column flex-wrap justify-content-center gap-5 pt-5">
                      {technologies.map(
                        (t) =>
                          t.category === "cms" && (
                            <li key={t.id} className="technology-list-item">
                              <figure>
                                <img
                                  src={t.image_url}
                                  className="technology-image"
                                />
                              </figure>
                              <strong className="text-info text-center">
                                {t.name}
                              </strong>
                            </li>
                          ),
                      )}
                    </ul>
                  </div>

                  <div className="carousel-item">
                    <h2 className="text-info text-center mt-5">Databases</h2>

                    <ul className="technology-list d-flex flex-lg-row flex-md-row flex-sm-column flex-wrap justify-content-center gap-5 pt-5">
                      {technologies.map(
                        (t) =>
                          t.category === "databases" && (
                            <li key={t.id} className="technology-list-item">
                              <figure>
                                <img
                                  src={t.image_url}
                                  className="technology-image"
                                />
                              </figure>
                              <strong className="text-info text-center">
                                {t.name}
                              </strong>
                            </li>
                          ),
                      )}
                    </ul>
                  </div>

                  <div className="carousel-item">
                    <h2 className="text-info text-center mt-5">
                      DevOps and Tools
                    </h2>

                    <ul className="technology-list d-flex flex-lg-row flex-md-row flex-sm-column flex-wrap justify-content-center gap-5 pt-5">
                      {technologies.map(
                        (t) =>
                          t.category === "devops_and_tools" && (
                            <li key={t.id} className="technology-list-item">
                              <figure>
                                <img
                                  src={t.image_url}
                                  className="technology-image"
                                />
                              </figure>
                              <strong className="text-info text-center">
                                {t.name}
                              </strong>
                            </li>
                          ),
                      )}
                    </ul>
                  </div>

                  <div className="carousel-item">
                    <h2 className="text-info text-center mt-5">Systems</h2>

                    <ul className="technology-list d-flex flex-lg-row flex-md-row flex-sm-column flex-wrap justify-content-center gap-5 pt-5">
                      {technologies.map(
                        (t) =>
                          t.category === "systems" && (
                            <li key={t.id} className="technology-list-item">
                              <figure>
                                <img
                                  src={t.image_url}
                                  className="technology-image"
                                />
                              </figure>
                              <strong className="text-info text-center">
                                {t.name}
                              </strong>
                            </li>
                          ),
                      )}
                    </ul>
                  </div>

                  <div className="carousel-item">
                    <h2 className="text-info text-center mt-5">
                      Documentation & Office
                    </h2>

                    <ul className="technology-list d-flex flex-lg-row flex-md-row flex-sm-column flex-wrap justify-content-center gap-5 pt-5">
                      {technologies.map(
                        (t) =>
                          t.category === "documentation_and_office" && (
                            <li key={t.id} className="technology-list-item">
                              <figure>
                                <img
                                  src={t.image_url}
                                  className="technology-image"
                                />
                              </figure>
                              <strong className="text-info text-center">
                                {t.name}
                              </strong>
                            </li>
                          ),
                      )}
                    </ul>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#myStackCarousel"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#myStackCarousel"
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </a>
              </div>
            </div>
          )}

        {pageDisplay === "soft_skills" &&
          !loadingSoftSkills &&
          !errorSoftSkills && (
            <div className="skills-container pt-5 mb-5">
              <ul className="technology-list d-flex flex-lg-row flex-md-row flex-sm-column flex-wrap justify-content-center gap-5 pt-5">
                {softSkills.map((s) => (
                  <li key={s.id} className="soft-skill-list-item">
                    <figure>
                      <img src={s.image_url} className="technology-image" />
                    </figure>
                    <strong className="text-info text-center">
                      {s.name_en}
                    </strong>
                  </li>
                ))}
              </ul>
            </div>
          )}
      </div>
    </>
  );
}
