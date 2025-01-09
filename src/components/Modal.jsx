import { motion } from "framer-motion";
import { createPortal } from "react-dom";

export default function Modal({ children, onClose, className }) {
  return createPortal(
    <>
      <div
        onClick={onClose}
        className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 dark:bg-opacity-75 z-30"
      />
      <motion.dialog
        open
        className={`backdrop fixed inset-0 flex items-center rounded-md p-6 max-w-[90%] z-40 bg-white dark:bg-gray-800 shadow-lg text-gray-700 dark:text-gray-300 ${className}`}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal")
  );
}
