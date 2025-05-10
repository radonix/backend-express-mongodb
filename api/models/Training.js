import mongoose from 'mongoose';

const trainingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Referência ao model de Usuário
    required: true,
    index: true, // Index para otimizar consultas por usuário
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
    default: '',
  },
  date: {
    type: Date,
    required: true,
  },
  exercises: [
    {
      name: { type: String, required: true, trim: true },
      sets: { type: Number, required: true, min: 1 },
      reps: { type: Number, required: true, min: 1 },
      weight: { type: Number, default: 0 },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Training = mongoose.model('Training', trainingSchema);

export default Training;