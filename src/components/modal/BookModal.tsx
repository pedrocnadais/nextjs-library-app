import React, { useEffect, useState } from "react";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { useBookContext } from "@/context/BookContext";
import PreviousBook from "./modal-book-order/PreviousBook";
import NextBook from "./modal-book-order/NextBook";
import MainBook from "./modal-book-order/MainBook";

const BookModal = ({  }) => {
  const { handleNext, handlePrevious, isOpen, handleClose } = useBookContext();
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const minSwipeDistance = 50;

  // handles touch/mouse start
  const handleStart = (x: number) => {
    setEndX(0);
    setStartX(x);
    setIsMouseDown(true)
  }

  // handles touch/mouse movement
  const handleMove = (x: number) => {
    if (!isMouseDown) return;
    setEndX(x);
  }

  // handles touch/mouse end
  const handleEnd = () => {
    if (!startX || !endX) return;

    const distance = startX - endX;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        handleNext();
      } else {
        handlePrevious();
      }
    }

    setIsMouseDown(false);
  }

  // keydown events
  useEffect(() => {
    let lastKeyPressTime = 0;
    const debounceDelay = 200;

    const handleKeyDown = (e: KeyboardEvent) => {
      const currentTime = new Date().getTime();
      if (currentTime - lastKeyPressTime < debounceDelay) {
        return
      }

      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrevious()
      } else if (e.key === 'Escape') {
        return handleClose()
      }

      lastKeyPressTime = currentTime
    };

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleNext, handlePrevious, handleClose])

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-400 bg-opacity-95 flex flex-row items-center justify-center sm:gap-24"

      // mobile touch event
      onTouchStart={e => handleStart(e.targetTouches[0].clientX)}
      onTouchMove={e => handleMove(e.targetTouches[0].clientX)}
      onTouchEnd={handleEnd}

      // muose event
      onMouseDown={e => handleStart(e.clientX)}
      onMouseMove={e => handleMove(e.clientX)}
      onMouseUp={handleEnd}
      

    >
      {/* previous books */}
      <button onClick={handlePrevious} className="absolute mr-[90%] z-10 hover:opacity-45">
        <FaAnglesLeft size={80} />
      </button>
      <div className="hidden sm:block">
      <PreviousBook />
      </div>

      {/* main book */}
      <MainBook />

      {/* next book */}
      <button onClick={handleNext} className="absolute ml-[90%] hover:opacity-45">
        <FaAnglesRight size={80} />
      </button>
      <div className="hidden sm:block">
      <NextBook />
      </div>
    </div>
  );
};

export default BookModal;
