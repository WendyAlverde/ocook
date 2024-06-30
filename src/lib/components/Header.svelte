<script>
    import { link, push } from "svelte-spa-router";
    import { logout } from "../../utils/logout";
    import { onMount } from "svelte";
    import { directus } from "../../utils/directus";

    // Import necessary modules and functions

    // import { redirect,error } from '@sveltejs/kit';

    // Import logo and login image
    import ocooklogo from "../../assets/images/logos/ocook-logo-blue.webp";
    import imageConnexion from "../../assets/images/logos/connexion.webp";

    // Function to close the menu by unchecking the checkbox
    function toggleMenu() {
        const toggle = document.getElementById("toggle");
        toggle.checked = false; 
    }

    // logout
    // Check if user is logged in
    let hasToken = localStorage.getItem("directusToken") !== null;
    let username = "";
    // Update hasToken variable on initial load
    onMount(() => {
        window.addEventListener("storage", handleStorageChange);

        if (hasToken) {
            fetchUserData();
        }
    });

    // Function to fetch user data
    function fetchUserData() {
        const endpoint = "users?fields=first_name";
        // Make a request to your user endpoint
        fetch(endpoint, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('directusToken')}`
            }
        })
        .then(response => response.json())
        .then(data => {
            // Update username with fetched data
            if (data && data.data && data.data.length > 0) {
                username = data.data[0].first_name;
            }
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données utilisateur :', error);
        });
    }

    // Function to handle changes in localStorage
    function handleStorageChange(event) {
        if (event.key === "directusToken") {
            hasToken = localStorage.getItem("directusToken") !== null;

            if (hasToken) {
            fetchUserData();
        } else {
            // Reset username if token is removed
            username = "";
        }
        }
    }

    // Function to handle user logout
    async function handleLogout() {
        await logout(); // Call logout function from utils/logout.js or any relevant file

        // Redirect to login page after logout
        // location.reload();
        push('/logform');
    }
</script>

<header role="banner" class="backgroundcomponent sticky">
    <!-- Header -->
    <div class="container">
        <!-- Toggle menu checkbox -->
        <input id="toggle" type="checkbox" />
        <!-- Toggle menu label -->
        <label class="toggle-container" for="toggle" aria-label="Basculer le menu">
            <span class="button-toggle"></span>
            <!-- This element contains the burger menu  -->
        </label>

        <!-- Navigation menu -->
        <nav role="navigation" class="nav menu-nav" aria-labelledby="Basculer">
            <!-- Home link -->
            <a class="nav-item" href="/" use:link on:click={toggleMenu}><span class="title-nav">Accueil</span></a>
            <!-- Recipes link -->
            <a class="nav-item" href="/recipes" use:link on:click={toggleMenu}><span class="title-nav">Recettes</span></a>
            <!-- Reviews link -->
            <a class="nav-item" href="/reviews" use:link on:click={toggleMenu}><span class="title-nav" lang="en">Avis</span></a>
            <!-- About us link -->
            <a class="nav-item" href="/aboutus" use:link on:click={toggleMenu}><span class="title-nav">À propos</span></a>
        </nav>
        <!-- Burger and search section -->
        <div class="burgersearch">
            <!-- Login link -->
            <a href="/logform" use:link>
                <img
                    class="connexion"
                    src={imageConnexion}
                    alt="Bouton de connexion"
                />
            </a>
            <!-- Logout button (if user is logged in) -->
            {#if hasToken}
                <div>
                    <p>{username}</p>
                    <!-- Button to logout -->
                    <a href="/logform" on:click={handleLogout}>Se déconnecter</a>
                </div>
            {/if}
            <!-- Search form -->
            <div id="wrapsearch">
                <form action="" autocomplete="on">
                    <!-- Champ de recherche -->
                    <input id="search" name="search" type="text" placeholder="Recherche par mots clés" class="search-input" >
                        <!-- Soumission de la recherche -->
                    <input id="search_submit" value="Rechercher" type="submit">
                </form>
            </div>
        </div>
    </div>

    <!-- O'Cook logo -->
    <a href="/"><img src={ocooklogo} alt="Logo O'Cook" aria-hidden="true"/></a>
    
</header>


<style lang="scss">
    .sticky{
        position: sticky;
        top: 0;
        z-index: 2;
    }

    header img {
        padding-bottom: 0.2rem;
        width: 4rem;
        display: block;
        margin: auto;
    }

    .burgersearch {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
    }

    .connexion {
        width: 2.2em;
        padding-top: 1.2em;
        margin-left: 0.3rem;
    }

    input#search {
        padding-top: 0;
        margin-top: 0;
    }

    // search form
    #wrapsearch {
        margin-right: 0.10rem;
        margin-left: 3rem;
        display: inline-block;
        position: relative;
        height: 3rem;
        float: right;
        padding: 0;
    }

    .search-input[type="text"] {
        height: 4rem;
        font-size: 1rem;
        display: inline-block;
        font-weight: 100;
        border: noheader img;
        outline: none;
        color: var(--color-titre);
        padding-right: 2rem;
        width: 0px;
        position: absolute;
        top: 0;
        right: 0;
        background: none;
        z-index: 3;
        transition: width .4s cubic-bezier(0.000, 0.795, 0.000, 1.000);
        cursor: pointer;
    }

    // search opening
    .search-input[type="text"]:focus {
        width: 14rem;
        z-index: 1;
        cursor: text;
    }

    input[type="submit"] {
        height: 2.5rem;
        width: 2rem;
        display: inline-block;
        color: var(--color-titre);
        float: right;
        background: url(../../assets/images/logos/search.svg) center center no-repeat;
        background-size: 1.6rem;
        text-indent: -600rem;
        border: none;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 2;
        cursor: pointer;
        transition: opacity .4s ease;
    }
</style>