import { FC } from "react";

import { Movie } from "@/types";

type MovieDetailsProps = {
  movie: Movie;
};

const MovieDetails: FC<MovieDetailsProps> = ({ movie }) => (
  <div className="flex flex-row justify-between items-center mt-1">
    <div className="text-[11px] text-gray-200">عنوان فیلم</div>
    <div className="text-[11px] font-normal bg-[#303030] rounded-2xl px-1">
      امتیاز: {movie.rate_avrage}
    </div>
  </div>
);

export default MovieDetails;
