import ImageWithFallback from "@/base/ImageFallBack";
import { Movie } from "@/types/Movie";
import Image from "next/image";
import React, { FC } from "react";

type Props = {
  movie: Movie;
};

const MovieItem: FC<Props> = ({ movie }) => {
  return (
    <div className="p-2 flex flex-col">
      <ImageWithFallback
        width={300}
        height={400}
        src={movie.pic.movie_img_m}
        fallbackSrc={movie.pic.movie_img_m}
        alt={movie.movie_title}
        className="rounded-lg"
      />
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
