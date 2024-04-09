<script>
    import {link} from "svelte-spa-router"
    import ocooklogo from "../../assets/images/logos/ocook-logo-blue.webp"
    import connectionicon from "../../assets/images/logos/connection.png"
</script>

<header role="banner" class="backgroundcomponent">
    <div class="navbar">
        <nav role="navigation">
            <ul class= "menu">
                <li class=""><a href="/" use:link>Accueil</a></li>
                <li class=""><a href="/recipes" use:link>Recettes</a></li>
                <li class=""><a href="/reviews" use:link>Critiques</a></li>
                <li class=""><a href="/aboutus" use:link>À propos</a></li>
            </ul>
        </nav>
        <img src={ocooklogo} alt="O'cook-logo">
        <div class="burgersearch"> 
            <button role="button" aria-pressed="false" class="burger"><em class="bar"></em></button>
            <a href="/logform" use:link><img class="connexion" src={connectionicon}></a>
            <div id="wrapsearch">
                <form action="" autocomplete="on">
                    <input id="search" name="search" type="text" placeholder="What're we looking for ?"><input id="search_submit" value="Rechercher" type="submit">
                </form>
            </div>
        </div>
    </div>
</header>
