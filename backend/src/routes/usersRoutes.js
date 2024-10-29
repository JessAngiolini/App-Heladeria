import {Router} from "express";
import {getUsers} from '../controllers/usersControllers';

const router = Router();

router.get('/users',getUsers)
/* router.post("/register", postRegister)
router.post('/login', postLogin) */

export default router; 