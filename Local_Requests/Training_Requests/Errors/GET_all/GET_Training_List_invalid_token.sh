echo "Enviando GET request para http://localhost:3000/trainings..."
curl --request GET \
  --url "http://localhost:3000/trainings aaa.bbb" \
  -H "Authorization: Bearer "