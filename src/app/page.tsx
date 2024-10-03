'use client';

import { useState, useEffect } from 'react';
import Book from '@/components/book';
import NewBooks from '@/components/newBooks';
import { client } from '@/utils/axios.config';
import SelectReorder from '@/components/selectReorder';
// import Sidebar from './COMPONENTS/sidebar';

interface BookData {
  id: number;
  title: string;
  author: string;
  img: string;
  audio: string;
  written: string;
}

const BookList: React.FC = () => {
  const [books, setBooks] = useState<BookData[]>([]);
  const [sortBy, setSortBy] = useState<string>('');

  useEffect(() => {
    client.get("/api/books")
      .then(response => {
        if (Array.isArray(response.data)) {
          setBooks(response.data);
        } else {
          console.error('Received data is not an array:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const sortedBooks = [...books];
  if (sortBy === 'author') {
    sortedBooks.sort((a, b) => a.author.localeCompare(b.author));
  } else if (sortBy === 'title') {
    sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <section className="p-6">
      <div className="heading-header mb-6">
        <h1 className="text-4xl font-bold">
          Online Public Library
        </h1>
      </div> 
      
      <section> 
        {/* <Sidebar /> */}

        <div id='book-suggestions' className="mb-6">
          <NewBooks />
        </div>

        <div className="mb-4">
          <SelectReorder sortBy={sortBy} setSortBy={setSortBy} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {sortedBooks.map((book) => (
            <Book
              key={book.id}
              id={book.id}
              img={book.img}
              title={book.title}
              author={book.author}
              audio={book.audio}
              written={book.written}
            />
          ))}
        </div>
      </section>
    </section>
  );
}

export default BookList;