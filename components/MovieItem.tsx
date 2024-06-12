import { Movie } from "@/types/Movie";
import Image from "next/image";
import React, { FC } from "react";

type Props = {
  movie: Movie;
};

const MovieItem: FC<Props> = ({ movie }) => {
  return (
    <div className="p-4 flex flex-col">
      <Image
        width={250}
        height={330}
        src={movie.pic.movie_img_m}
        alt={movie.movie_title}
        className="rounded-lg"
        overrideSrc={(movie.pic.movie_img_m, movie.pic.movie_img_s)}
      />
      <div>
        <label className="px-4">{movie.movie_title}</label>
      </div>
    </div>
  );
};

export default MovieItem;
