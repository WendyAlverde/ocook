<script>
    import {link} from "svelte-spa-router"

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
                            <img src={apero} alt="">
                        </li>
                        <li>
                            <img src={pate} alt="">
                        </li>
                        <li>
                            <img src={restaurant1} alt="">
                        </li>
                        <li>
                            <img src={restaurant2} alt="">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- cards-->
    <section class="backgroundsection home">
        <h2 class="title">Nos recettes</h2>
        <article class="framerecipes">
            <img class="recipes" src={pate} alt="première recette" />
            <h3>Chili con carne</h3> <!--recipe title-->
            <p>Wendy Alverde</p> <!--author name-->
            <p>Plat</p> <!--category-->
            <div class="wrapper">
                <a class="button" href="/recipes" use:link>Voir plus</a>
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
        <article class="framerecipes">
            <img class="recipes" src={apero} alt="première recette" />
            <h3>Entrecôte</h3> <!--recipe title-->
            <p>Nicolas Ugé</p> <!--author name-->
            <p>Plat</p> <!--category-->
            <div class="wrapper">
                <a class="button" href="/recipes" use:link>Voir plus</a>
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
    </section>

    <section class="backgroundsection home">
        <h2 class="title">Les restaurants</h2>
        <article class="framerestaurants">
            <img class="restaurants" src={restaurant3} alt="premier restaurant" />
            <h3>Le Greppon Blanc</h3> <!--restaurant name-->
            <p>5/5</p> <!-- rating --> 
            <div class="wrapper">
                <a class="button" href="/reviews" use:link>Voir plus</a>
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
        <article class="framerecipes">
            <img class="restaurants" src={restaurant4} alt="premier restaurant" />
            <h3>Les Cornettes </h3> <!--restaurant name-->
            <p>4/5</p> <!-- rating --> 
            <div class="wrapper">
                <a class="button" href="/reviews" use:link>Voir plus</a>
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
    </section>

    <!-- Filters -->
    <section class="backgroundsection filters">
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
        <button role="button" class="filter" aria-pressed="false">
            <img class="categories" src="nom-du-ficher" alt="viande" />
            <p>Viande</p>
        </button>
        <button role="button" class="filter" aria-pressed="false">
            <img class="categories" src="nom-du-ficher" alt="végétalien" />
            <p>Végétalien</p>
        </button>
    </section>
</main>

