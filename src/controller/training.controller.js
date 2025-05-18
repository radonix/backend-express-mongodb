import trainingService from '../services/training.service.js';

const trainingController = {
    async createTraining(req, res) {
        try {
            const userId = req.userId || (req.user && req.user.id);
            if (!userId) {
                return res.status(401).json({ message: 'Usuário não autenticado.' });
            }
            const trainingData = req.body;
            if (!trainingData || typeof trainingData !== 'object' || Array.isArray(trainingData) || Object.keys(trainingData).length === 0) {
                return res.status(400).json({ message: 'Dados do treino mal formatados ou ausentes.' });
            }
            const newTraining = await trainingService.createTraining(userId, trainingData);
            res.status(201).json(newTraining);
        } catch (error) {
            // Adicionando headers CORS na resposta de erro
            res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
            res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            res.status(500).json({ message: 'Erro ao criar treino.', error: error.message });
        }
    },

    async getAllTrainings(req, res) {
        try {
            // Verifica se o usuário está autenticado via JWT
            const userId = req.userId || (req.user && req.user.id);
            if (!userId) {
                return res.status(401).json({ message: 'Token JWT ausente ou inválido. Usuário não autenticado.' });
            }
            // Busca todos os treinos do usuário autenticado
            const trainings = await trainingService.getAllTrainings(userId);
            if (!Array.isArray(trainings)) {
                return res.status(500).json({ message: 'Erro inesperado ao listar treinos.' });
            }
            if (trainings.length === 0) {
                return res.status(404).json({ message: 'Nenhum treino encontrado para o usuário autenticado.' });
            }
            res.status(200).json(trainings);
        } catch (error) {
            // Adicionando headers CORS na resposta de erro
            res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
            res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            // Erro relacionado ao token JWT
            if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
                return res.status(401).json({ message: 'Token JWT inválido ou expirado.' });
            }
            res.status(500).json({ message: 'Erro ao listar treinos.', error: error.message });
        }
    },

    async getTrainingById(req, res) {
        try {
            const userId = req.userId || (req.user && req.user.id);
            if (!userId) {
                return res.status(401).json({ message: 'Usuário não autenticado.' });
            }
            const { id } = req.params;
            if (!id || typeof id !== 'string') {
                return res.status(400).json({ message: 'ID do treino mal formatado ou ausente.' });
            }
            const training = await trainingService.getTrainingById(userId, id);
            if (!training) {
                return res.status(404).json({ message: 'Treino não encontrado ou acesso não autorizado.' });
            }
            // Verificação extra caso o service não filtre por userId
            if (training.userId && training.userId.toString && training.userId.toString() !== userId.toString()) {
                return res.status(403).json({ message: 'Acesso negado a este treino.' });
            }
            res.status(200).json(training);
        } catch (error) {
            // Adicionando headers CORS na resposta de erro
            res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
            res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
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
            if (!trainingId || typeof trainingId !== 'string') {
                return res.status(400).json({ message: 'ID do treino mal formatado ou ausente.' });
            }
            const updateData = req.body;
            if (!updateData || typeof updateData !== 'object' || Array.isArray(updateData) || Object.keys(updateData).length === 0) {
                return res.status(400).json({ message: 'Dados para atualização mal formatados ou ausentes.' });
            }
            // Busca treino para verificar o proprietário
            const training = await trainingService.getTrainingById(userId, trainingId);
            if (!training) {
                return res.status(404).json({ message: 'Treino não encontrado ou acesso não autorizado.' });
            }
            if (training.userId && training.userId.toString() !== userId.toString()) {
                return res.status(403).json({ message: 'Acesso negado a este treino.' });
            }
            const updatedTraining = await trainingService.updateTraining(userId, trainingId, updateData);
            if (!updatedTraining) {
                return res.status(404).json({ message: 'Treino não encontrado.' });
            }
            res.status(200).json(updatedTraining);
        } catch (error) {
            // Adicionando headers CORS na resposta de erro
            res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
            res.header('Access-Control-Allow-Methods', 'PUT, OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            res.status(500).json({ message: 'Erro ao atualizar treino.', error: error.message });
        }
    },

    async partialUpdateTraining(req, res) {
        try {
            const userId = req.userId || (req.user && req.user.id);
            if (!userId) {
                return res.status(401).json({ message: 'Usuário não autenticado.' });
            }
            const trainingId = req.params.id;
            if (!trainingId || typeof trainingId !== 'string') {
                return res.status(400).json({ message: 'ID do treino mal formatado ou ausente.' });
            }
            const partialData = req.body;
            if (!partialData || typeof partialData !== 'object' || Array.isArray(partialData) || Object.keys(partialData).length === 0) {
                return res.status(400).json({ message: 'Dados para atualização parcial mal formatados ou ausentes.' });
            }
            // Busca treino para verificar o proprietário
            const training = await trainingService.getTrainingById(userId, trainingId);
            if (!training) {
                return res.status(404).json({ message: 'Treino não encontrado ou acesso não autorizado.' });
            }
            if (training.userId && training.userId.toString() !== userId.toString()) {
                return res.status(403).json({ message: 'Acesso negado a este treino.' });
            }
            // Usando updateTraining para atualização parcial
            const updatedTraining = await trainingService.updateTraining(userId, trainingId, partialData);
            if (!updatedTraining) {
                return res.status(404).json({ message: 'Treino não encontrado.' });
            }
            res.status(200).json(updatedTraining);
        } catch (error) {
            // Adicionando headers CORS na resposta de erro
            res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
            res.header('Access-Control-Allow-Methods', 'PATCH, OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            res.status(500).json({ message: 'Erro ao atualizar parcialmente treino.', error: error.message });
        }
    },

    async deleteTraining(req, res) {
        try {
            const userId = req.userId || (req.user && req.user.id);
            if (!userId) {
                return res.status(401).json({ message: 'Usuário não autenticado.' });
            }
            const trainingId = req.params.id;
            if (!trainingId || typeof trainingId !== 'string') {
                return res.status(400).json({ message: 'ID do treino mal formatado ou ausente.' });
            }
            // Busca treino para verificar o proprietário
            const training = await trainingService.getTrainingById(userId, trainingId);
            if (!training) {
                return res.status(404).json({ message: 'Treino não encontrado ou acesso não autorizado.' });
            }
            if (training.userId && training.userId.toString() !== userId.toString()) {
                return res.status(403).json({ message: 'Acesso negado a este treino.' });
            }
            const deletedTraining = await trainingService.deleteTraining(userId, trainingId);
            if (!deletedTraining) {
                return res.status(404).json({ message: 'Treino não encontrado.' });
            }
            // Adicionando headers CORS para respostas 204 (No Content) também
            res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
            res.header('Access-Control-Allow-Methods', 'DELETE, OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            res.status(204).send();
        } catch (error) {
            // Adicionando headers CORS na resposta de erro
            res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
            res.header('Access-Control-Allow-Methods', 'DELETE, OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            res.status(500).json({ message: 'Erro ao deletar treino.', error: error.message });
        }
    },
};

export default trainingController;