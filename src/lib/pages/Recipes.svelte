<script>
    import {link, push} from "svelte-spa-router"
    import {directus, getDirectusUser} from "../../utils/directus";

    import Filter from "../components/Filter.svelte";
    import RecipeCard from "../components/RecipeCard.svelte";
    import Pagination from "../components/Pagination.svelte";

    async function getRecipes() {
        // 1. Call the Directus API
        // 1.1 Get the endpoint URL
        const endpoint = "items/Recipes?fields=*,categories.Categories_id.name,users.first_name"

        // 1.2 Make an HTTP request to the endpoint
        const response = await directus(endpoint)
        
        // 2. Get the recipes from the API response
        // 2.1 Get the API response and parse it into an object
        const json = await response.json()

        // console.log('Recipes', json.data)

        // 3. Return the recipes
        return json.data
    }

    // 4. Store the recipes in the 'recipes' variable
    const recipes = getRecipes()

    async function getCategories() {
        // TODO: Fetch categories (ID, name)
        // 1. Call the Directus API
        // 1.1 Get the endpoint URL
        const endpoint = "items/Categories?fields=id,name"

        // 1.2 Make an HTTP request to the endpoint
        const response = await directus(endpoint)
        
        // 2. Get the categories from the API response
        // 2.1 Get the API response and parse it into an object
        const json = await response.json()

        console.log('Categories', json.data)

        // 3. Return the categories
        return json.data
    }
    // Store the categories in the 'categories' variable
    const categories = getCategories()

     // Accordion
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
    let succesMessage = ''

    /** @param {Event} event */
    async function send(event) {
    // 1. Intercept the form submission and prevent the default browser behavior
        event.preventDefault()

    // 2. Get and validate the values ​​of the form fields
    // See recipeData

    // 2.1. Get the ID of the logged-in user
        const user = await getDirectusUser()

    // 3. Send everything to Directus

    // 3.1 Send the image to Directus and get its ID

    // 3.2 Send the data to Directus
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

        // 4. If Directus tells us everything is OK
        if (response.ok) {
            // 5. Redirect the user to the recipes page
            push('/recipes')
            succesMessage = "Votre recette est ajouté ! Veuillez actualiser la page pour voir votre recette."
        }
        // 6. If Directus tells us it's not OK
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

    }
    //function upload recipe picture
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

<main role="main">
    <h1>Recettes</h1>
    <!-- <p>Vous découvrirez ici une variété de recettes adaptées à tous, des plus petits aux plus grands, pour les amateurs comme les passionnés.</p> -->
    <!-- Recipe Filter -->
    <Filter />

    <section class="backgroundsection">
        <!-- Loading recipes -->
        {#await recipes}
            <p>Chargement des recettes...</p>
        {:then recipes}
            {#each recipes as recipe}
                <RecipeCard recipe={recipe} />
            {/each}
        {/await}
        <!-- Pagination -->
        <Pagination />
    </section>

    <!-- Recipe Submission Form -->
    <div class="accordion-item">
        <button class="button accordion-link add-recipe" on:click={showMore} aria-label="Accéder à l'entièreté du formulaire de recette">
            {showAnswer ? 'Replier' : 'Proposer une recette'}
        </button>
        <div class="answerrecipe {showAnswer ? 'show' : ''}">
            <h2>Proposer une recette</h2>
            <p class="information">Pour proposer une recette il faut être <a href="/logform" title="Page de connexion" aria-label="Page d'inscription et de connexion" use:link>connecté</a>.</p>
            <form name="formRecipe" action="" method="post" enctype="multipart/form-data" on:submit={send}>
                <label class="addRecipe-inputRow">
                    Nom de la recette :
                    <textarea class="recipe-name" type="text" name="recette" placeholder="Exemple : Tarte au citron.." required bind:value={recipeData.name}></textarea>
                </label>
                <!-- Choose Categories -->
                <fieldset>
                    <legend>
                        Choisir un ou plusieurs filtres :
                    </legend>
                    {#await categories}
                        <p>Chargement des catégories…</p>
                    {:then categories}
                        {#each categories as category}
                            <div class="checkbox-line">
                                <label>
                                    <input class="checkbox-input" type="checkbox" name="category" value={category.id} bind:group={recipeData.categories}/>
                                    {category.name}
                                </label>
                            </div>
                        {/each}
                    {/await}
                </fieldset>
                <!-- Add a photo -->
                <label for="add-photo" class="addRecipe-inputRow">
                    Ajouter une photo :
                    <input class="add-photo picture" name="file" type="file" multiple accept=".png, .jpg, .jpeg"  bind:value={recipeData.picture}/>
                    <div id="preview-file">
                    </div>
                </label>
                <!-- Ingredients list -->
                <label class="addRecipe-inputRow">
                    Liste des ingrédients :
                    <textarea class="recipe-steps" type="text" name="ingredients-list" placeholder="Exemple : Lait, oeuf.."  required bind:value={recipeData.ingredients}></textarea>
                </label>
                <!-- Recipe steps -->
                <label class="addRecipe-inputRow">
                    Les étapes de la recette :
                    <textarea class="recipe-steps" type="text" name="to-do-list" placeholder="Exemple : Ajouter du sucre.."  required  bind:value={recipeData.to_do_list}></textarea>
                </label>
                <!-- Error message -->
                {#if recipeError}
                    <p class="addRecipe-errorMessage">
                        {recipeError}
                    </p>
                {:else}
                    <p id="successMessage" aria-live="polite">
                        {succesMessage}
                    </p>
                {/if}
                <!-- Submit button -->
                <div class="buttonRecipe">
                    <button role="button" type="submit">
                        Envoyer la recette
                    </button>
                </div>
            </form>
        </div>
    </div>
</main>

<style lang="scss">
    // Image size
    .imgPreview{
        max-width:15rem;
        max-height:15rem;
    }

    /** ==== Start Add Recipes ==== **/
    .formrecipes  {
        background-color: var(--brown);
        border-radius: 0.8rem;
        color: var(--background-body);
        padding: 1rem 2rem;
        margin: 1rem;
        border: none;
    }

    .addRecipe-inputRow {
        display: block;
        margin-left: 1.5em;
    }

    .recipe-name{
        min-height: 3em;
        min-width: 93%;
        max-width: 93%;
        margin-bottom: 1em;
    }

    fieldset legend {
        margin-left: 0.3em;
        font-family: MegantВ-Personal-Use;
        letter-spacing: 0.2em;
        margin-left: 1.5em;
    }

    label { 
        font-family: MegantВ-Personal-Use;
        letter-spacing: 0.2em;
    }

    .checkbox-line label {
        display: flex;
        align-items: center;
    }

    .checkbox-line input {
        width: 7em;
    }

    .checkbox-input { 
        width: 2rem;
        height: 1.2rem;
    }

    input[type=file]::file-selector-button {
        background-color: var(--dark-green);
        border: none;
        border-radius: 2em;
        box-shadow: 0.10rem 0.20rem 0.20rem 0.10rem black;
        margin-right: 1em;
        cursor: pointer;
        color: var(--color-text-light);
    }

    .recipe-steps {
        min-height: 3em;
        max-height: 50em;
        min-width: 93%;
        max-width: 93%;
        margin-bottom: 1em;
    }

    .buttonRecipe {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1em;
    }

    .buttonRecipe button {
        background-color: var(--dark-green);
        border: none;
        box-shadow: 0.10rem 0.20rem 0.20rem 0.10rem black;
        padding: 0.5em 1em;
        border-radius: 1em;
        cursor: pointer;
        color: var(--color-text-light);
    }
    .accordion-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 1rem;
    }

    .accordion-link {
        width: 75%;
    }

    .add-recipe {
        margin: 0 1.5rem;
    }

    a {
        color: var(--color-titre);
        font-weight: bold;
    }

    textarea {
        margin: 1rem 0;
        padding: 1rem;
        border-radius: 1rem;
    }
    /** ==== End Add Recipes ==== **/
</style>
