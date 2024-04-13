<script>
    import {link} from "svelte-spa-router"

    import Filter from "../components/Filter.svelte";
    import RecipeCard from "../components/RecipeCard.svelte";
    import Pagination from "../components/Pagination.svelte";

    async function getRecipes() {
    // 1. appeler l'API de Directus
        // 1.1 récupérer l'URL du endpoint
        const endpoint = import.meta.env.VITE_API_BASE_URL + "items/Recipes?fields=*,categories.Categories_id.name,users.first_name"

        // 1.2 faire une requête HTTP au endpoint
        const response = await fetch(endpoint)
        
    // 2. récupérer les recettes à partir de la réponse de l'API
        // 2.1 récupérer la réponse de l'API et la convertir en objet
        const json = await response.json()

        console.log(json.data)

    // 3. retourner les recettes
        return json.data
    }

    // 4. mettre les recettes dans la variable recipes
    const recipes = getRecipes()

</script>

<main>
    <h1 class="title">Recettes</h1>

    <section class="backgroundsection">
        {#await recipes}
            <p>Chargement des recettes...</p>
        {:then recipes}
            {#each recipes as recipe}
                <RecipeCard recipe={recipe} />
            {/each}
        {/await}

        <Pagination />
        
    </section>

    <section class="backgroundsection">
        <button role="button" class="formrecipes" aria-pressed="false" aria-label="Ajouter une recette">Ajouter une recette ?</button>
    </section>

    <Filter />
</main>
