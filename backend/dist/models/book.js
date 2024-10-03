"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const sequelize_1 = require("sequelize");
const sequelize_config_1 = require("../config/sequelize-config"); // Import the Sequelize instance
// Define Book model for books_list table
exports.Book = sequelize_config_1.sequelize.define('books_list', {
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    img: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    audio: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    written: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
}, {
    tableName: 'books_list',
    timestamps: false, // No automatic `createdAt` and `updatedAt` columns
});
