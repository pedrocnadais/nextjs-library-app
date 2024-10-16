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
    <div className="flex flex-col text-center items-center p-3 w-[220px] h-[400px] bg-[#fdfdfdc4] rounded-lg border shadow-lg cursor-pointer" onClick={onClick}>
      {/* Favorite functionality can be added later */}
      <Image
        src={imageUrl}
        alt={bookType.title}
        height={200}
        width={200}
        className="object-contain h-52 w-52"
      />
      <h1 className="text-xl mt-2 font-bold cursor-pointer" onClick={onClick}>{bookType.title}</h1>
      <h3 className="text-gray-500 mt-2">{bookType.author}</h3>
      <div className="mt-4 flex flex-col items-center">
      </div>
    </div>
  );
};

export default Book;
