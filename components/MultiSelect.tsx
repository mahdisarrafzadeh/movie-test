"use client";
import { FC, useEffect, useRef, useState } from "react";
import classNames from "classnames";

interface Props {
  items: string[];
  handleChange: (item: string[]) => void;
  col?: number;
  title: string;
  className?: string;
}

const MultiSelect: FC<Props> = ({
  items,
  handleChange,
  col = 2,
  title,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item: string) => {
    const newSelectedItems = selectedItems.includes(item)
      ? selectedItems.filter((i) => i !== item)
      : [...selectedItems, item];

    setSelectedItems(newSelectedItems);
    handleChange(newSelectedItems);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={classNames("relative", className)}>
      <button
        onClick={toggleOpen}
        className="px-4 py-2 w-full border rounded-md text-right"
      >
        {title}
      </button>
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute mt-2 shadow-lg bg-[#181818] w-full rounded-md p-4"
        >
          <div className={`grid grid-cols-${col} gap-4`}>
            {items.map((item) => (
              <label key={item} className="flex items-center ">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item)}
                  onChange={() => handleSelect(item)}
                  className="ml-1"
                />
                {item}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
