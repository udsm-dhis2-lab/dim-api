psql -h localhost -p 5434 -U postgres -c "CREATE DATABASE DIMMediator;"
psql -h localhost -p 5434 -U postgres DIMMediator < files/db/backup.sql
