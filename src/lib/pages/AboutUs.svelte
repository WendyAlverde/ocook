<script>
    // Import necessary modules and assets
    import {link} from "svelte-spa-router"
    import pictureOcklecook from "../../assets/images/aboutus/aboutus.webp"
    import SvgButton from "../components/SvgButton.svelte";
</script>

<main class="aboutus" role="main" aria-labelledby="En-tête de la page à propos">
    <!-- About Section -->
    <h1 id="En-tête de la page à propos">À propos</h1>

    <section class="backgroundsection" id="contact" role="region" aria-labelledby="En-tête de l'encart profil">
        <!-- Heading for accessibility -->
        <h2 id="about-heading">À propos</h2>
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
    <div class="contactNews" role="region" aria-labelledby="En-tête de l'encart contact">
        <section class="backgroundsection left" role="region" aria-labelledby="En-tête du formulaire de contact">
            <!-- Heading for accessibility -->
            <h2 id="En-tête du formulaire de contact">Formulaire de contact</h2>
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

        <section class="backgroundsection right" role="region" aria-labelledby="En-tête de newsletter">
            <div class="aboutNews">
                <!-- Heading for accessibility -->
                <h2 id="En-tête de newsletter" lang="en">Newsletter</h2>
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
    </div>

    <!-- Thank You Section -->
    <section class="backgroundsection" role="region" aria-labelledby="Dernière section de la page">
        <!-- Heading for accessibility -->
        <h2 id="Dernière section de la page">Remerciements</h2>
        <!-- Presentation message -->
        <p class="presentation">Merci d'avoir consulté ce site.<br>
            Cordialement,<br>
            L'équipe O'cook</p>
        <!-- Copyright information -->
        <p>© 2024 O'cook.</p>
    </section>
</main>

<style>
    /* CSS styling for images */
    img {
        width: 15rem;
    }

    a {
        padding-top: 0.5em;
    }
</style>
