
import {Router} from "express";
import { getProducts, addProduct } from '../controllers/panelProductsControllers';

const router = Router();
router.get('/panel/products', getProducts);
router.post('/panel/products', addProduct);

export default router; 