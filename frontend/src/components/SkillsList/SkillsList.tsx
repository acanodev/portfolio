import "./SkillsList.css";
import type { TechnologyType } from "../../types/TechnologyType";
import type { SoftSkillType } from "../../types/SoftSkillType";

type SkillsListProps = {
  content: TechnologyType[] | SoftSkillType[];
};

export default function SkillsList({ content }: SkillsListProps) {
  return (
    <>
      <ul className="skills-list d-flex flex-lg-row flex-md-row flex-sm-column flex-wrap justify-content-center gap-5 pt-5">
        {content.map((c) => (
          <li key={c.id} className="skills-list-item">
            <figure>
              <img src={c.image_url} className="skill-image" />
            </figure>
            <strong className="text-info">
                {"name" in c ? c.name : c.name_en}
            </strong>
          </li>
        ))}
      </ul>
    </>
  );
}
