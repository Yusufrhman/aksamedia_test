import { IoMdArrowDropdown } from "react-icons/io";
import { motion } from "framer-motion";
import { useDropdownContext } from "./Dropdown";

export default function DropdownTitle({ children, className }) {
  const { isOpen } = useDropdownContext();
  return (
    <div
      className={
        "flex items-center justify-end gap-1 w-fit text-teal-50 dark:text-teal-400  dark:hover:text-teal-300 hover:cursor-pointer " +
        className
      }
    >
      {children}
      <motion.span animate={{ rotate: isOpen ? -180 : 0 }}>
        <IoMdArrowDropdown size={20} />
      </motion.span>
    </div>
  );
}
