import React from "react";
import MovieCard from "./MovieCard";

let movies = [
    {
        title:'Pulp Fiction',
        description:'Best movie of all the time!'
    }, 
    {
        title:'Hot Shots',
        description:'Cool comedy'
    },
    {
        title:'Naked Gun',
        description:'Lesslie Nielsen is bunny'
    },
]

export default function MoviesList() {
    return (
        <>
            {
                movies.map((movie) => {
                    console.log(movie.title);
                    <MovieCard 
                        title={movie.title}
                        description={movie.description}
                    /> 
                })
            }
        </>
    )
}