import { axiosConnection } from "./axiosConnection";
import type { TechnologyType } from "../types/TechnologyType";

export async function getTechnologies(): Promise<TechnologyType[]> {
  try {
    const { data } =
      await axiosConnection.get<TechnologyType[]>("/technologies");
    return data;
  } catch (error: any) {
    console.log("ERROR RETRIEVING TECHNOLOGIES: " + error);
  }

  return [];
}