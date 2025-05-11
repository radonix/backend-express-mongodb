import express from 'express';
import trainingController from '../controller/trainingController.js'; // Ajuste o caminho se necessário
import authMiddleware from '../middleware/authMiddleware.js';       // Ajuste o caminho se necessário

const router = express.Router();

router.use(authMiddleware);
router.post('/', trainingController.createTraining);
router.get('/', trainingController.getAllTrainings);
router.get('/:id', trainingController.getTrainingById);
router.put('/:id', trainingController.updateTraining);
router.delete('/:id', trainingController.deleteTraining);
router.patch('/:id', trainingController.partialUpdateTraining);


export default router;