import type { ExperienceType } from "./ExperienceType";
import type { TechnologyType } from "./TechnologyType";

export type ExperienceTechnologyType = {
    experience_id: number,
    technology_id: number,

    experience: ExperienceType,
    technology: TechnologyType
}