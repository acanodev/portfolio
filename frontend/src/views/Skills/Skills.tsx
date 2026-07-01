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
import SkillsList from "../../components/SkillsList/SkillsList";
import SkillsMarquee from "../../components/SkillsMarquee/SkillsMarquee";
import Carousel from "../../components/Carousel/Carousel";
import CarouselItem from "../../components/CarouselItem/CarouselItem";

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
          className="btn btn-primary switch-skills-button mt-3"
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
            <>
              <div className="row d-flex justify-content-center">
                <Carousel id="myStackCarousel">
                  <CarouselItem active={true} interval={3000}>
                    <h2 className="text-info text-center">Frontend</h2>

                    <SkillsList
                      content={technologies.filter(
                        (t) => t.category === "frontend",
                      )}
                    />
                  </CarouselItem>

                  <CarouselItem interval={3000}>
                    <h2 className="text-info text-center mt-5">Backend</h2>
                    <SkillsList
                      content={technologies.filter(
                        (t) => t.category === "backend",
                      )}
                    />
                  </CarouselItem>

                  <CarouselItem interval={3000}>
                    <h2 className="text-info text-center mt-5">CMS</h2>
                    <SkillsList
                      content={technologies.filter((t) => t.category === "cms")}
                    />
                  </CarouselItem>

                  <CarouselItem interval={3000}>
                    <h2 className="text-info text-center mt-5">Databases</h2>
                    <SkillsList
                      content={technologies.filter(
                        (t) => t.category === "databases",
                      )}
                    />
                  </CarouselItem>

                  <CarouselItem interval={3000}>
                    <h2 className="text-info text-center mt-5">
                      DevOps and Tools
                    </h2>
                    <SkillsList
                      content={technologies.filter(
                        (t) => t.category === "devops_and_tools",
                      )}
                    />
                  </CarouselItem>

                  <CarouselItem interval={3000}>
                    <h2 className="text-info text-center mt-5">Systems</h2>
                    <SkillsList
                      content={technologies.filter(
                        (t) => t.category === "systems",
                      )}
                    />
                  </CarouselItem>

                  <CarouselItem interval={3000}>
                    <h2 className="text-info text-center mt-5">
                      Documentation & Office
                    </h2>
                    <SkillsList
                      content={technologies.filter(
                        (t) => t.category === "documentation_and_office",
                      )}
                    />
                  </CarouselItem>
                </Carousel>
              </div>
            </>
          )}

        {pageDisplay === "soft_skills" &&
          !loadingSoftSkills &&
          !errorSoftSkills && (
            <div className="pt-5 mb-5">
              <SkillsMarquee content={softSkills} />
            </div>
          )}
      </div>
    </>
  );
}
