<script>
    import {link} from "svelte-spa-router"
</script>

<main>

    <section class="backgroundsection">
        <h2 class="title" lang="en">Reviews</h2>
        <article class="framerestaurants">
            <img class="restaurants" src="nom-du-ficher" alt="premier restaurant" />
            <h3>Le Greppon Blanc</h3> <!--restaurant name-->
            <p>5/5</p> <!-- rating --> 
            <a href="/recipes" use:link>Voir plus</a> 
        </article>
        <article class="framerecipes">
            <img class="restaurants" src="nom-du-ficher" alt="second restaurant" />
            <h3>Les Cornettes </h3> <!--restaurant name-->
            <p>4/5</p> <!-- rating --> 
            <a href="/recipes" use:link>Voir plus</a>
        </article>
            <article class="framerestaurants">
            <img class="restaurants" src="nom-du-ficher" alt="troisieme restaurant" />
            <h3>a la bonne franquette</h3> <!--restaurant name-->
            <p>2.5/5</p> <!-- rating --> 
            <a href="/recipes" use:link>Voir plus</a> 
        </article>
        <article class="framerecipes">
            <img class="restaurants" src="nom-du-ficher" alt="quatrieme restaurant" />
            <h3>Serenata </h3> <!--restaurant name-->
            <p>4/5</p> <!-- rating --> 
            <a href="/recipes" use:link>Voir plus</a>
        </article>
        <div>
            <button role="button" aria-pressed="false">1</button>
            <button role="button" aria-pressed="false">2</button>
            <button role="button" aria-pressed="false">3</button>
            <button role="button" aria-pressed="false">4</button>
            <button role="button" aria-pressed="false">5</button>
            <button role="button" aria-pressed="false">6</button>
        </div>
    </section>
</main>