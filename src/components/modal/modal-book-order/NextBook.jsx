// components/NextBook.tsx
import React from "react";
import { useBookContext } from "@/context/BookContext";
import Image from "next/image";
import ImageNotAvailable from '@/app/ImageNotAvailable.png';
var NextBook = function () {
    var _a = useBookContext(), nextBook = _a.nextBook, handleNext = _a.handleNext, slideDirection = _a.slideDirection, isSliding = _a.isSliding;
    var imageUrl = nextBook.img === "not available" ? ImageNotAvailable : nextBook.img;
    if (!nextBook) {
        return null; // or you can return a placeholder if previousBook is not available
    }
    return (<div className={"bg-[#96969787] flex flex-col rounded-lg w-[240px] h-auto transition-transform duration-200 ".concat(slideDirection === "right" ? "-translate-x-full" : slideDirection === "left"
            ? "translate-x-full"
            : "", " ").concat(isSliding ? "opacity-50" : "")}>
      <div className="opacity-50 cursor-pointer" onClick={handleNext}>
        <Image src={imageUrl} alt={nextBook.title} height={200} width={200} className="mt-5 object-cover mx-auto"/>
        <h1 className="text-center text-gray-800 mt-2">{nextBook.title}</h1>
        <h4 className="text-center text-gray-700 mt-2 mb-4">{nextBook.author}</h4>
      </div>
    </div>);
};
export default NextBook;
