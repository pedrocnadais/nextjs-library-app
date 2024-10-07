import { BookType } from "@/types/book";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoCloseOutline } from "react-icons/io5";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

interface BookModalProps {
  isOpen: boolean;
  closeModal: () => void;
  currentIndex: number;
  books: BookType[];
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const BookModal: React.FC<BookModalProps> = ({
  isOpen,
  closeModal,
  currentIndex,
  books,
  setCurrentIndex,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isSliding, setIsSliding] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | "">(
    ""
  );

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      closeModal();
    }, 200);
  };

  const openLink = (link: string) => {
    if (link === "not available") {
      toast.error("Sorry, link not available");
    } else {
      window.open(link, "_blank"); // Open the link in a new tab
    }
  };

  const handlePrevious = () => {
    if (!isSliding) {
      setSlideDirection("left");
      setIsSliding(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? books.length - 1 : prevIndex - 1
        );
        setSlideDirection(""); // Reset direction after the transition
        setIsSliding(false);
      }, 200); // Adjust the duration for smooth transition
    }
  };

  const handleNext = () => {
    if (!isSliding) {
      setSlideDirection("right");
      setIsSliding(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === books.length - 1 ? 0 : prevIndex + 1
        );
        setSlideDirection(""); // Reset direction after the transition
        setIsSliding(false);
      }, 200); // Adjust the duration for smooth transition
    }
  };

  const currentBook = books[currentIndex];
  const previousBook =
    books[currentIndex === 0 ? books.length - 1 : currentIndex - 1];
  const nextBook =
    books[currentIndex === books.length - 1 ? 0 : currentIndex + 1];

  if (!isOpen && !isClosing) return null;

  return (
    <div className="fixed inset-0 bg-gray-400 bg-opacity-95 flex flex-row gap-24 items-center justify-center">
      {/* previous books */}
      <button onClick={handlePrevious} className="absolute mr-[90%] z-50">
        <FaAnglesLeft size={80} />
      </button>

      <div
        className={`bg-[#96969787] flex flex-col rounded-lg w-[240px] h-[300px] transition-transform duration-200 ${
          slideDirection === "left" ? "translate-x-full" : ""
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
          <h1 className="text-center text-gray-800 mt-2">
            {previousBook.title}
          </h1>
          <h4 className="text-center text-gray-700">{previousBook.author}</h4>
        </div>
      </div>

      {/* main book */}
      <div className=" flex flex-col items-center overflow-y-auto">
        <div
          className={`relative bg-[#d4d5d6] rounded-lg shadow-lg px-[6px] w-[330px] h-auto transition-transform duration-200 ${
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
              src={currentBook.img}
              alt={currentBook.title}
              height={200}
              width={200}
              className="w-56 h-56 object-cover mt-4 mx-auto cursor-pointer"
              priority
            />
          </div>

          <h1 className="text-xl font-bold text-center mt-3 cursor-pointer hover:underline">
            {currentBook.title}
          </h1>

          <h4 className="text-gray-800 text-center">{currentBook.author}</h4>

          <div className="mt-4 mb-10 flex flex-row gap-5 justify-center items-center">
            <button
              type="button"
              className="px-2 bg-blue-500 text-white rounded-lg hover:bg-blue-950 hover:animate-bounce"
              onClick={() => openLink(currentBook.audio)}
            >
              Audio Version
            </button>

            <button
              type="button"
              className="px-2 bg-green-500 text-white rounded-lg"
              onClick={() => openLink(currentBook.written)}
            >
              Written Version
            </button>
          </div>
        </div>
      </div>

      {/* next book */}
      <button onClick={handleNext} className="absolute ml-[90%] z-50">
        <FaAnglesRight size={80} />
      </button>

      <div
        className={`bg-[#96969787] flex flex-col rounded-lg w-[240px] h-[300px] transition-transform duration-200 ${
          slideDirection === "right" ? "-translate-x-full" : ""
        } ${isSliding ? "opacity-50" : ""}`}
      >
        <div className="opacity-50 cursor-pointer" onClick={handleNext}>
          <Image
            src={nextBook.img}
            alt={nextBook.title}
            height={200}
            width={200}
            className="w-44 h-44 mt-5 object-cover mx-auto"
          />
          <h1 className="text-center text-gray-800 mt-2">{nextBook.title}</h1>
          <h4 className="text-center text-gray-700 mt-2">{nextBook.author}</h4>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
