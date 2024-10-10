import { Request, Response } from 'express';
import { Book } from '../models/book';
import { BookSuggestion } from '../models/bookSuggestion';

// Fetch all books
export const getAllBooks = async (req: Request, res: Response) => {
  const limit = parseInt(req.query.limit as string) || 20; // Default limit: 20
  const page = parseInt(req.query.page as string) || 1;    // Default page: 1
  const offset = (page - 1) * limit; // Calculate the offset based on the page

  try {
    const books = await Book.findAll({
      limit,   // Number of books to return
      offset,  // Offset based on page
    });

    res.json(books); // Return the paginated books
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ error: 'Error fetching books' });
  }
};

// Add a new suggestion
export const addSuggestion = async (req: Request, res: Response) => {
  try {
    const { title, author } = req.body;
    const newSuggestion = await BookSuggestion.create({ title, author, processed: false }); // Use BookSuggestion model

    res.json(newSuggestion);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error adding book suggestion' });
  }
};

// Fetch unprocessed book suggestions
export const getUnprocessedSuggestions = async (): Promise<BookSuggestion[]> => {
  try {
    const suggestions = await BookSuggestion.findAll({
      where: { processed: false },
    });
    return suggestions
  } catch (error) {
    console.error('Error fetching suggestions:', error);
    return [];
  }
};

const capitalize = (text: string) => {
  return text.replace(/\b\w/g, (char) => char.toUpperCase());
};
// Insert the new book into books_list table
export const insertBookIntoList = async (bookData: { title: string, author: string, img: string, written: string, audio: string }) => {
  try {
    const formattedBookData = {
      ...bookData,
      title: capitalize(bookData.title),
      author: capitalize(bookData.author),
    }
    await Book.create(formattedBookData);
  } catch (error) {
    console.error('Error inserting book:', error);
    return [];
  }
}