import express from 'express';
import { createUser } from '../Controller/userController.js';
import { addBook } from '../Controller/bookController.js';
const router = express.Router();

router.post('/user', createUser);
router.post("/book", addBook);

export default router;