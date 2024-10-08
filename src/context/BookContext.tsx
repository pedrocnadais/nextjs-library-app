import { createContext, useContext, useState } from "react";
import { BookType } from "@/types/book";
import toast from "react-hot-toast";

interface BookContextProps {
  books: BookType[];
  currentBook: BookType;
  previousBook: BookType;
  nextBook: BookType;
  currentIndex: number;
  isSliding: boolean;
  isClosing: boolean;
  isOpen: boolean;
  slideDirection: "left" | "right" | "";
  openLink: (link: string) => void;
  handleClose: () => void;
  handleNext: () => void;
  handlePrevious: () => void;
}

const BookContext = createContext<BookContextProps | undefined>(undefined);

export const BookProvider: React.FC<{
  books: BookType[];
  closeModal: () => void;
  isOpen: boolean;
  children: React.ReactNode;
}> = ({ books, closeModal, isOpen, children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | "">("");
  const [isClosing, setIsClosing] = useState(false);

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

  const handleNext = () => {
    if (!isSliding) {
      setSlideDirection("right");
      setIsSliding(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === books.length - 1 ? 0 : prevIndex + 1
        );
        setSlideDirection("");
        setIsSliding(false);
      }, 200);
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
        setSlideDirection("");
        setIsSliding(false);
      }, 200);
    }
  };

  const currentBook = books[currentIndex];
  const previousBook =
    books[currentIndex === 0 ? books.length - 1 : currentIndex - 1];
  const nextBook =
    books[currentIndex === books.length - 1 ? 0 : currentIndex + 1];

  return (
    <BookContext.Provider
    value={{
     books,
     currentIndex,
     currentBook,
     previousBook,
     nextBook,
     isSliding,
     slideDirection,
     handleNext,
     handlePrevious,
     handleClose,
     openLink,
     isClosing,
     isOpen,
   }}
    >
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => {
  const context = useContext(BookContext);
  if (!context)
    throw new Error("useBookContext must be used within a BookProvider");
  return context;
};
