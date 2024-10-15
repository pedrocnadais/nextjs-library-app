import { DataTypes } from '@sequelize/core';
import { sequelize } from '../config/sequelize-config'; // Import the Sequelize instance
// Define Book model for books_list table
export var Book = sequelize.define('books_list', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true // Ensures the title is not an empty string
        }
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    audio: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    written: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    tableName: 'books_list',
    timestamps: false, // No automatic `createdAt` and `updatedAt` columns
});
