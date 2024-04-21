<script>
    import {link} from "svelte-spa-router" // Importing link function from Svelte SPA Router
    export let recipe // Exporting recipe prop to be used in the component
    import RecipeAccordeon from "./RecipeAccordeon.svelte"; // Importing RecipeAccordeon component
    import SvgButton from "../components/SvgButton.svelte"; // Importing SvgButton component
    import foodCrisis from "../../assets/images/food-crisis.webp" // Importing a fallback image for recipes

    // Defining the base URL for images using environment variables
    const imageBaseUrl = import.meta.env.VITE_API_BASE_URL + 'assets/'

</script>

<article class="framerecipes" role="article" aria-labelledby="recipe-heading-{recipe.id}">
        <!-- Conditionally rendering the recipe picture if available, else using a fallback image -->
    {#if recipe.picture}
        <img class="recipes" src="{ imageBaseUrl + recipe.picture }" alt="Photo de la recette (à dynamiser)" />
    {:else}
        <img class="recipes" src={foodCrisis} alt="">
    {/if}
    <!-- else : add picture  -->
    <h3 id="recipe-heading-{recipe.id}">{recipe.name}</h3> <!--recipe title-->
    <div class="infoRecipe">
        <p>{recipe.users.first_name}</p> <!--author name-->
        {#each recipe.categories as category}
            <p>{category.Categories_id.name}</p>
        {/each}
    </div>
        <!-- Including the RecipeAccordeon component to display additional details about the recipe -->
    <RecipeAccordeon accordeon={recipe} />
    <!-- Including the SvgButton component for additional functionality -->
    <SvgButton />
</article>