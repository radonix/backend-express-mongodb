const trainingService = require('../services/trainingService');

const trainingController = {
  async createTraining(req, res) {
    try {
      const trainingData = req.body;
      const newTraining = await trainingService.createTraining(req.userId, trainingData);
      res.status(201).json(newTraining);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar treino.', error: error.message });
    }
  },

  async getAllTrainings(req, res) {
    try {
      const trainings = await trainingService.getAllTrainings(req.userId);
      res.status(200).json(trainings);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar treinos.', error: error.message });
    }
  },

  async getTrainingById(req, res) {
    try {
      const training = await trainingService.getTrainingById(req.userId, req.params.id);
      if (!training) {
        return res.status(404).json({ message: 'Treino não encontrado.' });
      }
      res.status(200).json(training);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar treino.', error: error.message });
    }
  },

  async updateTraining(req, res) {
    try {
      const trainingId = req.params.id;
      const updateData = req.body;
      const updatedTraining = await trainingService.updateTraining(req.userId, trainingId, updateData);
      if (!updatedTraining) {
        return res.status(404).json({ message: 'Treino não encontrado.' });
      }
      res.status(200).json(updatedTraining);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar treino.', error: error.message });
    }
  },

  async deleteTraining(req, res) {
    try {
      const trainingId = req.params.id;
      const deletedTraining = await trainingService.deleteTraining(req.userId, trainingId);
      if (!deletedTraining) {
        return res.status(404).json({ message: 'Treino não encontrado.' });
      }
      res.status(204).send(); // 204 No Content para sucesso na deleção
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar treino.', error: error.message });
    }
  },
};

module.exports = trainingController;