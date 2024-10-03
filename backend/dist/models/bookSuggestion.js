"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookSuggestion = void 0;
const sequelize_1 = require("sequelize");
const sequelize_config_1 = require("../config/sequelize-config"); // Import the Sequelize instance
// Define BookSuggestion model for book_suggestion table
exports.BookSuggestion = sequelize_config_1.sequelize.define('book_suggestion', {
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'book_suggestion',
    timestamps: false, // No automatic `createdAt` and `updatedAt` columns
});
