import express from 'express';
import { createUser } from '../Controller/userController.js';

const router = express.Router();

router.post('/user', createUser);

export default router;