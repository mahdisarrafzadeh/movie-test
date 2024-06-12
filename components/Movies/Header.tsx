import React from "react";
import FilterMovie from "../FilterMovies/FilterMovie";
import Link from "next/link";

const Header = () => {
  return (
    <div className=" w-screen bg-[#1E1E1E] bg-opacity-5  p-8 ">
      <Link href={"/"}>بازگشت</Link>
      <div className="flex flex-row justify-center space-x-8 space-x-reverse">
        <FilterMovie />
      </div>
    </div>
  );
};

export default Header;
