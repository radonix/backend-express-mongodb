echo "Enviando POST request para http://localhost:3000/trainings..."
curl --request POST \
  --url "http://localhost:3000/trainings" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MWZlZWRmYWVlZjA5MGRiZThkMGFjNCIsImlhdCI6MTc0NjkyMzI1NiwiZXhwIjoxNzQ2OTI2ODU2fQ.P0bBl2XZ8mGvGmHEG5Vj6TMfTfzfMUIWN992AzBy60M" \
  -H "Content-Type: application/json" \
  --data '{
  "name": "Treino de Pernas user 2",
  "description": "Agachamentos, leg press, extensora",
  "date": "2024-08-01",
  "exercises": [
    {
      "name": "Agachamento",
      "sets": 3,
      "reps": 10,
      "weight": 100
    },
    {
      "name": "Leg Press",
      "sets": 3,
      "reps": 12,
      "weight": 150
    }
  ]
}'
