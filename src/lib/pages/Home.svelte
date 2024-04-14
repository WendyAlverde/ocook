<script>
    import {link} from "svelte-spa-router"

    import Filter from "../components/Filter.svelte"
    import SvgButton from "../components/SvgButton.svelte"

    import apero from "../../assets/images/temporaire/apero.webp"
    import pate from "../../assets/images/temporaire/pates.webp"
    import restaurant1 from "../../assets/images/temporaire/restaurant-1.webp"
    import restaurant2 from "../../assets/images/temporaire/restaurant-2.webp"
    import restaurant3 from "../../assets/images/temporaire/restaurant-3.webp"
    import restaurant4 from "../../assets/images/temporaire/restaurant-4.webp"

</script>

<main role="main">
    <h1>Accueil</h1>

    <!-- carousel -->
    <section class="carousel">
        <h2>Recettes de la semaine</h2>
        <div class="center">
            <div class="carousel-wrapper">
                <!-- abstract radio buttons for slides -->
                <input id="slide1" type="radio" name="controls" checked="checked" />
                <input id="slide2" type="radio" name="controls" />
                <input id="slide3" type="radio" name="controls" />
                <input id="slide4" type="radio" name="controls" />

                <!-- navigation dots -->
                <label for="slide1" class="nav-dot"></label>
                <label for="slide2" class="nav-dot"></label>
                <label for="slide3" class="nav-dot"></label>
                <label for="slide4" class="nav-dot"></label> 

                <!-- arrows -->
                <!-- &rsaquo; = › ; &lsaquo; = ‹ refers to previous and next arrows of the carousel-->
                <label for="slide1" class="left-arrow"> &lsaquo; </label>
                <label for="slide2" class="left-arrow"> &lsaquo; </label>
                <label for="slide3" class="left-arrow"> &lsaquo; </label>
                <label for="slide4" class="left-arrow"> &lsaquo; </label>

                <label for="slide1" class="right-arrow"> &rsaquo; </label>
                <label for="slide2" class="right-arrow"> &rsaquo; </label>
                <label for="slide3" class="right-arrow"> &rsaquo; </label>
                <label for="slide4" class="right-arrow"> &rsaquo; </label>

                <div class="carousel">
                    <ul>
                        <li>
                            <img src={apero} alt="Photo de l'apéro (à dynamiser)">
                        </li>
                        <li>
                            <img src={pate} alt="Photo de l'entrée (à dynamiser)">
                        </li>
                        <li>
                            <img src={restaurant1} alt="Photo du plat (à dynamiser)">
                        </li>
                        <li>
                            <img src={restaurant2} alt="Photo du dessert (à dynamiser)">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- cards-->
    <section class="backgroundsection home">
        <h2>Nos recettes</h2>
        <article class="framerecipes">
            <img class="recipes" src={pate} alt="Photo de la recette (à dynamiser)" />
            <h3>Chili con carne</h3> <!--recipe title-->
            <p>Wendy Alverde</p> <!--author name-->
            <p>Plat</p> <!--category-->
            <div class="wrapper">
                <a class="button" href="/recipes" use:link>Voir plus</a>
            </div>
            <SvgButton />
        </article>
        <article class="framerecipes">
            <img class="recipes" src={apero} alt="Photo de la recette (à dynamiser)" />
            <h3>Entrecôte</h3> <!--recipe title-->
            <p>Nicolas Ugé</p> <!--author name-->
            <p>Plat</p> <!--category-->
            <div class="wrapper">
                <a class="button" role="button" href="/recipes" use:link>Voir plus</a>
            </div> 
            <SvgButton />
        </article>
    </section>

    <section class="backgroundsection home">
        <h2>Les restaurants</h2>
        <article class="framerestaurants">
            <img class="restaurants" src={restaurant3} alt="Photo du restaurant (à dynamiser)" />
            <h3>Le Greppon Blanc</h3> <!--restaurant name-->
            <p>5/5</p> <!-- rating --> 
            <div class="wrapper">
                <a class="button" href="/reviews" use:link>Voir plus</a>
            </div>
            <SvgButton />
        </article>
        <article class="framerecipes">
            <img class="restaurants" src={restaurant4} alt="Photo du restaurant (à dynamiser)" />
            <h3>Les Cornettes </h3> <!--restaurant name-->
            <p>4/5</p> <!-- rating --> 
            <div class="wrapper">
                <a class="button" href="/reviews" use:link>Voir plus</a>
            </div>
            <SvgButton />
        </article>
    </section>

    <!-- Filters -->
    <Filter />
</main>

