import React from "react";

import useFilterMovies from "./useFilterMovies";
import { FilterItemsInterface } from "@/types/Filter";
import Select from "@/base/Select";

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
    <div className="flex flex-row justify-center w-screen space-x-8 bg-[#1E1E1E] bg-opacity-10 space-x-reverse p-8 ">
      <Select
        className="w-1/3"
        title="ژانر"
        items={genres}
        value={newParams.get("category") ?? undefined}
        handleChange={handleGenreFilter}
        col={2}
      />
      <Select
        className="w-1/3"
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
