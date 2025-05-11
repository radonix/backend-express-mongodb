echo "Enviando POST request para https://express-backend-example-jet.vercel.app/trainings..."
curl --request POST \
  --url "https://express-backend-example-jet.vercel.app/trainings" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MjAwOTViZjc2Y2Y1MDMyOTkzZTlmMiIsImlhdCI6MTc0NjkzMDA1NCwiZXhwIjoxNzQ2OTMzNjU0fQ.Ggsr6nufUZ7Y42X-GzD6dFWmvDRhnEs-65CfLuP7aRc" \
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
