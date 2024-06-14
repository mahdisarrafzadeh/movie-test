import React, { FC } from "react";

import classNames from "classnames";

type Props = {
  checkedItems?: boolean;
  onChange: VoidFunction;
};

const Checkbox: FC<Props> = ({ checkedItems = false, onChange, ...props }) => {
  return (
    <input
      {...props}
      type="checkbox"
      checked={checkedItems}
      onChange={onChange}
      className={classNames(
        "ml-2 text-gray-800  cursor-pointer  bg-transparent rounded focus:ring-0 focus:ring-offset-0",
        checkedItems ? "!border-yellow-500" : "!border-white"
      )}
    />
  );
};

export default Checkbox;
