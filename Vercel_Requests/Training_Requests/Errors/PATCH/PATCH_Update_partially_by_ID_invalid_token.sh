echo "Enviando PATCH request para https://express-backend-example-jet.vercel.app/trainings/681fcd93335742e354e258d8..."
curl --request PATCH \
  --url "https://express-backend-example-jet.vercel.app/trainings/681fcd93335742e354e258d8" \
  -H "Authorization: Bearer aaa.bbb.ccc" \
  -H "Content-Type: application/json" \
  --data '{
  "description": "Descrição Parcialmente Atualizada",
  "date": "2024-08-07"
}'