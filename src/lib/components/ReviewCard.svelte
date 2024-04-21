<script>
    import {link} from "svelte-spa-router"
    
    // import informations tables Directus
    export let review;
    import ReviewAccordeon from "./ReviewAccordeon.svelte"
    import SvgButton from "../components/SvgButton.svelte";
    import foodCrisis from "../../assets/images/food-crisis.webp"

    // Define a constant variable to store the base URL for images
    const imageBaseUrl = import.meta.env.VITE_API_BASE_URL + 'assets/'

</script>

<article class="framerestaurants">
    <!-- Restaurant image -->
    {#if review.picture}
        <img class="restaurants" src="{imageBaseUrl + review.picture}" alt="Photo du restaurant (à dynamyser)" />
    {:else}
        <img class="restaurants" src={foodCrisis} alt="">
    {/if}

    <!-- Restaurant name -->
    <h3>{review.restaurant.name}</h3>
    <!-- Review date -->
    <p>{review.date}</p> 
    <!-- Restaurant ratin -->
    <p>{review.restaurant.rating} &#9733;</p>
    <!-- Review details -->
    <ReviewAccordeon accordeonReview={review} />
    <!-- Interactive button -->
    <SvgButton />
</article>

