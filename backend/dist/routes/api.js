"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bookController_1 = require("../controllers/bookController");
const router = (0, express_1.Router)();
router.get('/books', bookController_1.getAllBooks);
router.post('/books', bookController_1.addBook);
exports.default = router;
