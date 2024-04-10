<script>
    import {link} from "svelte-spa-router"

    import RecipeCard from "../components/RecipeCard.svelte";

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

        <div >
            <button class="pagination" role="button" aria-pressed="false">1</button>
            <button class="pagination" role="button" aria-pressed="false">2</button>
            <button class="pagination" role="button" aria-pressed="false">3</button>
            <button class="pagination" role="button" aria-pressed="false">4</button>
            <button class="pagination" role="button" aria-pressed="false">5</button>
            <button class="pagination" role="button" aria-pressed="false">6</button>
        </div>
        
    </section>

    <section class="backgroundsection">
        <button role="button" class="formrecipes" aria-pressed="false">Ajouter une recette ?</button>
    </section>

    <section class="backgroundsection">
        <h2 class="title">Les filtres des recettes</h2>
        <button role="button" class="filter" aria-pressed="false">
            <img class="categories" src="nom-du-ficher" alt="apéritif" />
            <p>Appéritif</p>
        </button>
        <button role="button" class="filter" aria-pressed="false">
            <img class="categories" src="nom-du-ficher" alt="entrée" />
            <p>Entrée</p>
        </button>
        <button role="button" class="filter" aria-pressed="false">
            <img class="categories" src="nom-du-ficher" alt="plat" />
            <p>Plat</p>
        </button>
        <button role="button" class="filter" aria-pressed="false">
            <img class="categories" src="nom-du-ficher" alt="dessert" />
            <p>Dessert</p>
        </button>
        <button role="button"class="filter" aria-pressed="false">
            <img class="categories" src="nom-du-ficher" alt="viande" />
            <p>Viande</p>
        </button>
        <button role="button"class="filter" aria-pressed="false">
            <img class="categories" src="nom-du-ficher" alt="végétalien" />
            <p>Végétalien</p>
        </button>     
    </section>
</main>
