<script>
    import {link} from "svelte-spa-router"
    import ocooklogo from "../../assets/images/logos/ocook-logo-blue.webp"
    import imageConnexion from "../../assets/images/logos/icons8-invité-homme-80.png"
    
    function toggleMenu() {
        const toggle = document.getElementById('toggle');
        toggle.checked = false; // Ferme le menu en décochant la case à cocher
    }
</script>

<header role="banner" class="backgroundcomponent"><!-- header -->
    <div class="container">
        <input id="toggle" type="checkbox">
        <label class="toggle-container" for="toggle" aria-label="Toggle Menu">
            <span class="button-toggle"></span> <!-- Cet element contient le menu burger -->
        </label>
        <nav role="navigation" class="nav" aria-labelledby="toggle">
            <a class="nav-item" href="/" use:link on:click={toggleMenu}>Accueil</a>
            <a class="nav-item" href="/recipes" use:link on:click={toggleMenu}>Recettes</a>
            <a class="nav-item" href="/reviews" use:link on:click={toggleMenu}>Critiques</a>
            <a class="nav-item" href="/aboutus" use:link on:click={toggleMenu}>À propos</a>
        </nav>
        <div class="burgersearch"> 
            <a href="/logform" use:link>
                <img class="connexion" src={imageConnexion} alt="Bouton de connexion">
            </a>
            <div id="wrapsearch">
                <form action="" autocomplete="on">
                    <input id="search" name="search" type="text" placeholder="Recherche par mots clés">
                    <input id="search_submit" value="Rechercher" type="submit">
                </form>
            </div>
        </div>
    </div>
    <img src={ocooklogo} alt="O'cook-logo">
</header>
