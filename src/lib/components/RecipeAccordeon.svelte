<script>
    // Exporting the 'accordeon' prop
    export let accordeon;

    // Base URL for image assets
    const imageBaseUrl = "http://0.0.0.0:8055/" + 'assets/'

    // Variable to control accordion visibility
    let showAnswer = false;

    // Toggle function to show/hide accordion content
    // If false goes on true, if true goes on false
    const showMore = () => {
        showAnswer = !showAnswer;
    }
</script>

<div class="accordion-item wrapper" role="region">
    <!-- Button to toggle accordion visibility -->
    <button class="button accordion-link" on:click={showMore} aria-label="Accéder à l'entièreté de la recette">
        <!-- Button text changes based on accordion state -->
        {showAnswer ? 'Replier' : 'Voir plus'}
    </button>
    <!-- Accordion content -->
    <div class="answer {showAnswer ? 'show' : ''}">
        <div class="headerAccordeon">
        </div>
        <!-- Contenu de l'accordéon -->
        <div class="contentAccordeon">

            <!-- Ingredients list -->
            <h4>Liste des ingredients</h4>
            <div class="ingredientsList">
                <p>{accordeon.ingredients}</p>
            </div>
            <!-- To-do list -->
            <h4>Etapes de la recette</h4>
            <div class="todoList">
                <p>{accordeon.to_do_list}</p>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    div {
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1;
    }
</style>

