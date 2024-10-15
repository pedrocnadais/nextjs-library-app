"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Book from "@/components/bookCard";
import { client } from "@/utils/axios.config";
import SelectReorder from "@/components/selectReorder";
import { BookType } from "@/types/book";
import BookModal from "@/components/modal/BookModal";
import { Toaster } from "react-hot-toast";
import { BookProvider, useBookContext } from "@/context/BookContext";
import Spinner from "../spinner/spinner";

// Define BookList component to be wrapped by the BookProvider
const BookListContent: React.FC<{
  books: BookType[];
  setBooks: React.Dispatch<React.SetStateAction<BookType[]>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  hasMore: boolean;
  loading: boolean;
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  lastBookElementRef: (node: HTMLElement | null) => void;
}> = ({ books, loading, sortBy, setSortBy, lastBookElementRef }) => {
  const { setCurrentIndex, openModal, isOpen } = useBookContext(); // Inside the provider now

  const handleBookClick = (index: number) => {
    setCurrentIndex(index); // Accessed properly inside the provider
    openModal();
  };

  const sortedBooks = [...books];
  if (sortBy === "author") {
    sortedBooks.sort((a, b) => a.author.localeCompare(b.author));
  } else if (sortBy === "title") {
    sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy === "inverted-author") {
    sortedBooks.sort((a, b) => b.author.localeCompare(a.author));
  } else if (sortBy === "inverted-title") {
    sortedBooks.sort((a, b) => b.title.localeCompare(a.author));
  }

  return (
    <section className="p-6">
      <Toaster position="bottom-center" reverseOrder={false} />

      <section>
        <div className="mb-4">
          <SelectReorder sortBy={sortBy} setSortBy={setSortBy} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {sortedBooks.map((book, index) => (
            <div
              key={book.id}
              ref={
                sortedBooks.length === index + 1 ? lastBookElementRef : null
              } // Attach observer to last book
            >
              <Book bookType={book} onClick={() => handleBookClick(index)} />
            </div>
          ))}
        </div>
        {loading && (
          <div className="text-center mt-7"><Spinner /></div>
        )}
      </section>

      {isOpen && <BookModal />}
    </section>
  );
};

// Main BookList component
const BookList: React.FC = () => {
  const [books, setBooks] = useState<BookType[]>([]);
  const [page, setPage] = useState<number>(1); // Track which page we're on
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true); // Check if more books are available
  const [sortBy, setSortBy] = useState<string>("");

  // Function to fetch books using pagination
  const fetchBooks = useCallback(
    async (pageNumber: number) => {
      setLoading(true);
      try {
        const response = await client.get(`/api/books?limit=15&page=${pageNumber}`);
        const newBooks = response.data;
        if (newBooks.length === 0) {
          setHasMore(false); // No more books to load
        } else {
          const combinedBooks = [...books, ...newBooks];
          const uniqueBooks = Array.from(
            new Map(combinedBooks.map((book) => [book.id, book])).values()
          );
          setBooks(uniqueBooks); // Deduplicated books
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error);
        setLoading(false);
      }
    },
    [books]
  );

  useEffect(() => {
    fetchBooks(page); // Fetch the first set of books
  }, [fetchBooks, page]);

  // Infinite scroll logic using IntersectionObserver
  const observer = useRef<IntersectionObserver | null>(null);
  const lastBookElementRef = (node: HTMLElement | null) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage((prevPage) => prevPage + 1); // Load next page when we hit the bottom
      }
    });

    if (node) observer.current.observe(node);
  };

  return (
    <BookProvider books={books}>
      <BookListContent
        books={books}
        setBooks={setBooks}
        setPage={setPage}
        hasMore={hasMore}
        loading={loading}
        sortBy={sortBy}
        setSortBy={setSortBy}
        lastBookElementRef={lastBookElementRef}
      />
    </BookProvider>
  );
};

export default BookList;
