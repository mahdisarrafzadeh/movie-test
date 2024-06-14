import React from "react";
import FilterMovie from "./FilterMovies";
import Link from "next/link";
import { string, testIds } from "@/utils";

const Header = () => {
  return (
    <div
      data-testid={testIds.movies.header}
      className=" w-screen bg-gray-850 bg-opacity-5  p-8 "
    >
      <Link href={string.path.home}>{string.movies.back}</Link>
      <div className="flex flex-row justify-center space-x-8 space-x-reverse">
        <FilterMovie />
      </div>
    </div>
  );
};

export default Header;
