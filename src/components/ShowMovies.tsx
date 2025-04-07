import { IMovie } from "../models/IMovie";
import { ShowMovie } from "./ShowMovie";

type ShowwMoviesProps = {
    movies: IMovie[];
  };
  
  export const ShowMovies = (props: ShowwMoviesProps) => {
    return (
      <div className="movies">
        {props.movies.map((movie) => (
          <ShowMovie
            key={movie.imdbID}
            movie={movie}
          />
        ))}
      </div>
    );
  };