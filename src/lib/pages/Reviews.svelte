<script>
    import {directus} from "../../utils/directus";

    import ReviewCard from "../components/ReviewCard.svelte";
    import Pagination from "../components/Pagination.svelte";
    
    // Reviews
    async function getReviews() {
        // 1. Call the Directus API
        // 1.1 Get the endpoint URL
        const endpoint = "items/Reviews?fields=*,restaurant.name,restaurant.rating"

        // 1.2 Make an HTTP request to the endpoint
        const response = await directus(endpoint)
        
        // 2. Get the reviews from the API response
        // 2.1 Get the API response and parse it into an object
        const json = await response.json()

        // console.log(json.data)

        // 3. Return the reviews
        return json.data
    }

        // 4. Store the reviews in the 'reviews' variable
        const reviews = getReviews()  

</script>

<main role="main">
    <!-- Main section for displaying restaurant reviews -->
    <h1>Avis</h1>
    <p class="intro">Ici, vous trouverez mes avis détaillées des restaurants que j'ai eu le plaisir de visiter, vous invitant à découvrir de nouveaux horizons culinaires à travers mes expériences.</p>
    <section class="backgroundsection">
    <!-- Display loading message while reviews are being fetched -->
        {#await reviews}
            <p>Chargement des critiques de restaurants...</p>
        {:then reviews}
    <!-- Iterate over each review to display -->
            {#each reviews as review}
                <ReviewCard review={review} />
            {/each}
        {/await}

        <!-- Pagination component for navigating between pages of reviews -->
        <Pagination aria-label="Pagination"/>
    </section>
</main>
