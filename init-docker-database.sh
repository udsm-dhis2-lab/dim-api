psql -h postgres-database -p 5434 -U postgres -c "CREATE DATABASE dimmediatordb;"
psql -h localhost -p 5434 -U postgres dimmediatordb < files/db/backup.sql
