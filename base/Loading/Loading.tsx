import React from "react";
import { useSpring, animated } from "@react-spring/web";

const Loading = () => {
  const springs = useSpring({
    from: { transform: "scale(0)" },
    to: { transform: "scale(1)" },
    loop: { reverse: true },
    config: { duration: 1000 },
  });

  return (
    <animated.div
      style={springs}
      className="w-20 h-20 bg-yellow-500 rounded-full"
    />
  );
};

export default Loading;
