---
title: "Mise à jour Février 2024 - beta-0.5"
slug: update-beta-0-5
date: 07 février 2024
author: TristanTornatore.md
---

## Brief

Lukee s'est lancé le 9 janvier 2024. Nous avons décidé de rendre la version bêta publique afin de récolter un maximum de retours sur le projet. Cette première mise à jour corrige des problèmes d'affichage et tend à améliorer l'expérience utilisateur.

## Les changements majeurs :

- ### Mise en place d'une première version responsive
  Lors du développement de Lukee, nous sommes passés par plusieurs stacks différentes avant de sélectionner celle qui est actuellement en ligne. C'est volontairement que nous avons jusqu'ici concentré nos efforts sur le développement des fonctionnalités sans nous arrêter sur l'adaptabilité de la webapp. Cela a suscité de nombreuses remarques parmi les utilisateurs et à raison… Nous avons donc commencé à rendre l'interface responsive. Une bonne avancée permettant ainsi d'éditer vos publications depuis le mobile.
- ### Nouvelle fonctionnalité : La modification des publications sur lukee
  Jusqu'à aujourd'hui, Lukee générait vos publications LinkedIn et vous aviez même la possibilité de publier directement sur votre compte depuis l'app sur votre page LinkedIn. Mieux encore, vous pouvez également programmer des publications afin qu'elles se publient automatiquement ! Vous étiez néanmoins dépendant de la génération. Si une faute de syntaxe ou d'orthographe se glissait dans la publication, vous ne pouviez que copier le texte, le coller sur LinkedIn et le modifier avant de le publier par vous-même. Désormais, vous pouvez vous rendre dans votre espace “Mes publications” et, en cliquant sur le texte de votre publication, vous avez la possibilité de modifier votre contenu avant de le programmer !
- ### Mise en place d'une limitation à 10 crédits par jour.
  Et oui, vous êtes désormais plus de 180 sur Lukee. Vous n'êtes pas sans savoir que nous utilisons aujourd'hui une version de l'API d'OpenAI surboostée pour la génération des publications LinkedIn. Entre l'API et nos serveurs, nous avons des frais fixes et variables en fonction de l'utilisation de l'app et du nombre d'utilisateurs. Nous souhaitons continuer d'améliorer notre modèle et d'ajouter des fonctionnalités pour mieux vous servir, et c'est pourquoi nous ne souhaitons pas à ce jour créer de plans payants. En revanche, nous sommes contraints de limiter l'utilisation afin de nous laisser le temps pour le développement. La limite est de 10 générations de publications gratuites par jour. Votre compteur de crédits se remet à 10 tous les soirs à minuit (heure française). Nous pensons que cela vous permettra de profiter largement des bénéfices de Lukee tout en assurant la pérennité de l'outil.

## Les changements mineurs

- ### Changement de connexion à la base de données
  Début février, l'app affichait une erreur 500. Toutes nos excuses aux utilisateurs et merci de nous avoir fait remonter le problème ! Notre service de base de données a migré ses serveurs vers le service AWS. Nous avons adapté notre application aux nouvelles normes de connexion entre Lukee et la base de données. Ces nouvelles normes (IPv6) apportent plus de sécurité et de rapidité dans les échanges de data sur notre plateforme.
- ### Amélioration du tableau de bord
  Nous avons ajouté des blocs et de nouvelles informations sur votre tableau de bord qui s'affiche dès votre connexion sur le site. L'objectif est de rendre plus facile la navigation vers les différentes fonctionnalités de Lukee.
