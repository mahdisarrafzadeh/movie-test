"use client";
import React from "react";
////App
//
import useMovieList from "@/components/Movies/MovieList/useMovieList";
import Skeleton from "@/base/Skeleton";
import MovieItem from "./MovieItem";
import { testIds } from "@/utils";

const MovieList = () => {
  const { filteredMovies, status } = useMovieList();

  if (status === "loading" || status === "idle") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 p-8">
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <Skeleton key={index} height={"h-[20rem]"} />
          ))}
      </div>
    );
  }

  return (
    <div
      data-testid={testIds.movies.movieList}
      className="grid place-items-center max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 p-8"
    >
      {filteredMovies.map((movie) => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
