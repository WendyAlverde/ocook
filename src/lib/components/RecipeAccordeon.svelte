<script>
    export let accordeon;

    const imageBaseUrl = "http://0.0.0.0:8055/" + 'assets/'

    let showAnswer = false;

    // If false goes on true, if true goes on false
    const showMore = () => {
        showAnswer = !showAnswer;
    }
</script>

<div class="accordion-item wrapper" id="accordeon">
    <button class="button accordion-link" on:click={showMore} aria-label="Accéder à l'entièreté de la recette">
        {showAnswer ? 'Replier' : 'Voir plus'}
    </button>
    <div class="answer {showAnswer ? 'show' : ''}">
        <div class="headerRecipeAccordion">
            <div class="recipename">
                <p>{accordeon.name}</p> 
            </div> <!--left-->
            <div class="authorname">
                <p>{accordeon.users.first_name}</p>
            </div> <!--right-->
        </div>
        {#if accordeon.picture}
            <img class="imgRecipeAccordion" src="{ imageBaseUrl + accordeon.picture }" alt="">
        {/if}
        <div class="footerRecipeAccordion">
            <div class="ingredientsList">
                <p>{accordeon.ingredients}</p>
            </div>
            <div class="todoList">
                <p>{accordeon.to_do_list}</p>
            </div>
            <button id="closeBtnAccordion" role="button" type="button" aria-label="Fermer la recette">Fermer</button>
        </div>
    </div>
</div>

<!-- <div class="answer">
    <div class="headerRecipeAccordion">
        <div class="recipename">
            <p>Nom de la recette</p> 
        </div>
        <div class="authorname">
            <p>Nom de l'auteur</p>
        </div>
    </div>
    <img class="imgRecipeAccordion" src="../public/images/foods/apero.webp" alt="">
    <div class="footerRecipeAccordion">
        <div class="ingredientsList">
            <p>Liste des ingrédients</p>
        </div>
        <div class="todoList">
            <p>Etapes de la recette</p>
        </div>
        <button id="closeBtnAccordion" role="button" type="button" aria-label="Fermer la recette">Fermer</button>
    </div>
</div> -->

<style>
  .answer.show {
    max-height: 125px;
  }
</style>