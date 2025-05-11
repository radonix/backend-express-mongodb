echo "Enviando PATCH request para http://localhost:3000/trainings/681ff07eaeef090dbe8d0ad2..."
curl --request PATCH \
  --url "http://localhost:3000/trainings/681ff07eaeef090dbe8d0ad2" \
  -H "Authorization: Bearer " \
  -H "Content-Type: application/json" \
  --data '{
  "description": "Descrição Parcialmente Atualizada",
  "date": "2024-08-07"
}'