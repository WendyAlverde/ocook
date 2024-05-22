<script>
    // Exporting the 'accordeon' prop
    export let accordeon;

    // Base URL for image assets
    // const imageBaseUrl = "http://0.0.0.0:8055/" + 'assets/'

    // Variable to control accordion visibility
    let showAnswer = false;

    // Toggle function to show/hide accordion content
    // If false goes on true, if true goes on false
    const showMore = () => {
        showAnswer = !showAnswer;
    }
</script>

<div class="wrapper" role="region"> <!-- accordion-item -->
    <!-- Button to toggle accordion visibility -->
    <button class="button" on:click={showMore} aria-label="Accéder à l'entièreté de la recette"> <!-- accordion-link -->
        <!-- Button text changes based on accordion state -->
        {showAnswer ? 'Replier' : 'Voir plus'}
    </button>

    <!-- Accordion content -->
    <div class="answer {showAnswer ? 'show' : ''}">
        <!-- Accordion's content -->
        <div class="contentAccordeon">
            <!-- Ingredients list -->
            <div class="ingredientsList">
                <h4>Liste des ingredients</h4>
                <p>{accordeon.ingredients}</p>
            </div>
            <!-- To-do list -->
            <div class="todoList">
                <h4>Étapes de la recette</h4>
                <p>{accordeon.to_do_list}</p>
            </div>
        </div>
    </div>
</div>

<!--  -->