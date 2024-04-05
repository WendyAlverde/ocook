<script>
    import {link} from "svelte-spa-router"
</script>

<main>
    <h1 class="title" lang="en">Reviews</h1>
    <section class="backgroundsection">
        <article class="framerestaurants">
            <img class="restaurants" src="../public/images/restaurants/restaurant-1.webp" alt="premier restaurant" />
            <h3>Le Greppon Blanc</h3> <!--restaurant name-->
            <p>5/5</p> <!-- rating --> 
            <a href="/recipes" use:link>Voir plus</a> 
        </article>
        <article class="framerestaurants">
            <img class="restaurants" src="../public/images/restaurants/restaurant-2.webp" alt="second restaurant" />
            <h3>Les Cornettes </h3> <!--restaurant name-->
            <p>4/5</p> <!-- rating --> 
            <a href="/recipes" use:link>Voir plus</a>
        </article>
            <article class="framerestaurants">
            <img class="restaurants" src="../public/images/restaurants/restaurant-3.webp" alt="troisieme restaurant" />
            <h3>a la bonne franquette</h3> <!--restaurant name-->
            <p>2.5/5</p> <!-- rating --> 
            <a href="/reviews" use:link>Voir plus</a> 
        </article>
        <article class="framerestaurants">
            <img class="restaurants" src="../public/images/restaurants/restaurant-4.webp" alt="quatrieme restaurant" />
            <h3>Serenata </h3> <!--restaurant name-->
            <p>4/5</p> <!-- rating --> 
            <a href="/reviews" use:link>Voir plus</a>
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
</main>