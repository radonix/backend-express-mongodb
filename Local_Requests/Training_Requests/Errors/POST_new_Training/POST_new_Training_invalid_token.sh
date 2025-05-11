echo "Enviando POST request para http://localhost:3000/trainings..."
curl --request POST \
  --url "http://localhost:3000/trainings" \
  -H "Authorization: Bearer aaa.bbb" \
  -H "Content-Type: application/json" \
  --data '{
  "name": "Treino de Pernas",
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
