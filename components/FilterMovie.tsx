import React from "react";
import Filter from "@/components/MultiSelect";
import { useState } from "react";

const genres = [
  { label: "درام", value: "drama" },
  { label: "کمدی", value: "comedy" },
  { label: "علمی تخیلی", value: "sci-fi" },
  { label: "اکشن", value: "action" },
];
const rateRange = [
  { label: "بالاترین امتیاز", value: "highest" },
  { label: "پایین ترین امتیاز", value: "lowest" },
];

const FilterMovie = () => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const handleFilterChange = (selectedItems: string[]) => {
    setSelectedGenres(selectedItems);
  };

  return (
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
  );
};

export default FilterMovie;
