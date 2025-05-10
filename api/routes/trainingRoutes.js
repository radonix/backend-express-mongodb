import express from 'express';
import trainingController from '../controller/trainingController.js'; // Ajuste o caminho se necessário
import authMiddleware from '../middleware/authMiddleware.js';       // Ajuste o caminho se necessário

const router = express.Router();

router.use(authMiddleware);
router.post('/trainings', trainingController.createTraining);

export default router;