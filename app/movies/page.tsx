"use client";
import { useEffect, useState } from "react";
// App
//
import axios from "axios";
import { Movie } from "@/types/Movie";
import MovieItem from "@/components/MovieItem";
import Filter from "@/components/MultiSelect";

type Props = {};

const Movies = (props: Props) => {
  const [moviesData, setMoviesData] = useState<Movie[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const handleFilterChange = (selectedItems: string[]) => {
    setSelectedGenres(selectedItems);
    console.log("Selected genres:", selectedItems);
  };

  const genres = ["درام", "کمدی", "علمی تخیلی", "اکشن"];
  const rateRange = ["بالاترین امتیاز", "پایین ترین امتیاز"];

  useEffect(() => {
    axios
      .get("data.json")
      .then((res) => setMoviesData(res.data.movies))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="">
      <div className="flex flex-row justify-center w-screen space-x-8 space-x-reverse p-8 ">
        <Filter
          className="w-1/3"
          title="ژانر"
          items={genres}
          handleChange={handleFilterChange}
          col={2}
        />
        <Filter
          className="w-1/3"
          title="امتیاز فیلم"
          items={rateRange}
          col={1}
          handleChange={handleFilterChange}
        />
      </div>

      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 ">
        {moviesData &&
          moviesData.length > 0 &&
          moviesData.map((movie) => <MovieItem movie={movie} key={movie.id} />)}
      </div>
    </div>
  );
};

export default Movies;
