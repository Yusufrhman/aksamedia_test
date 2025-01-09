export default function MainButton({ children, className, ...props }) {
  let classes =
    " bg-teal-500 text-xs sm:text-sm md:text-base text-white py-2 rounded-lg hover:bg-teal-600 transition duration-300 ";
  if (className) {
    classes += className;
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
