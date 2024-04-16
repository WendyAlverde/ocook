<script>
    export let accordeonReview;

    const imageBaseUrl = "http://0.0.0.0:8055/" + 'assets/'

    let showAnswer = false;

    // If false goes on true, if true goes on false
    const showMore = () => {
        showAnswer = !showAnswer;
    }
</script>

<div class="accordion-item wrapper">           
    <button class="button accordion-link" on:click={showMore} aria-label="Accéder à l'entièreté de la recette">
        {showAnswer ? 'Replier' : 'Voir plus'}
    </button>
    <div class="answer {showAnswer ? 'show' : ''}">
        <div class="headerAccordeon">
            <div class="blocAccordeon">
                <h3>{accordeonReview.title}</h3>
            </div>
            <div class="blocAccordeon">
                <p>{accordeonReview.date}</p>
            </div>
            <div class="blocAccordeon">
                <p>{accordeonReview.restaurant.rating} : &#9733;</p> 
            </div>
        </div>
        {#if accordeonReview.picture}
            <img class="imgAccordeon" src="{ imageBaseUrl + accordeonReview.picture }" alt="Photo du restaurant (à dynamiser)">
        {/if}
        <div class="contentAccordeon">
            <div class="ourOpinion">
                <p>{accordeonReview.review}</p>
            </div>
        </div>
    </div>
</div>

<style>
    /* .answer.show {
        max-height: 50rem;
    } */
</style>