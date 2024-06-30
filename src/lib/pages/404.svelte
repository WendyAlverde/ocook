<script>
    // Import the link function from the Svelte SPA Router library
    import {link} from "svelte-spa-router"
</script>

<!-- ========================= Ce que chat GPT propose -->
<div class="page-404">
    <div class="error">
        <p>Erreur 404, la page que vous recherchez n'a pas été trouvée.</p>
        <p>Retournez à la <a href="/" class="home-link" use:link>page d'accueil</a> pour explorer d'autres contenus.</p>
    </div>
</div>

<style lang="scss">
.page-404 {
    height: 75vh;
    background: url('../../assets/images/backgrounds/404sushi.webp') no-repeat center;
    background-size: cover;
    display: flex;
    flex-direction:column-reverse;
    align-items: center;
    text-align: center;

    & .error {
    // blur
        background-color: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(0.12rem);
        border-radius: 0.5rem;
        padding: 0.5rem;
        margin: 1rem;
    }
    & p {
        font-size: 1rem;
        margin-bottom: 0.5rem;
        color: var(--color-titre);
    }

    & a {
        color: var(--light-violet);
        font-weight: bold;
    }
}
</style>