"use client";
import React from "react";

import useFilterMovies from "./useFilterMovies";
import Select from "@/base/Select/Select";
import { FilterItemsInterface } from "@/types/filter";
import { testIds } from "@/utils";

const genres: FilterItemsInterface[] = [
  { label: "درام", value: "drama" },
  { label: "کمدی", value: "comedy" },
  { label: "علمی تخیلی", value: "sci-fi" },
  { label: "اکشن", value: "action" },
];
const rateRange: FilterItemsInterface[] = [
  { label: "بالاترین امتیاز", value: "highest" },
  { label: "پایین ترین امتیاز", value: "lowest" },
];

const FilterMovie = () => {
  const { handleGenreFilter, handleRateFilter, newParams } = useFilterMovies();
  return (
    <div className="flex flex-row justify-center space-x-8 space-x-reverse max-sm:flex-col max-sm:space-x-0">
      <Select
        testId={testIds.movies.genreSelect}
        className="max-sm:w-full mt-3 w-1/3"
        title="ژانر"
        items={genres}
        value={newParams.get("category") ?? undefined}
        handleChange={handleGenreFilter}
        col={2}
      />
      <Select
        testId={testIds.movies.sortSelect}
        className="max-sm:w-full mt-3 w-1/3"
        title="امتیاز فیلم"
        items={rateRange}
        col={1}
        value={newParams.get("sort") ?? undefined}
        handleChange={handleRateFilter}
      />
    </div>
  );
};

export default FilterMovie;
