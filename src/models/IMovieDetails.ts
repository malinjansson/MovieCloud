import { IMovie } from "./IMovie";


export interface IMovieDetails extends IMovie {
    Plot: string;
    Released: string;
    Actors: string;
    Genre: string;
    Runtime: string;
    Language: string;
    Ratings: IRating[];
}

interface IRating {
    Source: string;
    Value: string;

}