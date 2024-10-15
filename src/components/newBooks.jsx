'use client';
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useState } from "react";
import { client } from "@/utils/axios.config";
var NewBooks = function () {
    var _a = useState(''), title = _a[0], setTitle = _a[1];
    var _b = useState(''), author = _b[0], setAuthor = _b[1];
    var _c = useState([]), listBooks = _c[0], setListBooks = _c[1];
    var saveToLocalStorage = function (bookSuggestions) {
        localStorage.setItem('bookSuggestions', JSON.stringify(bookSuggestions));
    };
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var response_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    if (!(title && author)) return [3 /*break*/, 4];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, client.post('/api/suggestion', {
                            title: title,
                            author: author,
                        })];
                case 2:
                    response_1 = _a.sent();
                    console.log('Book added successfully:', response_1.data);
                    setListBooks(function (prevListBooks) { return __spreadArray(__spreadArray([], prevListBooks, true), [response_1.data], false); });
                    saveToLocalStorage(__spreadArray(__spreadArray([], listBooks, true), [response_1.data], false));
                    setAuthor('');
                    setTitle('');
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error('Error adding book:', error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (<>
      <h2 className="text-2xl font-bold mb-4 text-center ">Book Suggestions</h2>
      <article>
        <form className="space-y-4 bg-gray-100 p-4 rounded-lg shadow-md" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="bookName" className="block mb-2 text-sm font-medium text-gray-900">
              Book Title:
            </label>
            <input type="text" id="bookName" className="block w-full p-2 border border-gray-300 rounded-lg" name="bookName" value={title} placeholder="Book title here" onChange={function (e) { return setTitle(e.target.value); }}/>
          </div>
          <div className="form-control">
            <label htmlFor="bookAuthor" className="block mb-2 text-sm font-medium text-gray-900">
              Author:
            </label>
            <input type="text" id="bookAuthor" className="block w-full p-2 border border-gray-300 rounded-lg" name="bookAuthor" value={author} placeholder="Book author here" onChange={function (e) { return setAuthor(e.target.value); }}/>
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
            Add book to the list
          </button>
        </form>
        <div className="mt-4 space-y-2">
          {listBooks.map(function (finalBook, index) { return (<div key={index} className="p-2 bg-white shadow rounded-lg">
              <h4 className="text-lg font-bold">{finalBook.title}</h4>
              <p className="text-gray-500">{finalBook.author}</p>
            </div>); })}
        </div>
      </article>
    </>);
};
export default NewBooks;
