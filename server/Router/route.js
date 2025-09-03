import express from 'express';
import { createUser } from '../Controller/userController.js';
import { addBook, getBooks, getBookById, updateBook, deleteBook } from '../Controller/bookController.js';
import { loginRouter } from '../Login/login.js';
const router = express.Router();

router.post('/user', createUser);
router.post("/book", addBook);
router.get("/books", getBooks);
router.get("/book/:id", getBookById);
router.put("/book/:id", updateBook);
router.delete("/book/:id", deleteBook);
router.post('/login', loginRouter);

export default router;