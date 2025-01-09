import { createContext, useContext, useState } from "react";
import DropdownItem from "./DropdownItem";
import DropdownMenu from "./DropdownMenu";
import DropdownTitle from "./DropdownTitle";

const AccordionContext = createContext();

export function useDropdownContext() {
  const ctx = useContext(AccordionContext);
  if (!ctx) {
    throw new Error(
      "komponen yang berkaitan dengan dropdown harus di pakai di dalam <Dropdown>"
    );
  }
  return ctx;
}

export default function Dropdown({ children, className }) {
  const [isOpen, setIsOpen] = useState(false);
  const contextValue = { isOpen: isOpen, openDropdown, closeDropdown };

  function openDropdown() {
    setIsOpen(true);
  }
  function closeDropdown() {
    setIsOpen(false);
  }
  return (
    <AccordionContext.Provider value={contextValue}>
      <div
        className={"relative " + className}
        onMouseEnter={openDropdown}
        onMouseLeave={closeDropdown}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
}
Dropdown.Item = DropdownItem;
Dropdown.Menu = DropdownMenu;
Dropdown.Title = DropdownTitle;
