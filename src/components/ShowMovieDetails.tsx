import { Link } from "react-router";
import { IMovieDetails } from "../models/IMovieDetails";

type ShowMovieDetailsProps = {
    movie: IMovieDetails;
  }
  
  export const ShowMovieDetails = (props: ShowMovieDetailsProps) => {
    return (
      <div className="movie-details-container">
        <button>
            <Link to={"/"}>Back to movies</Link>
          </button>
       <div className="movie-details">
          <img src={props.movie.Poster} alt={props.movie.Title} />
         <div className="movie-info">
            <div className="movie-info-box">
              <h3>{props.movie.Title}</h3>
              <p>{props.movie.Genre}</p>
            </div>
            <div className="movie-info-box">
              <h4>Description</h4>
              <p>{props.movie.Plot}</p>
            </div>
            <div className="movie-info-box">
              <h4>Year</h4>
              <p>{props.movie.Released}</p>
            </div>
            <div className="movie-info-box">
              <h4>Actors</h4>
              <p>{props.movie.Actors}</p>
            </div>
            <div className="movie-info-box">
              <h4>Runtime</h4>
              <p>{props.movie.Runtime}</p>
            </div>
            <div className="movie-info-box">
              <h4>Language</h4>
              <p>{props.movie.Language}</p>
            </div>
         </div>
       </div>
      </div>
    );
  };