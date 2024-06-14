import React from "react";
import Link from "next/link";

import FilterMovie from "./FilterMovies";
import { string, testIds } from "@/utils";
import { MdArrowBackIos } from "react-icons/md";

const Header = () => {
  return (
    <div
      data-testid={testIds.movies.header}
      className="relative w-screen bg-gray-850 bg-opacity-5 px-8 pt-14 pb-8"
    >
      <Link
        className="inline-flex items-center justify-end absolute top-5 left-16"
        href={string.path.home}
      >
        {string.movies.back}
        <MdArrowBackIos />
      </Link>
      <FilterMovie />
    </div>
  );
};

export default Header;
