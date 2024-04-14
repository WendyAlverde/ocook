<script>    
    export let review;
    import ReviewAccordeon from "./ReviewAccordeon.svelte"
    import SvgButton from "./SvgButton.svelte"

    const imageBaseUrl = import.meta.env.VITE_API_BASE_URL + 'assets/'
    
</script>

<article class="framerestaurants">
    {#if review.picture}
        <img class="restaurants" src="{imageBaseUrl + review.picture}" alt="Photo du restaurant (à dynamiser)" />
    {/if}
    <h3>{review.restaurant.name}</h3>
    <p>{review.restaurant.rating}</p>

    <ReviewAccordeon accordeonReview={review} />

    <SvgButton />
</article>