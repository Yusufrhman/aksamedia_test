export default function DropdownItem({ className, children, ...props }) {
  return (
    <button
      className={
        "text-teal-600 dark:text-teal-400 py-2 px-4 hover:bg-teal-100 dark:hover:bg-teal-700 hover:text-teal-800 dark:hover:text-teal-200 transition-colors hover:cursor-pointer " +
        className
      }
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
