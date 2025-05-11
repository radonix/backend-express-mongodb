echo "Enviando PUT request para https://express-backend-example-jet.vercel.app/trainings/681fcd93335742e354e258d8..."
curl --request PUT \
  --url "https://express-backend-example-jet.vercel.app/trainings/681fcd93335742e354e258d8" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MjAwOTViZjc2Y2Y1MDMyOTkzZTlmMiIsImlhdCI6MTc0NjkzMDA1NCwiZXhwIjoxNzQ2OTMzNjU0fQ.Ggsr6nufUZ7Y42X-GzD6dFWmvDRhnEs-65CfLuP7aRc" \
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