const express = require('express');
const router = express.Router();
const trainingController = require('../controllers/trainingController');
const authMiddleware = require('../middlewares/authMiddleware'); // Importe o middleware de autenticação

// Aplica o middleware de autenticação a todas as rotas de treino
router.use(authMiddleware);

// Define as rotas para operações CRUD de treino
router.post('/', trainingController.createTraining);
router.get('/', trainingController.getAllTrainings);
router.get('/:id', trainingController.getTrainingById);
router.put('/:id', trainingController.updateTraining);
router.patch('/:id', trainingController.updateTraining); // Pode usar a mesma função para PUT e PATCH
router.delete('/:id', trainingController.deleteTraining);

module.exports = router;