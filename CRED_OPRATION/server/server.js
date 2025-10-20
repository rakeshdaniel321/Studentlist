import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';   
const app = express();
app.use(cors());
app.use(bodyParser.json());
dotenv.config(); 
const PORT = process.env.PORT || 5000;  
const MONGODB_URI = process.env.MONGODB_URI; 
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})  
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
}   
);
