<script>
    import {link} from "svelte-spa-router"
    import ocooklogo from "../../assets/images/logos/ocook-logo-blue.webp"
    import imageConnexion from "../../assets/images/logos/icons8-invité-homme-80.png"

    // Fonction pour afficher le menu en mobile
    function displayMenu() {
        const navMenu = document.querySelector(".nav-menu");
        // @ts-ignore
        navMenu.style.display = "flex";
        navMenu.style.left = 0;
    }
</script>

<header role="banner" class="backgroundcomponent header">
    <div class="navbar">
        <nav role="navigation" class="nav-menu">
            <ul class= "menu" role="menu" aria-labelledby="menubutton">
                <li class=""><a href="/" use:link>Accueil</a></li>
                <li class=""><a href="/recipes" use:link>Recettes</a></li>
                <li class=""><a href="/reviews" use:link>Critiques</a></li>
                <li class=""><a href="/aboutus" use:link>À propos</a></li>
            </ul>
        </nav>
        <img src={ocooklogo} alt="O'cook-logo">
        <div class="burgersearch"> 
            <button role="button" type="button" aria-label="Accès au menu" aria-haspopup="true" aria-expanded="false" aria-controls="main-menu" class="burger"><em class="bar"></em></button>
            <a href="/logform" use:link><img class="connexion" src={imageConnexion}></a>
            <div id="wrapsearch">
                <form action="" autocomplete="on">
                    <input id="search" name="search" type="text" placeholder="What're we looking for ?"><input id="search_submit" value="Rechercher" type="submit" on:click={displayMenu}>
                </form>
            </div>
        </div>
    </div>
</header>
