import { FC } from "react";

import classNames from "classnames";
import { MdArrowDropDown } from "react-icons/md";

interface SelectButtonProps {
  isOpen: boolean;
  title: string;
  toggleOpen: () => void;
  testId?: string;
}

const SelectButton: FC<SelectButtonProps> = ({
  isOpen,
  title,
  toggleOpen,
  testId,
}) => (
  <button
    onClick={toggleOpen}
    className="px-4 py-2 text-sm w-full flex justify-between items-center border-[#616160] border rounded-md text-right"
    data-testid={`${testId}-button`}
  >
    {title}
    <MdArrowDropDown
      size={18}
      className={classNames("transition-transform", {
        "rotate-180": isOpen,
      })}
    />
  </button>
);

export default SelectButton;
