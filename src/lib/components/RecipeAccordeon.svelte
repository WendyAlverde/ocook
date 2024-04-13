<script>
    export let accordeon;

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
        <div class="headerRecipeAccordion">
            <div class="recipename">
                <h3>{accordeon.name}</h3> 
            </div> <!--left-->
            <div class="authorname">
                <p>{accordeon.users.first_name}</p>
            </div> <!--right-->
        </div>
        {#if accordeon.picture}
            <img class="imgRecipeAccordion" src="{ imageBaseUrl + accordeon.picture }" alt="Photo de la recette (à dynamiser)">
        {/if}
        <div class="footerRecipeAccordion">
            <div class="ingredientsList">
                <p>{accordeon.ingredients}</p>
            </div>
            <div class="todoList">
                <p>{accordeon.to_do_list}</p>
            </div>
        </div>
    </div>
</div>

<style>
    .answer.show {
        max-height: 50rem;
    }
</style>