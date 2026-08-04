import { axiosConnection } from "./axiosConnection";
import type { ExperienceType } from "../types/ExperienceType";

export async function getExperience(): Promise<ExperienceType[]> {
  try {
    const { data } = await axiosConnection.get("/experience");
    return data;
  } catch (error: any) {
    console.log("ERROR RETRIEVING EXPERIENCE: " + error);
  }

  return [];
}
