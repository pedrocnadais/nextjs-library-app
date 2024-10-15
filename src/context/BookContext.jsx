import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
var BookContext = createContext(undefined);
export var BookProvider = function (_a) {
    var books = _a.books, children = _a.children;
    var _b = useState(0), currentIndex = _b[0], setCurrentIndex = _b[1];
    var _c = useState(false), isModalOpen = _c[0], setIsModalOpen = _c[1];
    var _d = useState(false), isSliding = _d[0], setIsSliding = _d[1];
    var _e = useState(""), slideDirection = _e[0], setSlideDirection = _e[1];
    var _f = useState(false), isClosing = _f[0], setIsClosing = _f[1];
    var handleClose = function () {
        setIsClosing(true);
        setTimeout(function () {
            setIsClosing(false);
            setIsModalOpen(false);
        }, 200);
    };
    var openLink = function (link) {
        if (link === "not available") {
            toast.error("Sorry, link not available");
        }
        else {
            window.open(link, "_blank"); // Open the link in a new tab
        }
    };
    var handleNext = function () {
        if (!isSliding) {
            setSlideDirection("right");
            setIsSliding(true);
            setTimeout(function () {
                setCurrentIndex(function (prevIndex) {
                    return prevIndex === books.length - 1 ? 0 : prevIndex + 1;
                });
                setSlideDirection("");
                setIsSliding(false);
            }, 200);
        }
    };
    var handlePrevious = function () {
        if (!isSliding) {
            setSlideDirection("left");
            setIsSliding(true);
            setTimeout(function () {
                setCurrentIndex(function (prevIndex) {
                    return prevIndex === 0 ? books.length - 1 : prevIndex - 1;
                });
                setSlideDirection("");
                setIsSliding(false);
            }, 200);
        }
    };
    var openModal = function () {
        setIsModalOpen(true);
    };
    var closeModal = function () {
        setIsModalOpen(false);
    };
    var currentBook = books[currentIndex] || {};
    var previousBook = books[currentIndex === 0 ? books.length - 1 : currentIndex - 1];
    var nextBook = books[currentIndex === books.length - 1 ? 0 : currentIndex + 1];
    return (<BookContext.Provider value={{
            books: books,
            currentIndex: currentIndex,
            setCurrentIndex: setCurrentIndex,
            currentBook: currentBook,
            previousBook: previousBook,
            nextBook: nextBook,
            isSliding: isSliding,
            slideDirection: slideDirection,
            handleNext: handleNext,
            handleClose: handleClose,
            handlePrevious: handlePrevious,
            openLink: openLink,
            isClosing: isClosing,
            isOpen: isModalOpen,
            openModal: openModal,
            closeModal: closeModal,
        }}>
      {children}
    </BookContext.Provider>);
};
export var useBookContext = function () {
    var context = useContext(BookContext);
    if (!context)
        throw new Error("useBookContext must be used within a BookProvider");
    return context;
};
