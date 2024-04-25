# O'cook

Le site O’Cook est un blog tenu par Alice Ocklecook. Il propose un recueil exhaustif de recettes, ainsi que des reviews de restaurants visités par la propriétaire du blog. Les recettes compilées sur le site seront ajoutées par son propriétaire, et les utilisateurs connectés pourront eux aussi contribuer à l’ajout d’une ou plusieurs recettes. Ce site est une commande d’une passionnée de gastronomie, voulant partager à d’autres passionnés ses expériences culinaires, à travers ses propres recettes et ses visites d’établissements.

## Marche à suivre

### Première fois sur le projet

- Cloner le repo ocook
- Ouvrir le repo dans VSC
- Puis faire la commande : ```npm install``` pour l'installation de Svelte

## Directus

### Installer Node.js

- Se mettre dans un dossier en dehors de notre repository

Voir quel version nous avons de Node.js
- ```nvm --version```

Pour installer Node.js
- ```curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash```
Si on a un problème de paquet déjà présent, on peut régler le problème avec la commande
- ```rm ~/.npmrc```

Vérifier que le dossier npm-packages existe
- ```mkdir ~/.npm-packages```

Fermer et ouvrir le terminal

Réessayer la commande pour vérifier que NVM soit installer
- ```nvm --version```

## Installer Node.js LTS

Installer dernièere version LTS
- ```nvm install --lts```

Vérifier la version
- ```node --version```

### Installer Directus

Si on souhaite utiliser une base de données MySQL / MariaDB ou PostgreSQL il faut la créer avant l'initialisation de Directus.
Sinon on choisi une base de données SQLite et pas de paramétrage à faire.

En dehors de notre repository, on crée on dossier pour directus
- ```mkdir directus```

On va dans le nouveau dossier
- ```cd directus```

Installer Directus
- ```npm install directus```

Configurer l'environnement Directus
- ```npx directus init```

Le terminal nous guide pour choisir notre base (choix avec les flèches directives puis entrée)

Il nous montre la route de notre dossier, le choix de l'email et le mot de passe. Pour passer à la suite il faut faire la touche entrée

Faire les deux commandes données par le terminal
- ```cd /var/www/html/CV/bddOcook```
- ```npx directus start```

![image](https://github.com/WendyAlverde/tips-WendyAlverde/assets/148342924/13964b9b-8cfd-4c87-a78e-14ae576b5654)

### Réouverture Directus
Si on a ce genre de problème :

![image](https://github.com/WendyAlverde/tips-WendyAlverde/assets/148342924/1cc48e34-66cf-400a-a44d-bd743137bf9f)

- ```npm rebuild```

### Après l'installation de Directus

- Placer le fichier .env et y mettre la route directus comme indiqué dans le .env.example sur la même racine que ce dernier

### Travailler sur ocook

- On va sur la branche dev : ```git checkout dev```
- On fait un ```git pull``` pour récupérer le travail de la branche
- On créer une branche de la nouvelle fonctionnalité : ```git checkout -b nom-de-la-fonctionnalite```
- Dans le dossier Directus (en dehors du repo) on lance la commande ```npx directus start```
- On lancer la commande ```npm run dev``` à partir du repo
- Quand on push la branche on fait un ```git push origin nom-de-la-branche```
- Si la fonctionnalité fonctionne on fait une Pull-Request sur GitHub

### Pull Request

- On fait une Pull Request seulement lorsque toutes les fonctionnalitées de notre branche **fonctionne**
- Lorsqu'on fait la Pull Request on pense à vérifier où on veut merge donc dans **dev**
  - Dans la Pull-Request on met une description de se qui a été fait
- On laisse merge le Référent Git

## Les conventions de nommage

- On nomme les **dossiers** en minuscule et on évite les acronymes
- On nomme les **fichiers** en camel case => conventionDeNommage
- On nomme les **commits** en anglais et en kebab case => convention-de-nommage
- On écrit les **commentaires** de code en anglais
- On écrit les descriptions des Pull Request clairement en français
