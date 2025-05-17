import express from 'express';
import trainingController from '../controller/training.controller.js'; // Adjust the path if necessary
import authMiddleware from '../middleware/authMiddleware.js';         // Adjust the path if necessary

const router = express.Router();

router.use(authMiddleware);

router.post('/', trainingController.createTraining);
router.get('/', trainingController.getAllTrainings);
router.get('/:id', trainingController.getTrainingById);
router.put('/:id', trainingController.updateTraining);
router.delete('/:id', trainingController.deleteTraining);
router.patch('/:id', trainingController.partialUpdateTraining);

export default router;