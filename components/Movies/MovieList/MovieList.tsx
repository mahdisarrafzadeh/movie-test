"use client";
import React from "react";

import useMovieList from "@/components/Movies/MovieList/useMovieList";
import MovieItem from "./MovieItem";
import { string, testIds } from "@/utils";
import { Skeleton } from "@/base";

const MovieList = () => {
  const { filteredMovies, status } = useMovieList();

  if (status === "loading" || status === "idle") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 p-8">
        {Array(12)
          .fill(null)
          .map((_, index) => (
            <Skeleton key={index} height={"h-[20rem]"} />
          ))}
      </div>
    );
  }

  return (
    <div className="p-6">
      <span className="pr-2 text-xl max-sm:text-lg">{string.movies.title}</span>
      <div
        data-testid={testIds.movies.movieList}
        className="grid place-items-center max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 pt-4"
      >
        {filteredMovies.map((movie, index) => (
          <MovieItem
            testId={`${testIds.movies.movieItem}-${index}`}
            movie={movie}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
