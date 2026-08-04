import type { ProjectTechnologyType } from "./ProjectTechnologyType"

export type ProjectType = {
    id: number,
    title: string,
    description_en?: string,
    description_es?: string,
    thumbnail_url?: string,
    github_url?: string,
    demo_url?: string,
    featured: boolean,
    created_at: string,
    updated_at: string

    projectTechnology: ProjectTechnologyType[]
}