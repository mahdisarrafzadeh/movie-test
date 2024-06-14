"use client";
import React from "react";

import useMovieList from "@/components/Movies/MovieList/useMovieList";
import MovieItem from "./MovieItem";
import { testIds } from "@/utils";

const MovieList = () => {
  const movies = useMovieList();

  return (
    <div
      data-testid={testIds.movies.movieList}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 p-8"
    >
      {movies.map((movie) => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
