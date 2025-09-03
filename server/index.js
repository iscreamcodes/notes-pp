import mongoose from 'mongoose';
import express from 'express';
import router from './Router/route.js';
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;


app.use(express.json());
app.use(cors());

mongoose.connect(MONGOURL)
        .then(() => {console.log('Connected to MongoDB');})
        .catch((err) => {console.error('Failed to connect to MongoDB', err)});
    
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
 app.use('/api', router);
