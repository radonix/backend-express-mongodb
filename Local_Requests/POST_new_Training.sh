echo "Enviando POST request para http://localhost:3000/trainings..."
curl --request POST \
  --url "http://localhost:3000/trainings" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MWZjMGY2NGYyNDFmMTMwZmU3MjEwMyIsImlhdCI6MTc0NjkxMTQ5NiwiZXhwIjoxNzQ2OTE1MDk2fQ.bQOLIAeRtqMmckYgghd8Lk3Bf_THNGs9vIWoknoJyGc" \
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
