import {Router} from "express";
import {getUsers, saveRegister, LoginCtrl} from '../controllers/usersControllers';

const router = Router();
router.post("/register", saveRegister)
router.get('/users',getUsers)
router.post('/login', LoginCtrl) 

export default router; 