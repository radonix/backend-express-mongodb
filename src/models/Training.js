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
      name: { type: String, trim: true },
      sets: { type: Number, min: 1 },
      reps: { type: Number, min: 1 },
      weight: { type: Number, default: 0 },
    },
  ],
}, {
  timestamps: true
});

const Training = mongoose.models.Training || mongoose.model('Training', trainingSchema);

export default Training;