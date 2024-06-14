import { FC, useState } from "react";

import ImageWithFallback from "@/base/ImageFallBack/ImageFallBack";
import { HoverOverlay } from "../HoverOverlay";
import { Movie } from "@/types";

type HoverableImageProps = {
  movie: Movie;
};

const HoverableImage: FC<HoverableImageProps> = ({ movie }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <ImageWithFallback
        width={300}
        height={400}
        src={movie.pic.movie_img_m}
        fallbackSrc={movie.pic.movie_img_m}
        alt={movie.movie_title}
        className={`rounded-lg transition-all duration-300 ${
          hovered ? "brightness-100 opacity-15" : ""
        }`}
      />
      {hovered && <HoverOverlay movie={movie} />}
    </div>
  );
};

export default HoverableImage;
