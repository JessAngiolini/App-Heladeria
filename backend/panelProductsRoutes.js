import {Router} from "express";
import { getProducts, addProduct } from '../controllers/panelProductsControllers.js';

const router = Router();
router.get('/panel/products', getProducts);
router.post('/panel/products', addProduct);

export default router; 