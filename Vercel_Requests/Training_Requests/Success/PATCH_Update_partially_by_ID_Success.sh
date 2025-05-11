echo "Enviando PATCH request para https://express-backend-example-jet.vercel.app/trainings/681fcd93335742e354e258d8..."
curl --request PATCH \
  --url "https://express-backend-example-jet.vercel.app/trainings/681fcd93335742e354e258d8" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MjAwOTViZjc2Y2Y1MDMyOTkzZTlmMiIsImlhdCI6MTc0NjkzMDA1NCwiZXhwIjoxNzQ2OTMzNjU0fQ.Ggsr6nufUZ7Y42X-GzD6dFWmvDRhnEs-65CfLuP7aRc" \
  -H "Content-Type: application/json" \
  --data '{
  "description": "Descrição Parcialmente Atualizada",
  "date": "2024-08-07"
}'