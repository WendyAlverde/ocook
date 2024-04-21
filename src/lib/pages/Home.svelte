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

<style lang="scss">
.backgroundsection.home {
    display: flex;
    flex-direction: column;
    align-items: center;
}
    /** ==== Start Carousel ==== **/
$nb-slides: 4;

.center {
    display: flex;
    align-items: center; // horizontal
    justify-content: center; // vertical
}

.carousel-wrapper {
    display: flex;
    position: relative;
    max-width: 37rem;
    margin: 3.1rem;

    input {
        display: none;
    }
}

// carousel
.carousel {
    overflow: hidden;
    border-radius: 0.9rem;

    ul {
        @extend .center;
        position: relative;
        list-style: none;
        overflow: hidden;
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100% * $nb-slides;
        transition: left .8s cubic-bezier(0.77, 0, 0.175, 1);
    }

    li {
        width: 100%;

        img {
            width: 100%;
            height: 25rem;
            object-fit: cover;
        }
    }
}

// navigation dots
.nav-dot {
    $dot-size: 0.9rem;
    position: absolute;
    cursor: pointer;
    margin-left: -$dot-size / 2;
    bottom: -$dot-size * 1.5;
    width: $dot-size;
    height: $dot-size;
    opacity: .6;
    background-color: var(--red);
    border-radius: 50%;
    transition: .4s;

    &:hover {
        opacity: .8;
        transform: scale(1.2);
    }

    &:active {
        transform: scale(0.9);
    }
}

// goes from 1 to 5.
@for $n from 1 through $nb-slides {

    // arranges the navigation dots horizontally
    .nav-dot[for=slide#{$n}] {
        left: calc(50% + ((#{$n} - 1) - ((#{$nb-slides} - 1) / 2)) * 40px);
    }

    #slide#{$n}:checked {

        // moves the carousel to the right slide
        &~.carousel ul {
            left: -100% * ($n - 1)
        }

        // highlights the selected navigation dot
        &~.nav-dot[for=slide#{$n}] {
            opacity: 1;
        }
    }
}

// ARROWS
%arrow {
    $arrow-size: 4rem;
    display: none; // hidden by default / if commented : Arrows can be seen better but no longer work
    position: absolute;
    cursor: pointer;
    font-weight: bolder;
    text-shadow: 0 0 0.4rem rgba($color: rgb(255, 255, 255), $alpha: 1);
    top: 50%;
    z-index: 1;
    margin-top: -$arrow-size / 2;
    height: $arrow-size;
    font-size: $arrow-size;
    transition: .2s;

    &:hover {
        opacity: 1;
        transform: scale(1.5);
    }

    &:active {
        transform: scale(1.1);
    }
}

.left-arrow {
    @extend %arrow;
    left: 0.938rem;
}

.right-arrow {
    @extend %arrow;
    right: 0.938rem;
}

@function custom-modulo($n) {
    // this function returns '$n % $nb-slides', except that if the result is 0,
    // '$nb-slides' is returned.
    // for exemple, for $nb-slides = 4, possible values are {1, 2, 3, 4}
    // (and not {0, 1, 2, 3}).
    @return 1+($nb-slides + (($n - 1) % $nb-slides)) % $nb-slides;
}

@for $n from 1 through $nb-slides {

    // when the nth slide is selected,
    // displays the left-arrow that goes to the (n-1)th slide
    // and the right arrow that goes to the (n+1)th slide.
    // don't worry, it loops thanks to the 'custom-modulo' function !
    #slide#{$n}:checked {

        &~.left-arrow[for=slide#{custom-modulo($n - 1)}],
        &~.right-arrow[for=slide#{custom-modulo($n + 1)}] {
            display: block;
        }
    }
}
/** ===== End Carousel ==== **/
</style>