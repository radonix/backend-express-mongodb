import trainingService from '../services/trainingService.js';

const trainingController = {
  async createTraining(req, res) {
    try {
      const userId = req.userId || (req.user && req.user.id);
      if (!userId) {
        return res.status(401).json({ message: 'Usuário não autenticado.' });
      }
      const trainingData = req.body;
      const newTraining = await trainingService.createTraining(userId, trainingData);
      res.status(201).json(newTraining);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar treino.', error: error.message });
    }
  },

  async getAllTrainings(req, res) {
    try {
      const userId = req.userId || (req.user && req.user.id);
      if (!userId) {
        return res.status(401).json({ message: 'Usuário não autenticado.' });
      }
      const trainings = await trainingService.getAllTrainings(userId);
      res.status(200).json(trainings);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar treinos.', error: error.message });
    }
  },

  async getTrainingById(req, res) {
    try {
      const userId = req.userId || (req.user && req.user.id);
      if (!userId) {
        return res.status(401).json({ message: 'Usuário não autenticado.' });
      }
      const training = await trainingService.getTrainingById(userId, req.params.id);
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
      const userId = req.userId || (req.user && req.user.id);
      if (!userId) {
        return res.status(401).json({ message: 'Usuário não autenticado.' });
      }
      const trainingId = req.params.id;
      const updateData = req.body;
      const updatedTraining = await trainingService.updateTraining(userId, trainingId, updateData);
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
      const userId = req.userId || (req.user && req.user.id);
      if (!userId) {
        return res.status(401).json({ message: 'Usuário não autenticado.' });
      }
      const trainingId = req.params.id;
      const deletedTraining = await trainingService.deleteTraining(userId, trainingId);
      if (!deletedTraining) {
        return res.status(404).json({ message: 'Treino não encontrado.' });
      }
      res.status(204).send(); // 204 No Content para sucesso na deleção
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar treino.', error: error.message });
    }
  },
};

export default trainingController;