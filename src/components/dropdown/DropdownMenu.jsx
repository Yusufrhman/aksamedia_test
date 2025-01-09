import { useDropdownContext } from "./Dropdown";

export default function DropdownMenu({ children, className }) {
  const { isOpen } = useDropdownContext();
  return isOpen ? (
    <div className={`${className} absolute overflow-clip `}>{children}</div>
  ) : (
    <div className={`${className} hidden overflow-clip `}>{children}</div>
  );
}
