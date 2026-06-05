import type { ProjectType } from "./ProjectType";
import type { TechnologyType } from "./TechnologyType";

export type ProjectTechnologyType = {
    project_id: number,
    technology_id: number,
    created_at: string,
    updated_at: string,

    project: ProjectType,
    technology: TechnologyType
}