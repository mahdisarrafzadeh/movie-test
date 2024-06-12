import React from "react";
import FilterMovie from "./FilterMovies/FilterMovie";

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <FilterMovie />
    </div>
  );
};

export default Header;
