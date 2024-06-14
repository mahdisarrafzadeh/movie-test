import React from "react";

interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  additionalClasses?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width = "w-full",
  height = "h-5",
  borderRadius = "rounded",
  additionalClasses = "",
}) => {
  return (
    <div
      className={`bg-gray-700 ${width} ${height} ${borderRadius} ${additionalClasses} animate-pulse mb-2`}
    ></div>
  );
};

export default Skeleton;
