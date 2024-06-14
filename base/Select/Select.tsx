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
  testId?: string;
}

const Select: FC<Props> = ({
  items,
  handleChange,
  col = 2,
  title,
  className,
  value = "",
  testId,
}) => {
  const { isOpen, toggleOpen, selectedItem, handleSelect, dropdownRef } =
    useSelect({
      initialValue: value,
      handleChange,
    });

  return (
    <div
      ref={dropdownRef}
      className={classNames("relative", className)}
      data-testid={testId}
    >
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
      {isOpen && (
        <div
          className="absolute z-20 mt-2 shadow-lg bg-gray-850 w-full rounded-md p-4"
          data-testid={`${testId}-dropdown`}
        >
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
                  data-testid={`${testId}-item-${item.value}`}
                  checkedItems={selectedItem === item.value}
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
