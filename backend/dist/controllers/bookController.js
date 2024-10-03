"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBook = exports.getAllBooks = void 0;
const book_1 = require("../models/book");
// Fetch all books
const getAllBooks = async (req, res) => {
    try {
        const books = await book_1.Book.findAll();
        res.json(books);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error fetching books' });
    }
};
exports.getAllBooks = getAllBooks;
// Add a new book
const addBook = async (req, res) => {
    try {
        const { title, author, img, audio, written } = req.body;
        const newBook = await book_1.Book.create({ title, author, img, audio, written });
        res.json(newBook);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error adding book' });
    }
};
exports.addBook = addBook;
