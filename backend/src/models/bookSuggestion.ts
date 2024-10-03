import { DataTypes } from '@sequelize/core';
import { sequelize } from '../config/sequelize-config'; // Import the Sequelize instance

// Define BookSuggestion model for book_suggestion table
export const BookSuggestion = sequelize.define('book_suggestion', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'book_suggestion',
  timestamps: false, // No automatic `createdAt` and `updatedAt` columns
});
