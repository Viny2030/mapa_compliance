FROM python:3.11-slim

WORKDIR /app

# Dependencias del sistema para lxml y reportlab
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc libxml2-dev libxslt-dev \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Crear carpeta de datos
RUN mkdir -p data static

EXPOSE 8000

# $PORT lo inyecta Railway; si no existe usa 8000
CMD ["sh", "-c", "uvicorn main:app --host 0.0.0.0 --port ${PORT:-8000}"]
