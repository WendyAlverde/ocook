<script>
    // Import images for recipe filters
    import imageApero from "../../../src/assets/images/logos/filters/martini-glass-citrus-solid.svg"
    import imageEntree from "../../../src/assets/images/logos/filters/bowl-rice-solid.svg"
    import imagePlat from "../../../src/assets/images/logos/filters/utensils-solid.svg"
    import imageDessert from "../../../src/assets/images/logos/filters/ice-cream-solid.svg"
    import imageViande from "../../../src/assets/images/logos/filters/drumstick-bite-solid.svg"
    import imageVegetalien from "../../../src/assets/images/logos/filters/carrot-solid.svg"
</script>

<section class="backgroundsection">
    <!-- Recipes filters -->
    <h2>Les filtres des recettes</h2>
    <!-- Recipe filters navigation -->
    <div class="sixFilters" aria-label="Filtres des recettes">
        <!-- Button for 'Appetizer' filter -->

        <button role="button" class="filter" aria-pressed="false" aria-label="Filtre apéritif">
            <img class="categories" src={imageApero} alt="apéritif" aria-hidden="true"/>
            <p class="filter-name">Apéritif</p>
        </button>
        <!-- Button for 'Starter' filter -->
        <button role="button" class="filter" aria-pressed="false" aria-label="Filtre entrée">
            <img class="categories" src={imageEntree} alt="entrée" aria-hidden="true"/>
            <p class="filter-name">Entrée</p>
        </button>
        <!-- Button for 'Main Course' filter -->
        <button role="button" class="filter" aria-pressed="false" aria-label="Filtre plat">
            <img class="categories" src={imagePlat} alt="plat" aria-hidden="true"/>
            <p class="filter-name">Plat</p>
        </button>
        <!-- Button for 'Dessert' filter -->
        <button role="button" class="filter" aria-pressed="false" aria-label="Filtre dessert">
            <img class="categories" src={imageDessert} alt="dessert" aria-hidden="true"/>
            <p class="filter-name">Dessert</p>
        </button>
        <!-- Button for 'Meat' filter -->
        <button role="button" class="filter" aria-pressed="false" aria-label="Filtre viande">
            <img class="categories" src={imageViande} alt="viande" aria-hidden="true"/>
            <p class="filter-name">Viande</p>
        </button>
        <!-- Button for 'Vegan' filter -->
        <button role="button" class="filter" aria-pressed="false" aria-label="Filtre végétalien">
            <img class="categories" src={imageVegetalien} alt="végétalien" aria-hidden="true"/>
            <p class="filter-name">Végétalien</p>
        </button>  
    </div>   
</section>

<!-- CSS -->
<style>
    .filter-name {
        color:var(--backgroundsection);
        font-size: 1rem;
        font-weight: 500;
    }
</style>