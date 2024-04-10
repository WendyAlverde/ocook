<script>
    import {link} from "svelte-spa-router"
    export let recipe

    const imageBaseUrl = import.meta.env.VITE_API_BASE_URL + 'assets/'
</script>

<article class="framerecipes">
    <img class="recipes" src="{imageBaseUrl + recipe.picture }" alt="Photo recette à dynamiser" />
    <h3>{recipe.name}</h3> <!--recipe title-->
    {#each recipe.users as user}
        <p>{user.first_name}</p> <!--author name-->
        {console.log(user)}
    {/each}
    {#each recipe.categories as category}
        <p>{category.Categories_id.name}</p>
    {/each}
    <div class="accordion-item wrapper" id="recette">
        <a class="button accordion-link" aria-label="Accéder à l'entièreté de la recette" href="#recette" use:link>
            Voir plus
        </a>
        <div class="answer">
            <div class="headerRecipeAccordion">
                <div class="recipename">
                    <p>Nom de la recette</p> 
                </div> <!--left-->
                <div class="authorname">
                    <p>nom de l'auteur</p>
                </div> <!--right-->
            </div>
            <img class="imgRecipeAccordion" src="../public/images/foods/apero.webp" alt="">
            <div class="footerRecipeAccordion">
                <div class="ingredientsList">
                    <p>Liste des ingrédients</p>
                </div>
                <div class="todoList">
                    <p>Etapes de la recette</p>
                </div>
                <button id="closeBtnAccordion" role="button" type="button" aria-label="Fermer la recette">Fermer</button>
            </div>
        </div>
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