<script>
    // Import the link function from the Svelte SPA Router library
    import {link} from "svelte-spa-router"
</script>

<main role="main">
    <div class="background404" role="main" aria-labelledby="error-heading">
        <div class="blur">
            <section class="error">
                <h1 id="error-heading">Erreur 404</h1>
                <p>Désolé, la page que vous recherchez n'a pas été trouvée.</p>
                <ul>
                    <li>Retournez à la <a href="/" use:link>page d'accueil</a> pour explorer d'autres contenus.</li>
                    <li>Si vous pensez qu'il s'agit d'une erreur, <a href="/contact" use:link>contactez-nous</a> pour obtenir de l'aide.</li>
                </ul>
            </section>
        </div>
    </div>
</main>


<!-- CSS -->

<style>
    .background404 {
        background-image: url('../../assets/images/backgrounds/404sushi.webp');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .blur {
        background-color: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(3px);
        border-radius: 0.5rem;
        padding: 1em;
    }

    .error {
        text-align: center;
        line-height: 2em;
        /* padding: 2.5em; */
        font-weight: bold;
        color: var(--color-titre);
    }
</style>