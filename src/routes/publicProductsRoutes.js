import { Router } from 'express';
import { getProducts, getProductById } from '../controllers/publicProductController.js';

const router = Router();

router.get('/products/all', getProducts);
router.get('/products/:id', getProductById);

export default router;
