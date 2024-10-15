var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Book } from '../models/book';
import { BookSuggestion } from '../models/bookSuggestion';
// Fetch all books
export var getAllBooks = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var limit, page, offset, books, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                limit = parseInt(req.query.limit) || 20;
                page = parseInt(req.query.page) || 1;
                offset = (page - 1) * limit;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Book.findAll({
                        limit: limit, // Number of books to return
                        offset: offset,
                    })];
            case 2:
                books = _a.sent();
                res.json(books); // Return the paginated books
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error('Error fetching books:', error_1);
                res.status(500).json({ error: 'Error fetching books' });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
// Add a new suggestion
export var addSuggestion = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, title, author, newSuggestion, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, title = _a.title, author = _a.author;
                return [4 /*yield*/, BookSuggestion.create({ title: title, author: author, processed: false })];
            case 1:
                newSuggestion = _b.sent();
                res.json(newSuggestion);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _b.sent();
                console.log(error_2);
                res.status(500).json({ error: 'Error adding book suggestion' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Fetch unprocessed book suggestions
export var getUnprocessedSuggestions = function () { return __awaiter(void 0, void 0, void 0, function () {
    var suggestions, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, BookSuggestion.findAll({
                        where: { processed: false },
                    })];
            case 1:
                suggestions = _a.sent();
                return [2 /*return*/, suggestions];
            case 2:
                error_3 = _a.sent();
                console.error('Error fetching suggestions:', error_3);
                return [2 /*return*/, []];
            case 3: return [2 /*return*/];
        }
    });
}); };
var capitalize = function (text) {
    return text.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
};
// Insert the new book into books_list table
export var insertBookIntoList = function (bookData) { return __awaiter(void 0, void 0, void 0, function () {
    var formattedBookData, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                formattedBookData = __assign(__assign({}, bookData), { title: capitalize(bookData.title), author: capitalize(bookData.author) });
                return [4 /*yield*/, Book.create(formattedBookData)];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                console.error('Error inserting book:', error_4);
                return [2 /*return*/, []];
            case 3: return [2 /*return*/];
        }
    });
}); };
