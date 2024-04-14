<script>
    export let recipe
    import RecipeAccordeon from "./RecipeAccordeon.svelte";
    import SvgButton from "./SvgButton.svelte"
    
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

    <SvgButton />
</article>