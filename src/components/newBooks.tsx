'use client';

import { useState } from "react";
import { client } from "@/utils/axios.config";

const NewBooks: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [listBooks, setListBooks] = useState<{ title: string; author: string }[]>([]);

  const saveToLocalStorage = (bookSuggestions: { title: string; author: string }[]) => {
    localStorage.setItem('bookSuggestions', JSON.stringify(bookSuggestions));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title && author) {
      try {
        const response = await client.post('/api/suggestion', {
          title: title,
          author: author,
        });
        console.log('Book added successfully:', response.data);
        setListBooks((prevListBooks) => [...prevListBooks, response.data]);
        saveToLocalStorage([...listBooks, response.data]);
        setAuthor('');
        setTitle('');
      } catch (error) {
        console.error('Error adding book:', error);
      }
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-center ">Book Suggestions</h2>
      <article>
        <form className="space-y-4 bg-gray-100 p-4 rounded-lg shadow-md" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="bookName" className="block mb-2 text-sm font-medium text-gray-900">
              Book Title:
            </label>
            <input
              type="text"
              id="bookName"
              className="block w-full p-2 border border-gray-300 rounded-lg"
              name="bookName"
              value={title}
              placeholder="Book title here"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="bookAuthor" className="block mb-2 text-sm font-medium text-gray-900">
              Author:
            </label>
            <input
              type="text"
              id="bookAuthor"
              className="block w-full p-2 border border-gray-300 rounded-lg"
              name="bookAuthor"
              value={author}
              placeholder="Book author here"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
          >
            Add book to the list
          </button>
        </form>
        <div className="mt-4 space-y-2">
          {listBooks.map((finalBook, index) => (
            <div key={index} className="p-2 bg-white shadow rounded-lg">
              <h4 className="text-lg font-bold">{finalBook.title}</h4>
              <p className="text-gray-500">{finalBook.author}</p>
            </div>
          ))}
        </div>
      </article>
    </>
  );
};

export default NewBooks;
