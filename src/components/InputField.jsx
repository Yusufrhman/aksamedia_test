import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";

export default function InputField({
  id,
  label,
  type = "text",
  placeholder,
  value,
  required,
  error,
  className,
  ...props
}) {
  const isError = error;
  const isPassword = type === "password";
  const [isVisible, setIsVisible] = useState(false);
  return (
    <motion.div
      animate={isError ? { y: [0, -5, 5, -5, 5, 0] } : { y: 0 }}
      transition={{ duration: 0.5 }}
      className={`text-gray-700 dark:text-gray-300 text-xs sm:text-sm md:text-base ${
        isError && "text-red-600 dark:text-red-400"
      }`}
    >
      {label && (
        <label
          htmlFor={id}
          className="block font-medium mb-1 text-gray-800 dark:text-gray-200"
        >
          {label}
        </label>
      )}
      <div className="relative w-full h-fit">
        <input
          id={id}
          name={id}
          type={isVisible ? "text" : type}
          placeholder={placeholder}
          value={value}
          className={`block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
            isPassword && "pr-10"
          } ${
            isError && "border-red-500 dark:border-red-400"
          }  bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 ${className}`}
          required={required}
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setIsVisible((isVisible) => !isVisible)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-all duration-300"
          >
            {isVisible ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
          </button>
        )}
      </div>
      {error && (
        <p className="text-xs text-red-500 dark:text-red-400 mt-1 pl-1">
          {error}
        </p>
      )}
    </motion.div>
  );
}
