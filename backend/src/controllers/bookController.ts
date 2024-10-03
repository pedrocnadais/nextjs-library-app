import { Request, Response } from 'express';
import { Book } from '../models/book';
import { BookSuggestion } from '../models/bookSuggestion';

// Fetch all books
export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
   console.log(error);   
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
