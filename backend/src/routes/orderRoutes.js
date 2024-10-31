import { Router } from 'express';
import { createOrder } from '../controllers/orderControllers';

const router = Router();

router.post('/orders', createOrder);

export default router;
