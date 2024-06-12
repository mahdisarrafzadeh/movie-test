import { useCallback, useEffect, useRef, useState } from "react";

interface UseSelectProps {
  initialValue?: string;
  handleChange: (item: string) => void;
}

const useSelect = ({ initialValue = "", handleChange }: UseSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string>(initialValue);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (item: string) => {
    handleChange(item);
    setSelectedItems((prev) => (prev === item ? "" : item));
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return {
    isOpen,
    toggleOpen,
    selectedItems,
    handleSelect,
    dropdownRef,
  };
};

export default useSelect;
