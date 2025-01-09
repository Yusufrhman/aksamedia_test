import { MdEdit } from "react-icons/md";
import { BiTrash } from "react-icons/bi";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "../Modal";
import DeleteValidation from "../DeleteValidation";
import { motion } from "framer-motion";
import EditProductForm from "../EditProductForm";

export default function ProductTableRow({ product, index, currentPage }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isEditing && (
          <Modal
            className="w-[30rem] bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
            onClose={() => {
              setIsEditing(false);
            }}
          >
            <EditProductForm
              product={product}
              onSave={() => setIsEditing(false)}
            />
          </Modal>
        )}
        {isDeleting && (
          <Modal
            className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
            onClose={() => {
              setIsDeleting(false);
            }}
          >
            <DeleteValidation
              product={product}
              onClose={() => {
                setIsDeleting(false);
              }}
            />
          </Modal>
        )}
      </AnimatePresence>
      <motion.tr
        layout
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -30, opacity: 0 }}
        key={product.id}
        className="hover:bg-teal-100 bg-teal-10 even:bg-gray-100 dark:hover:bg-teal-600 dark:bg-gray-700 dark:even:bg-gray-800"
      >
        <td className="px-4 py-2 text-gray-700 dark:text-gray-100">
          {index + currentPage * 10 - 9}
        </td>
        <td className="px-4 py-2 text-gray-700 dark:text-gray-100">
          {product.name}
        </td>
        <td className="px-4 py-2 text-gray-700 dark:text-gray-100">
          Rp. {product.price.toLocaleString("id-ID")}
        </td>
        <td className="px-4 py-2 text-gray-700 dark:text-gray-100">
          {product.category}
        </td>
        <td className="px-4 py-2 flex items-center justify-start gap-2">
          <button
            type="button"
            className="bg-teal-500 p-2 rounded-md shadow hover:bg-teal-600 transition dark:bg-teal-600 dark:hover:bg-teal-500"
            onClick={() => setIsEditing(true)}
          >
            <MdEdit className="text-white" size={20} />
          </button>
          <button
            type="button"
            className="bg-red-600 p-2 rounded-md shadow hover:bg-red-700 transition dark:bg-red-600 dark:hover:bg-red-500"
            onClick={() => setIsDeleting(true)}
          >
            <BiTrash className="text-white" size={20} />
          </button>
        </td>
      </motion.tr>
    </>
  );
}
