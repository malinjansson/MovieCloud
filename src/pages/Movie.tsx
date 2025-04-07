import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IMovieDetails } from "../models/IMovieDetails";
import { getMovieById } from "../services/movieService";
import { ShowMovieDetails } from "../components/ShowMovieDetails";
import "./../styles/movieDetails.scss";

export const Movie = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState<IMovieDetails>();

    useEffect(() => {
        const getData = async () => {
            if(id) {
                const data = await getMovieById(id);
                setMovie(data);
            }
        };
        
        if (movie) return;
        getData();
    });

    return <>{movie && <ShowMovieDetails movie={movie} />}</>;
};