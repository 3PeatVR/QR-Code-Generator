# QR Generator

![Screenshot de la page](figures/Screenshot_01-nov._13-49-01_2854.png)

[English Version Below]

## Description du projet

Ce projet était l'occasion pour moi de prendre mes marques avec React.

Il s'agit d'un générateur de QR code d'URL en temps réel, où l'on peut modifier la forme du code et la couleur du code et des indicateurs.

## Technologies utilisées

Le front du site est fait en HTML/CSS et utilise le framework ReactJS. L'application peut être conteneurisée par Docker grâce au Dockerfile. Le QR Code est généré grâce à [react-qrcode-logo-npm](https://www.npmjs.com/package/react-qrcode-logo).

## Déploiement du site

On peut déployer le site sur sa machine en faisant ```npm install``` pour installer les dépendances et ```npm start``` pour lancer l'application.
Pour lancer l'application sur Docker, il faut faire ```docker build . -t <nom qu'on veut donner au container>:<version qu'on veut donner au container>``` puis ```docker run -p 8080:3000 <nom du container>```. Dans les 2 méthodes, on se connecte sur le site à l'adresse <https://localhost:8080> .
***

## English Version

## Project description

This project was the occasion for me to have a hands-on experience with React.

This is a real-time URL QR code generator, where you can change the shape of the code and the color of the code and indicators.

## Technologies used

The front end of the site is built with HTML/CSS and uses the ReactJS framework. The application can be containerized with Docker using the Dockerfile. The QR code is generated using [react-qrcode-logo-npm](https://www.npmjs.com/package/react-qrcode-logo).

## Deploying the site

You can deploy the site on your machine by running ```npm install``` to install the dependencies and ```npm start``` to launch the application.
To launch the application on Docker, run ```docker build . -t <name you want to give the container>:<version you want to give the container>``` then ```docker run -p 8080:3000 <container name>``` . In both methods, connect to the site at <https://localhost:8080> .
