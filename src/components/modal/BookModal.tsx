import React from "react";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { useBookContext } from "@/context/BookContext";
import PreviousBook from "./modal-book-order/PreviousBook";
import NextBook from "./modal-book-order/NextBook";
import MainBook from "./modal-book-order/MainBook";

const BookModal = ({  }) => {
  const { handleNext, handlePrevious, isOpen, isClosing } = useBookContext();

  if (!isOpen && !isClosing) return null;

  return (
    <div className="fixed inset-0 bg-gray-400 bg-opacity-95 flex flex-row gap-24 items-center justify-center">

      {/* previous books */}
      <button onClick={handlePrevious} className="absolute mr-[90%] z-50">
        <FaAnglesLeft size={80} />
      </button>
      <PreviousBook />

      {/* main book */}
      <MainBook />

      {/* next book */}
      <button onClick={handleNext} className="absolute ml-[90%] z-50">
        <FaAnglesRight size={80} />
      </button>
      <NextBook />

    </div>
  );
};

export default BookModal;
