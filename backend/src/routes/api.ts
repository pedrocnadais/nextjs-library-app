import { Router } from 'express';
import { getAllBooks, addSuggestion } from '../controllers/bookController';

const router = Router();

router.get('/books', getAllBooks);
router.post('/suggestion', addSuggestion);

export default router;
