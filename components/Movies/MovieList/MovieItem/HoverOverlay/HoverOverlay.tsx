import { FC } from "react";

import { MdThumbUpAlt } from "react-icons/md";
import { Movie } from "@/types";

type HoverOverlayProps = {
  movie: Movie;
};

const HoverOverlay: FC<HoverOverlayProps> = ({ movie }) => (
  <div className="absolute space-y-3 rounded-lg top-0 left-0 w-full h-full flex justify-end flex-col items-start p-2 bg-gradient-to-t from-[#272727] via-transparent to-transparent">
    <div className="p-1 bg-white rounded-2xl items-center justify-center bg-opacity-10 text-[10px] flex flex-row">
      <MdThumbUpAlt size={14} className="ml-1" />
      {movie.avg_rate_label}
    </div>
    <div className="text-white text-sm">{movie.movie_title}</div>
    <div className="text-white text-xs">
      {movie.categories.map((item, index) =>
        index !== movie.categories.length - 1 ? item.title + "-" : item.title
      )}
    </div>
  </div>
);

export default HoverOverlay;
