import React from "react";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { useBookContext } from "@/context/BookContext";
import PreviousBook from "./modal-book-order/PreviousBook";
import NextBook from "./modal-book-order/NextBook";
import MainBook from "./modal-book-order/MainBook";
var BookModal = function (_a) {
    var _b = useBookContext(), handleNext = _b.handleNext, handlePrevious = _b.handlePrevious, isOpen = _b.isOpen, isClosing = _b.isClosing;
    if (!isOpen && !isClosing)
        return null;
    return (<div className="fixed inset-0 bg-gray-400 bg-opacity-95 flex flex-row gap-3 items-center justify-center sm:gap-24">

      {/* previous books */}
      <button onClick={handlePrevious} className="absolute mr-[90%] z-50 hover:opacity-45">
        <FaAnglesLeft size={80}/>
      </button>
      <PreviousBook />

      {/* main book */}
      <MainBook />

      {/* next book */}
      <button onClick={handleNext} className="absolute ml-[90%] z-50 hover:opacity-45">
        <FaAnglesRight size={80}/>
      </button>
      <NextBook />

    </div>);
};
export default BookModal;
