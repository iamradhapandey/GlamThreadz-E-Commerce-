import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';

// APP Config 
const app = express();
const PORT = process.env.PORT || 4000;

// connecting to database and cloudinary and after successful connection, starting the server
connectDB().then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => {
    console.error("Database connection failed:", error);
})
connectCloudinary();

// middlewares 
app.use(express.json());
app.use(cors());


// api endpoints 
app.use('/api/user' , userRouter)
app.use('/api/product', productRouter)


app.get('/', (req, res)=>{
    res.send('Welcome to the API');
})

