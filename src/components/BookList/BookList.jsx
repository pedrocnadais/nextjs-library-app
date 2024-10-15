"use client";
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
import { useState, useEffect, useRef, useCallback } from "react";
import Book from "@/components/bookCard";
import { client } from "@/utils/axios.config";
import SelectReorder from "@/components/selectReorder";
import BookModal from "@/components/modal/BookModal";
import { Toaster } from "react-hot-toast";
import { BookProvider, useBookContext } from "@/context/BookContext";
import Spinner from "../spinner/spinner";
// Define BookList component to be wrapped by the BookProvider
var BookListContent = function (_a) {
    var books = _a.books, loading = _a.loading, sortBy = _a.sortBy, setSortBy = _a.setSortBy, lastBookElementRef = _a.lastBookElementRef;
    var _b = useBookContext(), setCurrentIndex = _b.setCurrentIndex, openModal = _b.openModal, isOpen = _b.isOpen; // Inside the provider now
    var handleBookClick = function (index) {
        setCurrentIndex(index); // Accessed properly inside the provider
        openModal();
    };
    var sortedBooks = __spreadArray([], books, true);
    if (sortBy === "author") {
        sortedBooks.sort(function (a, b) { return a.author.localeCompare(b.author); });
    }
    else if (sortBy === "title") {
        sortedBooks.sort(function (a, b) { return a.title.localeCompare(b.title); });
    }
    else if (sortBy === "inverted-author") {
        sortedBooks.sort(function (a, b) { return b.author.localeCompare(a.author); });
    }
    else if (sortBy === "inverted-title") {
        sortedBooks.sort(function (a, b) { return b.title.localeCompare(a.author); });
    }
    return (<section className="p-6">
      <Toaster position="bottom-center" reverseOrder={false}/>

      <section>
        <div className="mb-4">
          <SelectReorder sortBy={sortBy} setSortBy={setSortBy}/>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {sortedBooks.map(function (book, index) { return (<div key={book.id} ref={sortedBooks.length === index + 1 ? lastBookElementRef : null} // Attach observer to last book
        >
              <Book bookType={book} onClick={function () { return handleBookClick(index); }}/>
            </div>); })}
        </div>
        {loading && (<div className="text-center mt-7"><Spinner /></div>)}
      </section>

      {isOpen && <BookModal />}
    </section>);
};
// Main BookList component
var BookList = function () {
    var _a = useState([]), books = _a[0], setBooks = _a[1];
    var _b = useState(1), page = _b[0], setPage = _b[1]; // Track which page we're on
    var _c = useState(false), loading = _c[0], setLoading = _c[1];
    var _d = useState(true), hasMore = _d[0], setHasMore = _d[1]; // Check if more books are available
    var _e = useState(""), sortBy = _e[0], setSortBy = _e[1];
    // Function to fetch books using pagination
    var fetchBooks = useCallback(function (pageNumber) { return __awaiter(void 0, void 0, void 0, function () {
        var response, newBooks, combinedBooks, uniqueBooks, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, client.get("/api/books?limit=15&page=".concat(pageNumber))];
                case 2:
                    response = _a.sent();
                    newBooks = response.data;
                    if (newBooks.length === 0) {
                        setHasMore(false); // No more books to load
                    }
                    else {
                        combinedBooks = __spreadArray(__spreadArray([], books, true), newBooks, true);
                        uniqueBooks = Array.from(new Map(combinedBooks.map(function (book) { return [book.id, book]; })).values());
                        setBooks(uniqueBooks); // Deduplicated books
                    }
                    setLoading(false);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error fetching books:", error_1);
                    setLoading(false);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); }, [books]);
    useEffect(function () {
        fetchBooks(page); // Fetch the first set of books
    }, [fetchBooks, page]);
    // Infinite scroll logic using IntersectionObserver
    var observer = useRef(null);
    var lastBookElementRef = function (node) {
        if (loading)
            return;
        if (observer.current)
            observer.current.disconnect();
        observer.current = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting && hasMore) {
                setPage(function (prevPage) { return prevPage + 1; }); // Load next page when we hit the bottom
            }
        });
        if (node)
            observer.current.observe(node);
    };
    return (<BookProvider books={books}>
      <BookListContent books={books} setBooks={setBooks} setPage={setPage} hasMore={hasMore} loading={loading} sortBy={sortBy} setSortBy={setSortBy} lastBookElementRef={lastBookElementRef}/>
    </BookProvider>);
};
export default BookList;
