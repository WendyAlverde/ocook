<script>
    // Import necessary modules and assets
    import {link} from "svelte-spa-router"
    import pictureOcklecook from "../../assets/images/aboutus/aboutus.webp"
    import SvgButton from "../components/SvgButton.svelte";
</script>

<main class="aboutus" role="main">
    <!-- About Section -->
    <h1>À propos</h1>

    <section class="backgroundsection" id="contact" role="region" aria-labelledby="aPropos">
        <!-- Heading for accessibility -->
        <h2 id="aPropos">À propos</h2>
        <div class="aboutMe">
            <!-- Profile picture of the site author -->
            <figure>
                <img class="profilePicture" src={pictureOcklecook} alt="Profil de l'auteur du site">
                <figcaption>Dessin d'Alice Ocklecook, créatrice du blog culinaire</figcaption>
            </figure>
            <!-- Introduction paragraph -->
            <p>
                Bonjour ! Je suis Alice Ocklecook, passionnée de cuisine et créatrice de ce blog culinaire. Je partage ici mes recettes, astuces et inspirations pour vous aider à découvrir le plaisir de cuisiner et à éveiller vos papilles. Explorez mes créations et laissez-vous inspirer pour des moments gourmands inoubliables !
                À bientôt autour de nos assiettes,
                Alice Ocklecook.
            </p>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="backgroundsection left" role="region" aria-labelledby="formulaireContact">
        <!-- Heading for accessibility -->
        <h2 id="formulaireContact">Formulaire de contact</h2>
        <!-- Contact form -->
        <form class="leftPage" method="get">
            <!-- Email input field -->
            <label for="email">Entrez votre adresse email :</label>
            <input type="email" id="email" name="email" aria-label="Entrez votre adresse email" placeholder="Email">
            <!-- Message input field -->
            <label for="text">Entrez votre message :</label>
            <textarea id="text" name="message" aria-label="Entrez votre message" placeholder="Votre message"></textarea>
            <!-- Submit button -->
            <div class="wrapper">
                <a class="button" href="/aboutus" use:link>Envoyer</a>
            </div>
            <!-- SVG button component -->
            <SvgButton />            
        </form>
    </section>

    <section class="backgroundsection right" role="region" aria-labelledby="newsletter">
        <div class="aboutNews">
            <!-- Heading for accessibility -->
            <h2 id="newsletter" lang="en">Newsletter</h2>
            <!-- Email input field for newsletter subscription -->
            <label for="email">Entrez votre adresse email :</label>
            <input type="email" id="email" name="email" aria-label="Entrez votre adresse email" placeholder="Email">
            <!-- Subscribe button -->
            <div class="wrapper">
                <a class="button" href="/aboutus" use:link>S'inscrire</a>
            </div>
        </div>
        <!-- SVG button component -->
        <SvgButton />
    </section>  

    <!-- Thank You Section -->
    <section class="backgroundsection" role="region" aria-labelledby="greetings">
        <!-- Heading for accessibility -->
        <h2 id="greetings">Remerciements</h2>
        <!-- Presentation message -->
        <p class="presentation">Merci d'avoir consulté ce site.<br>
            Cordialement,<br>
            L'équipe O'cook</p>
        <!-- Copyright information -->
        <p>© 2024 O'cook.</p>
    </section>
</main>

<style lang="scss">
    /* CSS styling for images */
    img {
        width: 15rem;
    }

    a {
        padding-top: 0.5em;
    }

    textarea {
        margin-top: 1em;
        min-height: 7rem;
        max-height: 20rem;
        min-width: 15rem;
        max-width: 15rem;
        border-radius: 1.2em;
        border-style: none;
        padding: 0.5em;
    }

    .aboutus p {
        margin: 0.8em;
        font-size: 1rem;
        line-height: 1.2rem;
    }

    .aboutNews, .leftPage, .backgroundsection .left {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .profilePicture {
        object-fit: cover;
    }

    .presentation {
        line-height: 1.5em;
    }
    // Start responsive Desktop
    @media (min-width: 769px) {
        textarea {
            min-height: 8rem;
            max-height: 30rem;
            min-width: 25rem;
            max-width: 25rem;
        }
    }
</style>
