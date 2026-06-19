import { Helmet } from "react-helmet-async";
import { SKILLS_HEADER_TITLE, SKILLS_PAGE_TITLE } from "../../consts/consts";
import { useState } from "react";
import type { TechnologyType } from "../../types/TechnologyType";
import { getTechnologies } from "../../services/TechnologyService";
import './Skills.css';

export default function Skills() {
  const [technologies, setTechnologies] = useState<TechnologyType[]>([]);

  getTechnologies().then(setTechnologies);

  return (
    <>
      <Helmet>
        <title>{SKILLS_PAGE_TITLE}</title>
      </Helmet>

      <header className="pt-5 text-center">
        <h1 className="text-info display-3">{SKILLS_HEADER_TITLE}</h1>
      </header>

      <div className="skills-container pt-5">
        <div className="row d-flex justify-content-center">
          <h2 className="text-info text-center">Frontend</h2>

          <ul className="technology-list d-flex flex-lg-row flex-md-row flex-sm-column flex-wrap justify-content-center gap-5 pt-5">
            {technologies.map((t) => t.category === "frontend" && (
              <li key={t.id} className="technology-list-item">
                <figure>
                  <img src={t.image_url} className="technology-image" />
                </figure>
                <strong className="text-info text-center">{t.name}</strong>
              </li>
            ))}
          </ul>

          <h2 className="text-info text-center mt-5">Backend</h2>

          <ul className="technology-list d-flex flex-lg-row flex-md-row flex-sm-column flex-wrap justify-content-center gap-5 pt-5">
            {technologies.map((t) => t.category === "backend" && (
              <li key={t.id} className="technology-list-item">
                <figure>
                  <img src={t.image_url} className="technology-image" />
                </figure>
                <strong className="text-info text-center">{t.name}</strong>
              </li>
            ))}
          </ul>

          <h2 className="text-info text-center mt-5">CMS</h2>

          <ul className="technology-list d-flex flex-lg-row flex-md-row flex-sm-column flex-wrap justify-content-center gap-5 pt-5">
            {technologies.map((t) => t.category === "cms" && (
              <li key={t.id} className="technology-list-item">
                <figure>
                  <img src={t.image_url} className="technology-image" />
                </figure>
                <strong className="text-info text-center">{t.name}</strong>
              </li>
            ))}
          </ul>

          <h2 className="text-info text-center mt-5">Databases</h2>

          <ul className="technology-list d-flex flex-lg-row flex-md-row flex-sm-column flex-wrap justify-content-center gap-5 pt-5">
            {technologies.map((t) => t.category === "databases" && (
              <li key={t.id} className="technology-list-item">
                <figure>
                  <img src={t.image_url} className="technology-image" />
                </figure>
                <strong className="text-info text-center">{t.name}</strong>
              </li>
            ))}
          </ul>

          <h2 className="text-info text-center mt-5">DevOps and Tools</h2>

          <ul className="technology-list d-flex flex-lg-row flex-md-row flex-sm-column flex-wrap justify-content-center gap-5 pt-5">
            {technologies.map((t) => t.category === "devops_and_tools" && (
              <li key={t.id} className="technology-list-item">
                <figure>
                  <img src={t.image_url} className="technology-image" />
                </figure>
                <strong className="text-info text-center">{t.name}</strong>
              </li>
            ))}
          </ul>

          <h2 className="text-info text-center mt-5">Systems</h2>

          <ul className="technology-list d-flex flex-lg-row flex-md-row flex-sm-column flex-wrap justify-content-center gap-5 pt-5">
            {technologies.map((t) => t.category === "systems" && (
              <li key={t.id} className="technology-list-item">
                <figure>
                  <img src={t.image_url} className="technology-image" />
                </figure>
                <strong className="text-info text-center">{t.name}</strong>
              </li>
            ))}
          </ul>

          <h2 className="text-info text-center mt-5">Documentation & Office</h2>

          <ul className="technology-list d-flex flex-lg-row flex-md-row flex-sm-column flex-wrap justify-content-center gap-5 pt-5">
            {technologies.map((t) => t.category === "documentation_and_office" && (
              <li key={t.id} className="technology-list-item">
                <figure>
                  <img src={t.image_url} className="technology-image" />
                </figure>
                <strong className="text-info text-center">{t.name}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
