<script>
    // Import images for recipe filters
    import imageApero from "../../../src/assets/images/logos/filters/martini-glass-citrus-solid.svg"
    import imageEntree from "../../../src/assets/images/logos/filters/bowl-rice-solid.svg"
    import imagePlat from "../../../src/assets/images/logos/filters/ustensils-solid.svg"
    import imageDessert from "../../../src/assets/images/logos/filters/ice-cream-solid.svg"
    import imageViande from "../../../src/assets/images/logos/filters/drumstick-bite-solid.svg"
    import imageVegetalien from "../../../src/assets/images/logos/filters/carrot-solid.svg"
    import imageBackground from "../../../src/assets/images/backgrounds/paper-textured-background.webp"
</script>

    <!-- Recipes filters -->
    <h2>Les filtres des recettes</h2>
    <!-- Recipe filters navigation -->
    <div class="sixFilters" aria-label="Filtres des recettes">
        <!-- Button for 'Appetizer' filter -->
        <button class="filter" aria-pressed="false" aria-label="Filtre apéritif">
                <img class="categories" src={imageApero} alt="" aria-hidden="true" style="background-image: url({imageBackground})" />
            <p class="filter-name">Apéritif</p>
        </button>
        <!-- Button for 'Starter' filter -->
        <button class="filter" aria-pressed="false" aria-label="Filtre entrée">
            <img class="categories" src={imageEntree} alt="" aria-hidden="true"/>
            <p class="filter-name">Entrée</p>
        </button>
        <!-- Button for 'Main Course' filter -->
        <button class="filter" aria-pressed="false" aria-label="Filtre plat">
            <img class="categories" src={imagePlat} alt="" aria-hidden="true"/>
            <p class="filter-name">Plat</p>
        </button>
        <!-- Button for 'Dessert' filter -->
        <button class="filter" aria-pressed="false" aria-label="Filtre dessert">
            <img class="categories" src={imageDessert} alt="" aria-hidden="true"/>
            <p class="filter-name">Dessert</p>
        </button>
        <!-- Button for 'Meat' filter -->
        <button class="filter" aria-pressed="false" aria-label="Filtre viande">
            <img class="categories" src={imageViande} alt="" aria-hidden="true"/>
            <p class="filter-name">Viande</p>
        </button>
        <!-- Button for 'Vegan' filter -->
        <button class="filter" aria-pressed="false" aria-label="Filtre végétalien">
            <img class="categories" src={imageVegetalien} alt="" aria-hidden="true"/>
            <p class="filter-name">Végétalien</p>
        </button>  
    </div>   

<!-- CSS -->
<style lang="scss">

    .filter-name {
        color: var(--violet);
        font-size: 0.8rem;
        font-weight: bold;
        padding-top: 0.5rem;
    }

    .filter {
        // background-color: var(--red);
        border-radius: 0.8rem;
        margin: 0.5rem;
        width: 4.5rem;
        border: none;
        padding: 0.5em;
    }

    .categories {
        width: 2rem;
        height: 2rem;
    }

    .sixFilters {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    button {
        background: none;
    }

    img  {
        border: none;
    }
</style>