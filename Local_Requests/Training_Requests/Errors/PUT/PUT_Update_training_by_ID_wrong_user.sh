echo "Enviando PUT request para http://localhost:3000/trainings/681ff07eaeef090dbe8d0ad2..."
curl --request PUT \
  --url "http://localhost:3000/trainings/681ff07eaeef090dbe8d0ad2" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MWZlZWRmYWVlZjA5MGRiZThkMGFjNCIsImlhdCI6MTc0NjkyMzI1NiwiZXhwIjoxNzQ2OTI2ODU2fQ.P0bBl2XZ8mGvGmHEG5Vj6TMfTfzfMUIWN992AzBy60M" \
  -H "Content-Type: application/json" \
  --data '{
  "name": "Treino Atualizado",
  "description": "Descrição atualizada do treino",
  "date": "2024-08-06",
  "exercises": [
    {
      "name": "Exercicio 1 Atualizado",
      "sets": 4,
      "reps": 15,
      "weight": 90
    }
  ]
}'