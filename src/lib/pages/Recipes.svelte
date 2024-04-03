<script>
    import {link} from "svelte-spa-router"
</script>

<main>
    <h2>Recettes</h2>

    <section class="backgroundsection">
        <article class="framerecipes">
            <img class="recipes" src="nom-du-ficher" alt="première recette" />
            <h3>Chili con carne</h3> <!--recipe title-->
            <p>Wendy Alverde</p> <!--author name-->
            <p>Plat</p> <!--category-->
            <a href="/recipes" use:link>Voir plus</a>
        </article>
        <article class="framerecipes">
            <img class="recipes" src="nom-du-ficher" alt="première recette" />
            <h3>Entrecôte</h3> <!--recipe title-->
            <p>Nicolas Ugé</p> <!--author name-->
            <p>Plat</p> <!--category-->
            <a href="/recipes" use:link>Voir plus</a>
        </article>
        <article class="framerecipes">
            <img class="recipes" src="nom-du-ficher" alt="première recette" />
            <h3>Chili con carne</h3> <!--recipe title-->
            <p>Wendy Alverde</p> <!--author name-->
            <p>Plat</p> <!--category-->
            <a href="/recipes" use:link>Voir plus</a>
        </article>
        <article class="framerecipes">
            <img class="recipes" src="nom-du-ficher" alt="première recette" />
            <h3>Entrecôte</h3> <!--recipe title-->
            <p>Nicolas Ugé</p> <!--author name-->
            <p>Plat</p> <!--category-->
            <a href="/recipes" use:link>Voir plus</a>
        </article>

        <div class="recipes-pagination">
            <button role="button" aria-pressed="false">1</button>
            <button role="button" aria-pressed="false">2</button>
            <button role="button" aria-pressed="false">3</button>
            <button role="button" aria-pressed="false">4</button>
            <button role="button" aria-pressed="false">5</button>
            <button role="button" aria-pressed="false">6</button>
        </div>

    </section>

    <section class="backgroundsection">
        <button role="button" aria-pressed="false">Ajouter une recette ?</button>
    </section>

    <section class="backgroundsection">
        <h2 class="title">Les filtres des recettes</h2>
        <button role="button" aria-pressed="false">
            <img class="categories" src="nom-du-ficher" alt="apéritif" />
            <p>Appéritif</p>
        </button>
        <button role="button" aria-pressed="false">
            <img class="categories" src="nom-du-ficher" alt="entrée" />
            <p>Entrée</p>
        </button>
        <button role="button" aria-pressed="false">
            <img class="categories" src="nom-du-ficher" alt="plat" />
            <p>Plat</p>
        </button>
        <button role="button" aria-pressed="false">
            <img class="categories" src="nom-du-ficher" alt="dessert" />
            <p>Dessert</p>
        </button>
        <button role="button" aria-pressed="false">
            <img class="categories" src="nom-du-ficher" alt="viande" />
            <p>Viande</p>
        </button>
        <button role="button" aria-pressed="false">
            <img class="categories" src="nom-du-ficher" alt="végétalien" />
            <p>Végétalien</p>
        </button>     
    </section>

</main>