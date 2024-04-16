<script>
    import { push} from "svelte-spa-router"
    import {directus, getDirectusUser} from "../../utils/directus";

    import Filter from "../components/Filter.svelte";
    import RecipeCard from "../components/RecipeCard.svelte";
    import Pagination from "../components/Pagination.svelte";

    async function getRecipes() {
    // 1. appeler l'API de Directus
        // 1.1 récupérer l'URL du endpoint
        const endpoint = "items/Recipes?fields=*,categories.Categories_id.name,users.first_name"

        // 1.2 faire une requête HTTP au endpoint
        const response = await directus(endpoint)
        
    // 2. récupérer les recettes à partir de la réponse de l'API
        // 2.1 récupérer la réponse de l'API et la convertir en objet
        const json = await response.json()

        console.log('Recipes', json.data)

    // 3. retourner les recettes
        return json.data
    }

    // 4. mettre les recettes dans la variable recipes
    const recipes = getRecipes()

    async function getCategories() {
        // TODO: récupérer les catégories (ID, nom)
        // 1. appeler l'API de Directus
        // 1.1 récupérer l'URL du endpoint
        const endpoint = "items/Categories?fields=id,name"

        // 1.2 faire une requête HTTP au endpoint
        const response = await directus(endpoint)
        
    // 2. récupérer les recettes à partir de la réponse de l'API
        // 2.1 récupérer la réponse de l'API et la convertir en objet
        const json = await response.json()

        console.log('Categories', json.data)

    // 3. retourner les recettes
        return json.data
    }

    const categories = getCategories()

    // accordeon
    let showAnswer = false;

    // If false goes on true, if true goes on false
    const showMore = () => {
        showAnswer = !showAnswer;
    }

    // add recipe
    const endpointAddRecipe = "items/Recipes"

    const recipeData = {
        name: '',
        ingredients:'',
        to_do_list:'',

        categories: [],
        // picture: '',
    }

    let recipeError = ''

    /** @param {Event} event */
    async function send(event) {
        // 1. intercepter l'envoi du formulaire et annuler le comportement par défaut du navigateur
        event.preventDefault()

        // 2. récupérer et vérifier les valeurs des champs du formulaire
        // cf. recipeData

        // 2.1. récupérer l'ID de l'utilisateur connecté
        const user = await getDirectusUser()

        // 3 envoyer tout le bazar à Directus

        // 3.1 envoyer l'image à Directus et récupérer son ID

        // 3.2 envoyer les données à Directus
        const response = await directus(endpointAddRecipe, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: recipeData.name,
                ingredients: recipeData.ingredients,
                to_do_list: recipeData.to_do_list,
                categories: recipeData.categories,
                users: user.id,
                // picture: recipeData.picture,
            }),
        })

        // 4. si Directus nous dit que tout est OK, on dit "MERCI NICO"
        if (response.ok) {
            // 5. on redirige l'utilisateur vers la page de connexion
            push('/recipes')
        }
        // 6. si Directus nous dit que c'est pas OK, on dit que c'est la faute à Nico
        else {
            recipeError = "Oups, une erreur est survenue pendant l'enregistrement. Tous les champs n'ont pas été renseignés."
        }
    }
    
    //=====  add recipe pictures =====//
    function createThumbnail(file,id) {
    var Reader = new FileReader();
    Reader.addEventListener('load', function() {
        var imgElement = document.createElement('img');
        imgElement.classList.add('imgPreview') 
        imgElement.src = this.result;
        document.getElementById('preview-'+id).appendChild(imgElement);
    }, false);

    Reader.readAsDataURL(file);

    }//function upload recipe picture
    function changeInputFil(event){
    var inputFile = event.currentTarget,
        name = inputFile.name,
        files = inputFile.files,
        allowedTypes = ['png', 'jpg', 'jpeg'],
        imgType;  
    document.getElementById('preview-'+ name).innerHTML ='';
    for (var i = 0 ; i < files.length ; i++) {
        imgType = files[i].name.split('.');
        imgType = imgType[imgType.length - 1];
        if(allowedTypes.indexOf(imgType) != -1) {
        createThumbnail(files[i],name);
        }//if
    }//for
    }//function 

    document.addEventListener('DOMContentLoaded',function(){
    var fileInput = document.forms['formRecipe'].querySelectorAll('[type=file]');
    for(var k = 0; k < fileInput.length;k++){
        fileInput[k].addEventListener('change', changeInputFil, false);
    }//for
    });
     //=====  add recipe pictures =====//

</script>

<main>
    <h1>Recettes</h1>

    <Filter />

    <section class="backgroundsection">
        {#await recipes}
            <p>Chargement des recettes...</p>
        {:then recipes}
            {#each recipes as recipe}
                <RecipeCard recipe={recipe} />
            {/each}
        {/await}

        <Pagination />
        
    </section>

    <!-- <section class="backgroundsection">
        <button role="button" class="formrecipes" aria-pressed="false" aria-label="Ajouter une recette">Ajouter une recette ?</button>
    </section> -->
    <div class="accordion-item wrapper">
        <button class="button accordion-link" on:click={showMore} aria-label="Accéder à l'entièreté de la recette">
            {showAnswer ? 'Replier' : 'Voir plus'}
        </button>
        <div class="answer {showAnswer ? 'show' : ''}">
            <h2>Proposer une recette</h2>
            <form name="formRecipe" action="" method="post" enctype="multipart/form-data" on:submit={send}>
                <p>Auteur</p>
                <label class="addRecipe-inputRow">
                    Nom de la recette
                    <input type="text" name="recette" placeholder="Exemple : Tarte au citron" required bind:value={recipeData.name}>
                </label>
                <!-- Checkbox -->
                <fieldset >  <!--bind:value={recipeData.categories}-->
                    <legend>
                        Choisir un ou plusieurs filtres
                    </legend>
                    {#await categories}
                        <p>Chargement des catégories…</p>
                    {:then categories}
                        {#each categories as category}
                            <div>
                                <label>
                                    <input type="checkbox" name="category" value={category.id} bind:group={recipeData.categories}/>
                                    {category.name}
                                </label>
                            </div>
                        {/each}
                    {/await}
                </fieldset>
                <!-- Checkbox -->
                <label class="addRecipe-inputRow">
                    Ajouter une photo
                    <input name="file" type="file" multiple accept=".png, .jpg, .jpeg"  bind:value={recipeData.picture}/>
                    <div id="preview-file">
                    </div>
                </label>
                <label class="addRecipe-inputRow">
                    Liste des ingrédients
                    <input type="text" name="ingredients-list" required bind:value={recipeData.ingredients}>
                </label>
                <label class="addRecipe-inputRow">
                    Les étapes de la recette
                    <input type="text" name="to-do-list" required  bind:value={recipeData.to_do_list}>
                </label>
                {#if recipeError}
                    <p class="addRecipe-errorMessage">
                        {recipeError}
                    </p>
                {/if}
                <button class="buttonRecipe" type="submit">
                    Envoyer la recette
                </button>
            </form>
        </div>
    </div>
</main>

<style lang="scss">
// taille image

.imagePreview {
    
    //size pictures for recipes in the scss file
    
}
</style>
