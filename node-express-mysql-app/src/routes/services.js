import express from 'express';
import ServicesController from '../controllers/servicesController';

const router = express.Router();
const servicesController = new ServicesController();

router.get('/services', servicesController.getAllServices);

export default router;