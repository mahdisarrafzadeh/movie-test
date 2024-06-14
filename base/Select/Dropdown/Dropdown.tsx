import { FC } from "react";

import classNames from "classnames";
import { FilterItemsInterface } from "@/types";
import { Checkbox } from "@/base";

interface DropdownProps {
  items: FilterItemsInterface[];
  col: number;
  selectedItem: string;
  handleSelect: (value: string) => void;
  testId?: string;
}

const Dropdown: FC<DropdownProps> = ({
  items,
  col,
  selectedItem,
  handleSelect,
  testId,
}) => (
  <div
    className="absolute z-20 mt-2 shadow-lg bg-gray-850 w-full rounded-md p-4"
    data-testid={`${testId}-dropdown`}
  >
    <div
      className={classNames("grid grid-cols-1 gap-4", {
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
);

export default Dropdown;
