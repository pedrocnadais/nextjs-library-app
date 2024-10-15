var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { DataTypes, Model } from '@sequelize/core';
import { sequelize } from '../config/sequelize-config'; // Import the Sequelize instance
var BookSuggestion = /** @class */ (function (_super) {
    __extends(BookSuggestion, _super);
    function BookSuggestion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BookSuggestion;
}(Model));
export { BookSuggestion };
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
    sequelize: sequelize,
    tableName: 'book_suggestion',
    timestamps: false, // No automatic `createdAt` and `updatedAt` columns
});
