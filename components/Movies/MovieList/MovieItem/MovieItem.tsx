import { FC, useState } from "react";

import ImageWithFallback from "@/base/ImageFallBack";
import { Movie } from "@/types/Movie";
import { MdThumbUpAlt } from "react-icons/md";

type Props = {
  movie: Movie;
};

const MovieItem: FC<Props> = ({ movie }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="p-2 flex flex-col">
      <div
        className="relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <ImageWithFallback
          width={300}
          height={400}
          src={movie.pic.movie_img_s}
          fallbackSrc={movie.pic.movie_img_m}
          alt={movie.movie_title}
          className={`rounded-lg transition-all duration-300 ${
            hovered ? "brightness-100 opacity-15" : ""
          }`}
        />
        {hovered && (
          <div className="absolute space-y-3 rounded-lg top-0 left-0 w-full h-full flex justify-end flex-col items-start p-2 bg-gradient-to-t from-[#272727] via-transparent to-transparent">
            <div className="p-1 bg-white rounded-2xl items-center justify-center bg-opacity-10 text-[10px] flex flex-row">
              <MdThumbUpAlt size={14} className="ml-1" />
              {movie.avg_rate_label}
            </div>
            <div className="text-white text-sm">{movie.movie_title}</div>
            <div className="text-white text-xs">
              {movie.categories.map((items, index) =>
                index !== movie.categories.length - 1
                  ? items.title + "-"
                  : items.title
              )}
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-row justify-between items-center mt-1">
        <div className="text-[11px] text-gray-200">عنوان فیلم</div>
        <div className="text-[11px] font-normal bg-[#303030] rounded-2xl px-1">
          امتیاز: {movie.rate_avrage}
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
