<script>
    import {link} from "svelte-spa-router"
    export let recipe
</script>

<article class="framerecipes">
    <img class="recipes" src="{recipe.picture}" alt="première recette" />
    <h3>{recipe.name}</h3> <!--recipe title-->
    {#each recipe.users as user}
        <p>{user.first_name}</p> <!--author name-->
        {console.log(user)}
    {/each}
    {#each recipe.categories as category}
        <p>{category.Categories_id.name}</p>
    {/each}
    <div class="wrapper">
        <a class="button" href="/recipes" aria-label="Accéder à l'entièreté de la recette" use:link>Voir plus</a>
    </div>
    
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