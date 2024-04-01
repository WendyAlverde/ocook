# Les commandes git à faire sur le terminal

## Création de repository

Créer un new repository sur GitHub, toutes les commandes sont données par GitHub
- **git init** = initialiser le repository
- **git status** = voir l'état de notre repos (commande expliquée plus en détails au-dessus)
- **git add nom-du-fichier** = Sauvegarder le(s) fichier(s) dans le nouveau repos
- **git commit -m "nom du commit"** :
- **git branch -M main** = Renommer la branche courante sur laquelle on se trouve (Par convention de GitHub maintenant c'est main)
- **git remote add origin lienssh** = quel est le repository distant qui va être lié à ce repo local. Exemple lien ssh : git@github.com:NomGitHub/NomDuRepos.git
- **git push -u origin main** = On pousse se qu'on a en local sur GitHub

## Autres commandes souvent utilisées

**git status** = Voir le statut des fichiers :

- Rouge = Changements qui ne seront pas pris en compte pour le commit si on ne les ajoute pas (git add)
- Vert = Prêt à être livrer avec le commit

**git add .** = Sauvegarder les fichiers. "." pour lui dire de prendre tout se qu'il y a dans le dossier courant. On peut aussi ajouter un seul fichier en faisant **git add nomFichier**

**git commit -m "Nom du commit"** = Validation des enregistrements des modifications

**git push** = pousser le projet sur GitHub

**git checkout -b nom-branche** = Créer une nouvelle branche et switch sur celle-ci (checkout = switcher entre les branches / -b = créer)

**git branch -a** = Voir toutes les branches
  - Vert : branche locale sur laquelle on se trouve
  - Blanche : branche locale
  - Rouge : branche distante

**git push -u origin nom-branche** = Lorsqu'on pousse pour la première fois la branche

**git diff** = Voir les modifications dans le terminal de tous les fichiers ou d'un seul en nommant après la commande le nom du fichier (**git diff nomFichier**)

**git log** = voir tout les commit

**git pull** = on récupère le projet modifié ailleurs qu'en local

## Les fusions

Pour notre projet on fera **des pull request (PR)**

Dans le terminal :
- Se placer sur la branche qu'on veut merge
- git push origin le-nom-de-la-branche-actuelle
- Sur GitHub on créer la Pull Request

> [!IMPORTANT]
> On laisse les autres membres du team vérifier le code et merge (on oubli pas de changer le nom du commit selon les conventions de nommage)

*J'ai pris les infos sur les cours O'clock, sur GitHUb et sur la chaîne "Bande de Codeurs" sur Youtube (il a fait deux, très bonnes vidéos explicatives)*
