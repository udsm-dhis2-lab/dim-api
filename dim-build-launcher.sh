docker-compose -f  docker-compose-server.yml up -d --build --remove-orphans
docker exec -i dim-api_postgres-database_1 psql -U postgres -c "DROP DATABASE IF EXISTS epilabdb" 
docker exec -i dim-api_postgres-database_1 psql -U postgres -c "CREATE DATABASE epilabdb WITH ENCODING='UTF8' OWNER=postgres;"
docker exec -i dim-api_postgres-database_1 psql -U postgres -c "ALTER USER postgres WITH PASSWORD 'postgres';"
docker container restart dim-api_postgres-database_1
docker container restart dim-api_nginx_1
docker container restart dim-api_api_1
