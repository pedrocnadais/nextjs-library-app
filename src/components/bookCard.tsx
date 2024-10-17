import Image from "next/image";
import React from "react";
import { BookType } from "@/types/book";
import ImageNotAvailable from '@/app/ImageNotAvailable.png'

interface BookTypeProps {
  bookType: BookType;
  onClick: () => void;
}

const Book: React.FC<BookTypeProps> = ({ bookType, onClick }) => {
  const imageUrl = bookType.img === "not available" ? ImageNotAvailable : bookType.img;

  return (
    <div className="flex flex-col text-center p-3 sm:w-[220px] sm:h-[400px] w-36 h-64 bg-[#fdfdfdc4] rounded-lg border shadow-lg cursor-pointer mx-auto" onClick={onClick}>
      {/* Favorite functionality can be added later */}

      <Image
        src={imageUrl}
        alt={bookType.title}
        height={200}
        width={200}
        className="object-contain object-top h-52 w-52"
      />

      <h1 className="sm:text-xl text-sm sm:mt-2 text-[#313131] font-bold cursor-pointer" onClick={onClick}>{bookType.title}</h1>

      <h3 className="sm:text-lg text-xs text-[#646464] sm:mt-2">{bookType.author}</h3>

    </div>
  );
};

export default Book;
