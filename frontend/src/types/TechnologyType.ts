import type { ProjectTechnologyType as ProjectTechnologyType } from "./ProjectTechnologyType"

export type TechnologyType = {
    id: number,
    name: string,
    category: "frontend" | "backend" | "cms" | "databases" | "devops_and_tools" | "systems" | "documentation_and_office",
    image_url?: string,
    created_at: string,
    updated_at: string,

    projectTechnology?: ProjectTechnologyType
}