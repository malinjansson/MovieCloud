import { IMovieDetails } from "../models/IMovieDetails";
import { get } from "./serviceBase";

const BASE_URL = "https://omdbapi.com/?apikey=416ed51a&";

export const getMovieById = async (id: string) => {
  const data = await get<IMovieDetails>(`${BASE_URL}i=${id}`);
  return data;
};