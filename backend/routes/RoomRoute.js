import express from 'express';
import {
    getRoom,
    getRoomById,
    addRoom,
    editRoom,
    deleteRoom
} from '../controllers/roomController.js';
const router = express.Router();

router.get('/room', getRoom);
router.get('/room/:id', getRoomById);
router.post('/room', addRoom);
router.patch('/room/:id', editRoom);
router.delete('/room/:id', deleteRoom);

export default router;