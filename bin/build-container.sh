npm run build
docker build -t mrichard/weddingapp:$1 .
docker push mrichard/weddingapp:$1
