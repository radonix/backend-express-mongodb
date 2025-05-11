echo "Enviando PATCH request para https://express-backend-example-jet.vercel.app/trainings/681fcd93335742e354e258d8..."
curl --request PATCH \
  --url "https://express-backend-example-jet.vercel.app/trainings/681fcd93335742e354e258d8" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MWZmYWViYjRmZWJmMzEyOWQyMDUzYyIsImlhdCI6MTc0NjkyNjMzMCwiZXhwIjoxNzQ2OTI5OTMwfQ.WZqQkjCBvtsFjJ3lTtpJq1B4ocivd1zVuqMbV7V5bDc" \
  -H "Content-Type: application/json" \
  --data '{
  "description": "Descrição Parcialmente Atualizada",
  "date": "2024-08-07"
}'