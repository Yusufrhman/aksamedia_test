import { useState } from "react";
import MainButton from "./MainButton";
import { AnimatePresence } from "framer-motion";
import Modal from "./Modal";
import AddProductForm from "./AddProductForm";
import { MdAdd } from "react-icons/md";

export default function AddProductAction({}) {
  const [isAddOpen, setIsAddOpen] = useState(false);
  return (
    <>
      <AnimatePresence>
        {isAddOpen && (
          <Modal
            className="w-[30rem] bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
            onClose={() => setIsAddOpen(false)}
          >
            <AddProductForm onSave={() => setIsAddOpen(false)} />
          </Modal>
        )}
      </AnimatePresence>
      <MainButton
        type="button"
        onClick={() => setIsAddOpen(true)}
        className="w-fit h-full px-2 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-teal-600 dark:hover:bg-teal-500 dark:focus:ring-teal-400"
      >
        <MdAdd className="text-white" size={24} />
      </MainButton>
    </>
  );
}
