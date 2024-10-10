import { DataTypes, Model } from '@sequelize/core';
import { sequelize } from '../config/sequelize-config'; // Import the Sequelize instance
import { Optional } from 'sequelize';


interface BookSuggestionAttributes {
  id?: number;
  title: string;
  author: string;
  processed: boolean;
}
export class BookSuggestion extends Model<BookSuggestionAttributes, Optional<BookSuggestionAttributes, 'id'>> implements BookSuggestionAttributes {
  public id!: number;
  public title!: string;
  public author!: string;
  public processed!: boolean
}

// Initialize model
BookSuggestion.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  processed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  }
}, {
  sequelize,
  tableName: 'book_suggestion',
  timestamps: false, // No automatic `createdAt` and `updatedAt` columns
});
