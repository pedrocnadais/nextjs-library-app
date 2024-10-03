import Image from "next/image";
import React from "react";

interface BookProps {
  id: number;
  img: string;
  title: string;
  author: string;
  audio: string;
  written: string;
}

const Book: React.FC<BookProps> = ({ img, title, author, audio, written }) => {
  const openLink = (link: string) => {
    if (link !== "") {
      window.open(link, "_blank");
    } else {
      alert("Sorry, not available");
    }
  };

  return (
    <article className="p-6 bg-white rounded-lg border shadow-lg">
      {/* Favorite functionality can be added later */}
      <Image
        src={img}
        alt={title}
        height={200}
        width={200}
        className="w-full h-auto object-cover my-4 cursor-pointer"
        onClick={() => openLink(written)}
      />
      <h1
        className="text-xl font-bold cursor-pointer hover:underline"
        onClick={() => openLink(written)}
      >
        {title}
      </h1>
      <h4 className="text-gray-500">{author}</h4>
      <div className="mt-4 space-x-2">
        <button
          type="button"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={() => openLink(audio)}
        >
          Audio Version
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
          onClick={() => openLink(written)}
        >
          Written Version
        </button>
      </div>
    </article>
  );
};

export default Book;
