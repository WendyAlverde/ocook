<script>
    import {link} from "svelte-spa-router"
    
    // import informations tables Directus
    export let review;

    const imageBaseUrl = import.meta.env.VITE_API_BASE_URL + 'assets/'
    
    console.log(review)
</script>

<article class="framerestaurants">
    {#if review.picture}
        <img class="restaurants" src="{imageBaseUrl + review.picture}" alt="premier restaurant" />
    {/if}
    <h3>{review.restaurant.name}</h3>
    <p>{review.restaurant.rating}</p>

    <a class="button" href="/reviews" aria-label="Accéder à l'entièreté de la critique" use:link>Voir plus</a> <!---->

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