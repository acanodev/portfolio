import type { ExperienceTechnologyType } from "./ExperienceTechnologyType";

export type ExperienceType = {
    id: number,
    place: string,
    formation_en?: string,
    formation_es?: string,
    job_title_en?: string,
    job_title_es?: string,
    description_en?: string,
    description_es?: string,
    start_year: number,
    end_year?: number,
    type: "job" | "education",
    image_url?: number

    experienceTechnology: ExperienceTechnologyType[]
}   