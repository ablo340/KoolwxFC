# KoolwxFC

## Introduction
J’ai été coach dans quelques clubs de foot en Belgique tel que Union Saint Gilloise et le Stade Everois. J’ai pu remarquer une difficulté concernant la gestion en général, que ce soit au niveau des équipes, des joueurs, des coachs, des payements etc…, ceux souvent gérer dans un cahier ou au mieux dans un fichier Excel.

## Projet
J’ai donc eu l’idée de concevoir une application web progressive (client-serveur) pour digitaliser toutes cette gestion. L'idée est d'avoir des gestionnaires du club, les joueurs et les coachs auront donc un compte avec des accès différents pour leurs diffirentes tâches.
* Les coachs eux pourront voir leur(s) équipe(s) et leurs joueurs.
* Les joueurs pourront voir leur équipe et leur coach
* Les gestionnaires auront accès à tout. Ils pourront donc voir les différentes équipes avec leur coach, les joueurs inscrits.

A terme, le but serait de rajouter des fonctionnalités comme les jours d’entrainements, les matchs, l’aspect financier (le payement de la cotisation des joueurs, les payements des coachs etc…), les sélections des coachs, les joueurs pourront rajouter leurs photos (comme sur instagram), etc…

## Architecture du projet
Le projet suit l'architecture client-server. Le client a été fait avec le framework front-end reactJs et le coté server a été fait avec une architecture service notamment l'api RESTfull fait avec nodeJs qui utilise l'ORM Sequelize pour interagire avec la base de donnée. Sqlite est utilisé pour la base de donnée pour l'instant vu le petit nombre de donnée qu'on aura pour cet version beta.
Le projet est donc contitué de deux dossier : api qui gère la parie server et app_kfc pour la partie front-end.

## Installation
> git clone ***lien du dépot***
> cd KoolwxFC

### Installation de la partie front-end
> cd app_kfc
> npm install

### Installation de la partie server
> cd api
> npm install

## Tests

### Tests de la partie front-end
Pour la partie front-end, les tests se trouvent dans le sous-dossier __tests__ du dossier ***src***. Ces tests utilisent la librairie intégré de reactJs.

#### Lancer les tests
> cd app_kfc
> npm test

### Tests de la partie server
Pour la partie server, les tests se trouvent dans le sous-dossier ***tests*** du dossier ***src***. Ces tests utilisent le declenchers de test **mocha** et la librairie **chai**.

#### Lancer les tests
> cd api
> npm test 