import { Link } from "react-router";
import { IMovie } from "../models/IMovie";

type ShowMovieProps = {
    movie: IMovie;
  };
  
  export const ShowMovie = (props: ShowMovieProps) => {
    return (
      <Link to={"/movie/" + props.movie.imdbID} className="movie">
        <div className="image-container">
          <img src={props.movie.Poster} alt={props.movie.Title} />
        </div>
        <h3>{props.movie.Title}</h3>
        <p>{props.movie.Year}</p>
      </Link>
    );
  };