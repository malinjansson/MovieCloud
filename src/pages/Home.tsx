import { useEffect, useState } from "react";
import { getHpMovies } from "../services/movieService";
import { IOmdbResponse } from "../models/IOmdbResponse";
import { IMovie } from "../models/IMovie";
import { Search } from "../components/Search";
import { ShowMovies } from "../components/ShowMovies";

export const Home = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        const getData = async () => {
          const data = await getHpMovies();
          setMovies(data);
        };
    
        if (movies.length > 0) return;
        getData();
      });

      const search = async (searchText: string) => {
        const response = await fetch(
          "https://omdbapi.com/?apikey=5d31eca0&&s=" + searchText
        );
    
        const data: IOmdbResponse = await response.json();
    
        setMovies(data.Search);
      };

      return <>
      < Search search={search}/>
      < ShowMovies movies={movies} />
  </>
};