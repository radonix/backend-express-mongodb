const Training = require('../models/Training');
const logger = require('../utils/logger'); // Importe o logger

const trainingService = {
  async createTraining(userId, trainingData) {
    try {
      const newTraining = await Training.create({ userId, ...trainingData });
      logger.info(`Treino criado com ID: ${newTraining._id} para o usuário ${userId}`);
      return newTraining;
    } catch (error) {
      logger.error(`Erro ao criar treino para o usuário ${userId}: ${error.message}`);
      throw error;
    }
  },

  async getAllTrainings(userId) {
    try {
      const trainings = await Training.find({ userId }).sort({ date: -1, createdAt: -1 });
      return trainings;
    } catch (error) {
      logger.error(`Erro ao listar treinos do usuário ${userId}: ${error.message}`);
      throw error;
    }
  },

  async getTrainingById(userId, trainingId) {
    try {
      const training = await Training.findOne({ _id: trainingId, userId });
      return training;
    } catch (error) {
      logger.error(`Erro ao buscar treino ${trainingId} do usuário ${userId}: ${error.message}`);
      throw error;
    }
  },

  async updateTraining(userId, trainingId, updateData) {
    try {
      const updatedTraining = await Training.findOneAndUpdate(
        { _id: trainingId, userId },
        { ...updateData, updatedAt: Date.now() },
        { new: true, runValidators: true }
      );
      if (!updatedTraining) {
        logger.warn(`Treino ${trainingId} do usuário ${userId} não encontrado para atualização.`);
        return null;
      }
      logger.info(`Treino ${trainingId} do usuário ${userId} atualizado.`);
      return updatedTraining;
    } catch (error) {
      logger.error(`Erro ao atualizar treino ${trainingId} do usuário ${userId}: ${error.message}`);
      throw error;
    }
  },

  async deleteTraining(userId, trainingId) {
    try {
      const deletedTraining = await Training.findOneAndDelete({ _id: trainingId, userId });
      if (!deletedTraining) {
        logger.warn(`Treino ${trainingId} do usuário ${userId} não encontrado para exclusão.`);
        return null;
      }
      logger.info(`Treino ${trainingId} do usuário ${userId} deletado.`);
      return deletedTraining;
    } catch (error) {
      logger.error(`Erro ao deletar treino ${trainingId} do usuário ${userId}: ${error.message}`);
      throw error;
    }
  },
};

module.exports = trainingService;