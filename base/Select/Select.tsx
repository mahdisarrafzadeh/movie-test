"use client";
import { FC } from "react";

import useSelect from "./useSelect";
import classNames from "classnames";
import Checkbox from "../Checkbox";
import { FilterItemsInterface } from "@/types/Filter";
import { MdArrowDropDown } from "react-icons/md";

interface Props {
  items: FilterItemsInterface[];
  handleChange: (item: string) => void;
  col?: number;
  title: string;
  className?: string;
  value?: string;
}

const Select: FC<Props> = ({
  items,
  handleChange,
  col = 2,
  title,
  className,
  value = "",
}) => {
  const { isOpen, toggleOpen, selectedItems, handleSelect, dropdownRef } =
    useSelect({
      initialValue: value,
      handleChange,
    });

  return (
    <div ref={dropdownRef} className={classNames("relative", className)}>
      <button
        onClick={toggleOpen}
        className="px-4 py-2 text-sm w-full flex justify-between items-center border-[#616160] border rounded-md text-right "
      >
        {title}
        <MdArrowDropDown
          size={18}
          className={classNames(" transition-transform", {
            "rotate-180": isOpen,
          })}
        />
      </button>
      {isOpen && (
        <div className="absolute mt-2 shadow-lg bg-[#1E1E1E] w-full rounded-md p-4">
          <div
            className={classNames(`grid grid-cols-1 gap-4`, {
              "grid-cols-2": col === 2,
            })}
          >
            {items.map((item) => (
              <label
                key={item.value}
                className="flex items-center text-sm cursor-pointer"
              >
                <Checkbox
                  checkedItems={selectedItems === item.value}
                  onChange={() => handleSelect(item.value)}
                />
                {item.label}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
