import React from "react";
import Link from "next/link";
////App
//
import FilterMovie from "./FilterMovies";
import { string, testIds } from "@/utils";
import { MdArrowBackIos } from "react-icons/md";

const Header = () => {
  return (
    <div
      data-testid={testIds.movies.header}
      className="relative w-screen bg-gray-850 bg-opacity-5 p-8 py-14"
    >
      <Link
        className="inline-flex items-center justify-end absolute top-5 left-16"
        href={string.path.home}
      >
        {string.movies.back}
        <MdArrowBackIos />
      </Link>
      <div className="flex flex-row justify-center space-x-8 space-x-reverse">
        <FilterMovie />
      </div>
    </div>
  );
};

export default Header;
