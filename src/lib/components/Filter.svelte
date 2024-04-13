<script>
    import imageApero from "../../../src/assets/images/logos/martini-glass-citrus-solid.svg"
    import imageEntree from "../../../src/assets/images/logos/bowl-rice-solid.svg"
    import imagePlat from "../../../src/assets/images/logos/utensils-solid.svg"
    import imageDessert from "../../../src/assets/images/logos/ice-cream-solid.svg"
    import imageViande from "../../../src/assets/images/logos/drumstick-bite-solid.svg"
    import imageVegetalien from "../../../src/assets/images/logos/carrot-solid.svg"
</script>

<section class="backgroundsection">
    <h2 class="title">Les filtres des recettes</h2>
    <div class="sixFilters">
        <button role="button" class="filter" aria-pressed="false" aria-label="Filtre apéritif">
            <img class="categories" src={imageApero} alt="apéritif"/>
            <p>Apéritif</p>
        </button>
        <button role="button" class="filter" aria-pressed="false" aria-label="Filtre entrée">
            <img class="categories" src={imageEntree} alt="entrée"/>
            <p>Entrée</p>
        </button>
        <button role="button" class="filter" aria-pressed="false" aria-label="Filtre plat">
            <img class="categories" src={imagePlat} alt="plat"/>
            <p>Plat</p>
        </button>
        <button role="button" class="filter" aria-pressed="false" aria-label="Filtre dessert">
            <img class="categories" src={imageDessert} alt="dessert"/>
            <p>Dessert</p>
        </button>
        <button role="button" class="filter" aria-pressed="false" aria-label="Filtre viande">
            <img class="categories" src={imageViande} alt="viande"/>
            <p>Viande</p>
        </button>
        <button role="button" class="filter" aria-pressed="false" aria-label="Filtre végétalien">
            <img class="categories" src={imageVegetalien} alt="végétalien"/>
            <p>Végétalien</p>
        </button>  
    </div>   
</section>