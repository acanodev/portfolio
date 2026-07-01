import "./SkillsMarquee.css";
import type { SoftSkillType } from "../../types/SoftSkillType";

type SkillsMarqueeProps = {
  content: SoftSkillType[];
};

export default function SkillsMarquee({ content }: SkillsMarqueeProps) {
  return (
    <div className="skills-marquee">
      <ul className="skills-marquee-track">
        {[...content, ...content].map((skill, i) => (
          <li key={`${skill.id}-${i}`} className="skills-marquee-item">
            {skill.image_url && (
              <figure className="m-0">
                <img src={skill.image_url} alt={skill.name_en} />
              </figure>
            )}
            <strong className="text-info">{skill.name_en}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
