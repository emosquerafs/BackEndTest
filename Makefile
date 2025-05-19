.PHONY: build run run-dev stop clean test

# Variables
PROJECT_NAME=microservicio-personas

# Comandos para el proyecto completo
build:
	docker-compose build

run:
	docker-compose up -d

run-dev:
	docker-compose -f docker-compose.dev.yml up -d

stop:
	docker-compose down

clean:
	docker-compose down --rmi all --volumes --remove-orphans

# Comandos para el frontend
build-frontend:
	docker-compose build frontend

run-frontend:
	docker-compose up -d frontend

test-frontend:
	cd FrontEndTest && npm test

# Comandos para el backend
build-backend:
	docker-compose build backend

run-backend:
	docker-compose up -d backend

test-backend:
	cd BackEndTest && npm test
