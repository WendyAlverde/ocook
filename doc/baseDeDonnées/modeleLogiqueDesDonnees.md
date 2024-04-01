Recipes (__code_recipes__, name, author name, category, picture, ingredients, to do list, status, #id_users)

Users (__code_users__, username, mail, password, rôle)

Restaurants (__code_restaurants__, name, adress, rating)

Reviews ( __code_reviews__, title, date, picture, review)

Categories (__code_categories__, name)

RECIPES_CATEGORIES(#id_categories, #id_recipes)

=> Nous avons **5 tables principales**, dont la table Recipes qui contient une clé étrangère vers Users.

=> Puis une table __RECIPES_CATEGORIES__ qui contient les clés étrangères et en référence aux tables en relation.
