echo "Enviando PUT request para http://localhost:3000/trainings/681ff07eaeef090dbe8d0ad2..."
curl --request PUT \
  --url "http://localhost:3000/trainings/681ff07eaeef090dbe8d0ad2" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MWZlZDNmYWVlZjA5MGRiZThkMGFjMCIsImlhdCI6MTc0NjkyMjg5MSwiZXhwIjoxNzQ2OTI2NDkxfQ.FxTNMe0E4t0kYagnk5MjdWTXbFB-h_7Ta15kR2YY6iE" \
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