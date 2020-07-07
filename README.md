# Rattrapage_TECHLOG

## Programme
1. GIT
2. NODEJS
3. DOCKER

## Utilisation
 - git clone
 - node server.js

## Docker Mongo
```
docker pull mongo
docker run --name some-mongo -p 27017:27017 -d mongo:latest
```

## Docker Dockerfile
```
cd dockerfile
docker build -t demo:1.0.0 .
docker run --name demo -p 80:80 -d demo:1.0.0
```
## Comment démarrer l'application
A la racine du dossier, exécuter la commande suivante :
docker-compose build && docker-compose up
