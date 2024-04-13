<script>
    export let accordeonReview;
    export let review;

    const imageBaseUrl = "http://0.0.0.0:8055/" + 'assets/'

    let showAnswer = false;

    // If false goes on true, if true goes on false
    const showMore = () => {
        showAnswer = !showAnswer;
    }
</script>

<div class="accordion-item">           
    <button class="button accordion-link" on:click={showMore} aria-label="Accéder à l'entièreté de la recette">
        {showAnswer ? 'Replier' : 'Voir plus'}
    </button>
    <div class="answer {showAnswer ? 'show' : ''}">
        <div class="headerRecipeAccordion">
            <div class="reviewname">
                <h3>{accordeonReview.title}</h3>
                <p>{accordeonReview.date}</p>
                <p>{accordeonReview.restaurant.rating} : &#9733;</p> 
            </div>
        </div>
        {#if accordeonReview.picture}
            <img class="imgReviewAccordion" src="{ imageBaseUrl + accordeonReview.picture }" alt="">
        {/if}
        <div class="footerRecipeAccordion">
            <div class="ourOpinion">
                <p>{accordeonReview.reviews}</p>
            </div>
        </div>
    </div>
</div>

<style>
    .answer.show {
        max-height: 50rem;
    }
</style>