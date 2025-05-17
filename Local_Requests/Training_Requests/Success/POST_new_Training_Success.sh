echo "Enviando POST request para http://localhost:3000/trainings..."
curl  --request POST \
  --url "http://localhost:3000/trainings" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MjhiMDhmYzQ1MzZlZTMyNjJmOWM1ZSIsImlhdCI6MTc0NzQ5NzIxOSwiZXhwIjoxNzQ3NTAwODE5fQ.BQKfEs33_zEh4s35gR7RIW7PNXyLnBJRMY_h2nySxFE" \
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