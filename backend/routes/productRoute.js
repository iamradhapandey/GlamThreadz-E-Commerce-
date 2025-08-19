import express from "express" ;
import {listProduct, addProduct, removeProduct, singleProduct} from "../controllers/productController.js";
import upload from "../middleware/multer.js"; // Assuming you have a middleware for handling file uploads
import adminAuth from "../middleware/adminAuth.js"; // Assuming you have an admin authentication middleware

const productRouter = express.Router() ;
productRouter.post('/add',adminAuth,upload.fields([{name: 'image1', maxCount:1},{name: 'image2', maxCount:1},{name: 'image3', maxCount:1},{name: 'image4', maxCount:1}]), addProduct);
productRouter.get('/list', listProduct);
productRouter.post('/remove',adminAuth, removeProduct);
productRouter.get('/single', singleProduct)

export default productRouter;