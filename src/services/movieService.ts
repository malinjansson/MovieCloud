import { IMovieDetails } from "../models/IMovieDetails";
import { IOmdbResponse } from "../models/IOmdbResponse";
import { get } from "./serviceBase";

const BASE_URL = "https://omdbapi.com/?apikey=416ed51a&";

export const getHpMovies = async () => {
  const data = await get<IOmdbResponse>(`${BASE_URL}s=harry`);
  return data.Search;
};

export const getMovieById = async (id: string) => {
  const data = await get<IMovieDetails>(`${BASE_URL}i=${id}`);
  return data;
};