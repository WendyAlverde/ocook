<script>
    import {link} from "svelte-spa-router"

    import Filter from "../components/Filter.svelte";
    import SvgButton from "../components/SvgButton.svelte";
    import RecipeCard from "../components/RecipeCard.svelte";
    import {directus} from "../../utils/directus";
    import ReviewCard from "../components/ReviewCard.svelte";

    // import pictures
    import pate from "../../assets/images/carousel/ai-genere-pates.jpg"
    import saladeGourmande from "../../assets/images/carousel/salade-gourmande-fraiche-viandes-legumes-grilles-ciabatta-generee-par-ia.jpg"
    import nouilles from "../../assets/images/carousel/nouilles-sautees-aux-legumes-crevettes-dans-bol-noir-image-generee-par-ia.jpg"
    import chocolat from "../../assets/images/carousel/gros-plan-dessert-raffine.jpg"
    
    // Recipes
    async function getRecipes() {
    // 1. call the Directus API
        // 1.1 retrieve the endpoint URL
        const endpoint = "items/Recipes?fields=*,categories.Categories_id.name,users.first_name"

        // 1.2 make an HTTP request to the endpoint
        const response = await directus(endpoint)
        
    // 2. retrieve recipes from the API response
        // 2.1 retrieve the API response and convert it into an object
        const json = await response.json()

        console.log('Recipes', json.data)

    // 3. return recipes
        return json.data
    }

    // 4. set recipes in the recipes variable
    const recipes = getRecipes()

    // Reviews
    async function getReviews() {
    // 1. call the Directus API
        // 1.1 retrieve the endpoint URL
        const endpoint = "items/Reviews?fields=*,restaurant.name,restaurant.rating"

        // 1.2 make an HTTP request to the endpoint
        const response = await directus(endpoint)
        
    // 2. retrieve reviews from the API response
        // 2.1 retrieve the API response and convert it to an object
        const json = await response.json()

        console.log(json.data)

    // 3. return reviews
        return json.data
    }

    // 4. set reviews in the reviews variable
    const reviews = getReviews()
    
    // loop Recipes
    function randomRecipes(recipes, count) {
        const shuffledRecipes = recipes.sort(() => Math.random() - 0.5); // Mixing recipes
        return shuffledRecipes.slice(0, count); // Retrieve the specified number of recipes
    }

    // loop Reviews
    function randomReviews(reviews, count) {
        const shuffledReviews = reviews.sort(() => Math.random() - 0.5); // Mixing recipes
        return shuffledReviews.slice(0, count); // Retrieve the specified number of reviews
    }
    
    // Carousel
    // async function getRecipesByCategory(category) {
    //     // Construire l'URL du endpoint avec la catégorie spécifiée
    //     const endpoint = `items/Recipes?fields=*,categories.Categories_id.name`;

    //     // Faire une requête HTTP au endpoint
    //     const response = await directus(endpoint);
        
    //     // Récupérer les recettes à partir de la réponse de l'API
    //     const json = await response.json();

    //     // Retourner les recettes
    //     return json.data;
    // }
    
    // const categories = ['Apéritif', 'Entrée', 'Plat principal', 'Dessert'];

    // // Créez un objet pour stocker les images de chaque catégorie
    // let images = {};

    // // Récupérez les recettes pour chaque catégorie et stockez les images correspondantes
    // async function fetchImages() {

    //     for (let category of categories) {
    //         const recipes = await getRecipes(category); // Récupérez les recettes de la catégorie
            
    //         // Vérifiez si recipes est défini et non vide avant de continuer
    //         if (recipes && recipes.length > 0) {
    //             // Vérifiez si la recette a une image avant de l'ajouter à l'objet images
    //             const recipeWithImage = recipes.find(recipe => recipe.picture !== null && recipe.picture !== undefined && recipe.categories); //Voir issues, toujours 4 même images
    //             const image = recipeWithImage ? recipeWithImage.picture : ''; // Si une recette avec une image est trouvée, utilisez son image, sinon utilisez une chaîne vide
    //             console.log(recipeWithImage)
    //             images[category] = image; // Stockez l'image correspondante dans l'objet images
    //         } else {
    //             // Si aucune recette n'est trouvée, définissez l'image comme une chaîne vide
    //             images[category] = '';
    //         }
    //     }
    // }

    // fetchImages();

    // const imageBaseUrl = import.meta.env.VITE_API_BASE_URL + 'assets/'
</script>


<main role="main" aria-labelledby="home-heading">
    <h1 id="home-heading">Accueil</h1>

    <!-- carousel -->
    <section class="carousel" role="region" aria-labelledby="carousel-heading">
        <h2 id="carousel-heading">Recettes de la semaine</h2>
        <div class="center">
            <div class="carousel-wrapper">
                <!-- abstract radio buttons for slides -->
                <input id="slide1" type="radio" name="controls" checked="checked" />
                <input id="slide2" type="radio" name="controls" />
                <input id="slide3" type="radio" name="controls" />
                <input id="slide4" type="radio" name="controls" />

                <!-- navigation dots -->
                <label for="slide1" class="nav-dot"></label>
                <label for="slide2" class="nav-dot"></label>
                <label for="slide3" class="nav-dot"></label>
                <label for="slide4" class="nav-dot"></label> 

                <!-- arrows -->
                <!-- &rsaquo; = › ; &lsaquo; = ‹ refers to previous and next arrows of the carousel-->
                <label for="slide1" class="left-arrow"> &lsaquo; </label>
                <label for="slide2" class="left-arrow"> &lsaquo; </label>
                <label for="slide3" class="left-arrow"> &lsaquo; </label>
                <label for="slide4" class="left-arrow"> &lsaquo; </label>

                <label for="slide1" class="right-arrow"> &rsaquo; </label>
                <label for="slide2" class="right-arrow"> &rsaquo; </label>
                <label for="slide3" class="right-arrow"> &rsaquo; </label>
                <label for="slide4" class="right-arrow"> &rsaquo; </label>

                <div class="carousel">
                        <!-- This div contains an unordered list of images for the carousel -->
                    <ul>
                        <!-- Each list item contains an image -->
                        <li>
                            <img src={pate} alt="">
                        </li>
                        <li>
                            <img src={saladeGourmande} alt="">
                        </li>
                        <li>
                            <img src={nouilles} alt="">
                        </li>
                        <li>
                            <img src={chocolat} alt="">
                        </li>
                        <!-- {#each categories as category}
                            <li>
                                <img src={imageBaseUrl + images[category]} alt="alt à dynamiser" />
                            </li>
                        {/each} -->
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- cards-->
    <section class="backgroundsection home " role="region" aria-labelledby="recipes-heading">
        <h2 id="recipes-heading">Nos recettes</h2>
        <!-- If recipes are being loaded, display a loading message -->
        {#await recipes}
            <p>Chargement des recettes...</p>
        {:then recipes}
                <!-- Iterate over a subset of random recipes and display each using a RecipeCard component -->
            {#each randomRecipes(recipes, 2) as recipe}
                <RecipeCard recipe={recipe} />
            {/each}
        {/await}
            <!-- Link to view more recipes -->
        <a href="/recipes" use:link>Voir plus de recettes</a>
    </section>

    <!-- This section displays a list of reviews -->
    <section class="backgroundsection home" role="region" aria-labelledby="reviews-heading">
        <h2 id="reviews-heading" lang="en">Reviews</h2>
        <!-- If reviews are being loaded, display a loading message -->
        {#await reviews}
            <p>Chargement des critiques de restaurants...</p>
        {:then reviews}
                <!-- Iterate over a subset of random reviews and display each using a ReviewCard component -->
            {#each randomReviews(reviews, 2) as review}
                <ReviewCard review={review} />
            {/each}
        {/await}
        <!-- Link to view more reviews -->
        <a href="/reviews" use:link>Voir plus de reviews</a>
    </section>

    <!-- This component represents a filter, likely used for filtering recipes or reviews -->

    <Filter />
</main>