Table Recipes :

| Nom de la colonne | Type               | Longueur |
| ----------------- | ------------------ | -------- |
| code_recipes      | INT,AUTO_INCREMENT |          |
| name              | varchar            | 255      |
| category          | varchar            | 30       |
| photo             | varchar            | 255      |
| ingredients       | text               |          |
| todolist          | text               |          |
| tag               | varchar            | 255      |

Table Categories :

| Nom de la colonne | Type               | Longueur |
| ----------------- | ------------------ | -------- |
| code_categories   | INT,AUTO_INCREMENT |          |
| name              | varchar            | 30       |

Table Users :

| Nom de la colonne | Type    | Longueur |
| ----------------- | ------------------ | -------- |
| code_users        | INT,AUTO_INCREMENT |          |
| username          | varchar            | 255      |
| mail              | varchar            | 128      |
| password          | varchar            | 60       |
| #code_recipes     | INT,AUTO_INCREMENT |          |

Table Reviews :

| Nom de la colonne | Type               | Longueur |
| ----------------- | ------------------ | -------- |
| code-reviews      | INT,AUTO_INCREMENT |          |
| title             | varchar            | 255      |
| date              | date               |     -    |
| photo             | varchar            | 255      |
| review            | text               |     -    |
| created-at        | timestamp          |          |
| updated-at        | timestamp          |          |

Table Restaurants :

| Nom de la colonne | Type               | Longueur |
| ----------------- | ------------------ | -------- |
| code_restaurants  | INT,AUTO_INCREMENT |          |
| name              | varchar            | 255      |
| adress            | varchar            | 255      |
| ranking           | tinyint            | 1        |

Recipes_categories :

| Nom de la colonne | Type               | Longueur |
| ----------------- | ------------------ | -------- |
| #code_categories  | INT,AUTO_INCREMENT |          |
| #code_recipes     | INT,AUTO_INCREMENT |          |
