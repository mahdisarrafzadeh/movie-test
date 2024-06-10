"use client";
import { useEffect, useState } from "react";
// App
//
import axios from "axios";
import { Movie } from "@/types/Movie";
import MovieItem from "@/components/MovieItem";
import FilterMovie from "@/components/FilterMovie";

type Props = {};

const Movies = (props: Props) => {
  const [moviesData, setMoviesData] = useState<Movie[]>([]);

  useEffect(() => {
    axios
      .get("data.json")
      .then((res) => setMoviesData(res.data.movies))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="">
      <FilterMovie />
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 ">
        {moviesData &&
          moviesData.length > 0 &&
          moviesData.map((movie) => <MovieItem movie={movie} key={movie.id} />)}
      </div>
    </div>
  );
};

export default Movies;
