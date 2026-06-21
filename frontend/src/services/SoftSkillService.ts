import { axiosConnection } from "./axiosConnection";
import type { SoftSkillType } from "../types/SoftSkillType";

export async function getSoftSkills(): Promise<SoftSkillType[]> {
  try {
    const { data } = await axiosConnection.get("/soft-skills");
    return data;
  } catch (error: any) {
    console.log("ERROR RETRIEVING SOFT SKILLS: " + error);
  }

  return [];
}
