<script>
    import {link} from "svelte-spa-router"

    import Pagination from "../components/Pagination.svelte";
    import ReviewCard from "../components/ReviewCard.svelte";
    
    // Reviews
    async function getReviews() {
    // 1. appeler l'API de Directus
        // 1.1 récupérer l'URL du endpoint
        const endpoint = import.meta.env.VITE_API_BASE_URL + "items/Reviews?fields=*,restaurant.name,restaurant.rating"

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
    const reviews = getReviews()  

</script>

<main>
    <h1 class="title" lang="en">Reviews</h1>
    <section class="backgroundsection">
        {#await reviews}
            <p>Chargement des critiques de restaurants...</p>
        {:then reviews}
            {#each reviews as review}
                <ReviewCard review={review} />
            {/each}
        {/await}

        <Pagination />
    </section>
</main>