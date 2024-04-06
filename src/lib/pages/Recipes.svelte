<script>
    import {link} from "svelte-spa-router"
</script>

<main>
    <h1>Recettes</h1>

    <section class="backgroundsection">
        <article class="framerecipes">
            <img class="recipes" src="../public/images/foods/apero.webp" alt="première recette" />
            <h3>Chili con carne</h3> <!--recipe title-->
            <p>Wendy Alverde</p> <!--author name-->
            <p>Plat</p> <!--category-->
            <a href="/recipes" use:link>Voir plus</a>
        </article>
        <article class="framerecipes">
            <img class="recipes" src="../public/images/foods/apero.webp" alt="première recette" />
            <h3>Entrecôte</h3> <!--recipe title-->
            <p>Nicolas Ugé</p> <!--author name-->
            <p>Plat</p> <!--category-->
            <a href="/recipes" use:link>Voir plus</a>
        </article>
        <article class="framerecipes">
            <img class="recipes" src="../public/images/foods/pates.webp" alt="première recette" />
            <h3>Chili con carne</h3> <!--recipe title-->
            <p>Wendy Alverde</p> <!--author name-->
            <p>Plat</p> <!--category-->
            <a href="/recipes" use:link>Voir plus</a>
        </article>
        <article class="framerecipes">
            <img class="recipes" src="../public/images/foods/tarte.webp" alt="première recette" />
            <h3>Entrecôte</h3> <!--recipe title-->
            <p>Nicolas Ugé</p> <!--author name-->
            <p>Plat</p> <!--category-->
            <a href="/recipes" use:link>Voir plus</a>
        </article>

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


