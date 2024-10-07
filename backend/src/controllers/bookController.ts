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

// Add a new book
export const addSuggestion = async (req: Request, res: Response) => {
  try {
    const { title, author } = req.body;
    const newSuggestion = await BookSuggestion.create({ title, author }); // Use BookSuggestion model
    res.json(newSuggestion);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error adding book suggestion' });
  }
};
