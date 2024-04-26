<script>
    // Import the link function from the Svelte SPA Router library
    import {link} from "svelte-spa-router"
</script>

<main role="main">
    <div class="background404" role="main" aria-labelledby="error-heading">
        <div class="blur">
            <section class="error">
                <p>Erreur 404, la page que vous recherchez n'a pas été trouvée.</p>
                <ul>
                    <li>Retournez à la <a href="/" use:link>page d'accueil</a> pour explorer d'autres contenus.</li>
                    <li>Si vous pensez qu'il s'agit d'une erreur, <a href="/aboutus" use:link>contactez-nous</a> pour obtenir de l'aide.</li>
                </ul>
            </section>
        </div>
    </div>
</main>

<style lang="scss">
    .background404 {
        background-image: url('../../assets/images/backgrounds/404sushi.webp');
        background-size: cover;
        background-position: center;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .blur {
        background-color: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(2px);
        border-radius: 0.5rem;
        padding: 0.5rem;
    }

    .error {
        text-align: center;
        line-height: 2rem;
        font-weight: bold;
        color: var(--color-titre);
    }
</style>