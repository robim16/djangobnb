#!/bin/sh

# Salir si ocurre un error
set -e

# Crear carpeta de logs si no existe (evita FileNotFoundError)
mkdir -p /usr/src/djangobnb_backend/logs

# Verificar si la base de datos es PostgreSQL
if [ "$DATABASE" = "postgres" ]
then
    echo "Esperando que la base de datos esté lista..."

    # Esperar hasta que el servicio de base de datos responda
    while ! nc -z $SQL_HOST $SQL_PORT; do
        sleep 0.1
    done

    echo "¡Base de datos lista!"
fi

# Ejecutar migraciones de Django
echo "Ejecutando migraciones..."
python manage.py makemigrations
python manage.py migrate


# Ejecutar el comando que se pasa al contenedor
exec "$@"
