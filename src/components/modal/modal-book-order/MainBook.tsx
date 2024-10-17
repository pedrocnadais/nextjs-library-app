import { useBookContext } from "@/context/BookContext";
import Image from "next/image";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import ImageNotAvailable from '@/app/ImageNotAvailable.png'

const MainBook = () => {
 const { slideDirection, currentBook, handleClose, isClosing, openLink } =
 useBookContext();
 const imageUrl = currentBook.img === "not available" ? ImageNotAvailable : currentBook.img;

  if (!currentBook) {
    return null; // or you can return a placeholder if previousBook is not available
  }

  return (
    <div className=" flex flex-col items-center overflow-y-auto">
      <div
        className={`relative bg-[#fdfdfd] rounded-lg shadow-lg px-[6px] w-[300px] h-auto transition-transform duration-200 ${
          slideDirection === "right"
            ? "-translate-x-full"
            : slideDirection === "left"
            ? "translate-x-full"
            : ""
        } ${isClosing ? "animate-modalClose" : "animate-modalOpen"}`}
      >
        <div className="flex flex-row mr-4 mt-2">
          <button onClick={handleClose} className="w-4 h-4">
            <IoCloseOutline size={30} />
          </button>

          <Image
            src={imageUrl}
            alt={currentBook.title}
            height={200}
            width={200}
            className="object-cover mt-4 mx-auto cursor-pointer border-2 border-black"
            priority
            onClick={() => openLink(currentBook.written)}
          />
        </div>

        <h1 className="sm:text-xl text-md text-[#313131] font-bold text-center mt-3 cursor-pointer">
          {currentBook.title}
        </h1>

        <h4 className="text-[#646464] text-center text-sm sm:text-md">{currentBook.author}</h4>

        <div className="mt-4 mb-5 flex flex-row gap-2 sm:gap-5 justify-center items-center">
          <button
            type="button"
            className="px-2 bg-blue-500 text-white rounded-lg hover:bg-blue-950"
            onClick={() => openLink(currentBook.audio)}
          >
            Audio
          </button>

          <button
            type="button"
            className="px-2 bg-green-500 text-white rounded-lg hover:bg-green-950"
            onClick={() => openLink(currentBook.written)}
          >
            Written
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainBook;
