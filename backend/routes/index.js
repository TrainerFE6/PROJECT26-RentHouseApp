import express from 'express';
import { Login, Logout, getAdmin, register } from '../controllers/adminController.js';
import { verifyToken } from '../middleware/verify.js';
import { refreshToken } from '../controllers/refreshToken.js';

const router = express.Router();

router.get('/admin', verifyToken, getAdmin);
router.post('/admin', register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

export default router