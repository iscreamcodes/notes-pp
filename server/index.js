import mongoose from 'mongoose';
import express from 'express';
import router from './Router/route.js';

const app = express();
const PORT = 3000;


app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Notes-app')
        .then(() => {console.log('Connected to MongoDB');})
        .catch((err) => {console.error('Failed to connect to MongoDB', err)});
    
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
 app.use('/api', router);
