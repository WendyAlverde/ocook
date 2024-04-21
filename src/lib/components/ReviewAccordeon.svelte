<script>
    // Export a variable to hold the accordion review data
export let accordeonReview;

// Define a constant variable to store the base URL for images
const imageBaseUrl = "http://0.0.0.0:8055/" + 'assets/';

// Initialize a boolean variable to control the visibility of the accordion content
let showAnswer = false;

// Function to toggle the visibility of the accordion content
const showMore = () => {
    showAnswer = !showAnswer; // If false, becomes true; if true, becomes false
}
</script>

<div class="accordion-item wrapper" role="region" aria-labelledby="accordion-heading-{accordeonReview.id}">
    <!-- Button to toggle visibility of the accordion content -->           
    <button class="button accordion-link" on:click={showMore} aria-label="Accéder à l'entièreté de la recette" aria-expanded="{showAnswer}" aria-controls="accordion-content-{accordeonReview.id}">
        <!-- Show different text based on the state of showAnswer -->
        {showAnswer ? 'Replier' : 'Voir plus'}
    </button>
    <!-- Container for the accordion content -->
    <div class="answer {showAnswer ? 'show' : ''}" id="accordion-content-{accordeonReview.id}" aria-hidden="{!showAnswer}">
        <div class="contentAccordeon">
            <!-- Display the title and review of the accordion item -->
            <div class="ourOpinion">
                <h3 id="accordion-heading-{accordeonReview.id}">{accordeonReview.title}</h3>
                <p>{accordeonReview.review}</p>
            </div>
        </div>
    </div>
</div>
