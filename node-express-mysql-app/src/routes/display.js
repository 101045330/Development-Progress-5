import express from 'express';
import DisplayController from '../controllers/displayController';

const router = express.Router();
const displayController = new DisplayController();

router.get('/service/:id', displayController.getServiceById);

export default router;