# Microservicio de Personas

Este proyecto consiste en un frontend en Angular y un backend en NestJS que permite capturar y saludar a personas por su nombre y apellidos.

## Estructura del proyecto

- **FrontEndTest**: Frontend en Angular que contiene un formulario para capturar nombres y apellidos.
- **BackEndTest**: Backend en NestJS que ofrece una API para saludar a las personas.

## Requisitos previos

- Docker y Docker Compose
- Node.js (para desarrollo local)
- npm (para desarrollo local)

## Instalación y ejecución

### Usando Docker

1. Construir las imágenes:

```bash
make build
```

2. Iniciar los servicios:

```bash
make run
```

3. Para desarrollo:

```bash
make run-dev
```

4. Para detener los servicios:

```bash
make stop
```

### Desarrollo local

#### Frontend

1. Navegar a la carpeta del frontend:

```bash
cd FrontEndTest
```

2. Instalar dependencias:

```bash
npm install
```

3. Iniciar el servidor de desarrollo:

```bash
npm start
```

#### Backend

1. Navegar a la carpeta del backend:

```bash
cd BackEndTest
```

2. Instalar dependencias:

```bash
npm install
```

3. Iniciar el servidor de desarrollo:

```bash
npm run start:dev
```

## Ejecución de pruebas

### Frontend

```bash
make test-frontend
```

o

```bash
cd FrontEndTest && npm test
```

### Backend

```bash
make test-backend
```

o

```bash
cd BackEndTest && npm test
```

## Endpoints de la API

- `POST /api/personas/saludar`: Recibe un objeto JSON con `nombre` y `apellidos` y devuelve un saludo.

Ejemplo de petición:

```json
{
  "nombre": "Juan",
  "apellidos": "Pérez"
}
```

Ejemplo de respuesta:

```json
{
  "mensaje": "Hola Juan Pérez"
}
```
