// components/PreviousBook.tsx
import React from "react";
import { useBookContext } from "@/context/BookContext";
import Image from "next/image";

const PreviousBook: React.FC = () => {
  const { previousBook, handlePrevious, slideDirection, isSliding } =
    useBookContext();

  if (!previousBook) {
    return null; // or you can return a placeholder if previousBook is not available
  }

  return (
    <div
      className={`bg-[#96969787] flex flex-col rounded-lg w-[240px] h-[300px] transition-transform duration-200 ${
        slideDirection === "left" ? "translate-x-full" 
        : slideDirection === "right"
        ? "-translate-x-full"
        : ""
      } ${isSliding ? "opacity-50" : ""}`}
    >
      <div className="opacity-50 cursor-pointer" onClick={handlePrevious}>
        <Image
          src={previousBook.img}
          alt={previousBook.title}
          height={200}
          width={200}
          className="w-44 h-44 mt-5 object-cover mx-auto"
        />
        <h1 className="text-center text-gray-800 mt-2">{previousBook.title}</h1>
        <h4 className="text-center text-gray-700">{previousBook.author}</h4>
      </div>
    </div>
  );
};

export default PreviousBook;
