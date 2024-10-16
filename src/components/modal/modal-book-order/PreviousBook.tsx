// components/PreviousBook.tsx
import React from "react";
import { useBookContext } from "@/context/BookContext";
import Image from "next/image";
import ImageNotAvailable from '@/app/ImageNotAvailable.png'


const PreviousBook: React.FC = () => {
  const { previousBook, handlePrevious, slideDirection, isSliding } =
    useBookContext();
  const imageUrl = previousBook.img === "not available" ? ImageNotAvailable : previousBook.img;


  if (!previousBook) {
    return null; // or you can return a placeholder if previousBook is not available
  }

  return (
  <div
    className={`bg-[#96969787] flex flex-col rounded-lg w-11/12 sm:w-[240px] h-auto transition-transform duration-200 ${
      slideDirection === "left"
        ? "translate-x-full"
        : slideDirection === "right"
        ? "-translate-x-full"
        : ""
    } ${isSliding ? "opacity-50" : ""}`}
  >
    <div className="opacity-50 cursor-pointer" onClick={handlePrevious}>
      <Image
        src={imageUrl}
        alt={previousBook.title}
        height={200}
        width={200}
        className="mt-5 object-cover mx-auto max-w-full h-auto"
      />
      <h1 className="text-center text-gray-800 mt-2 text-sm sm:text-base">
        {previousBook.title}
      </h1>
      <h4 className="text-center text-gray-700 mt-2 mb-4 text-xs sm:text-sm">
        {previousBook.author}
      </h4>
    </div>
  </div>
);

};

export default PreviousBook;
