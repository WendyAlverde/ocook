<script>
    export let recipe
    import RecipeAccordeon from "./RecipeAccordeon.svelte";

    const imageBaseUrl = import.meta.env.VITE_API_BASE_URL + 'assets/'

</script>

<article class="framerecipes">
    {#if recipe.picture}
        <img class="recipes" src="{ imageBaseUrl + recipe.picture }" alt="Photo de la recette (à dynamiser)" />
    {/if}
    <!-- else : add picture  -->
    <h3>{recipe.name}</h3> <!--recipe title-->
    <p>{recipe.users.first_name}</p> <!--author name-->
    {#each recipe.categories as category}
        <p>{category.Categories_id.name}</p>
    {/each}

    <RecipeAccordeon accordeon={recipe} />

    <!-- Filter: https://css-tricks.com/gooey-effect/ -->
    <svg style="visibility: hidden; position: absolute;" width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
            <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />    
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
            </filter>
        </defs>
    </svg>
</article>