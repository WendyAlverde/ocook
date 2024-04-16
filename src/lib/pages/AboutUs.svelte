<script>
    import {link} from "svelte-spa-router"
    import pictureOcklecook from "../../assets/images/aboutus/aboutus.jpg"
    import SvgButton from "../components/SvgButton.svelte";
</script>

<main class="aboutus">
    <h1>À propos</h1>

    <section class="backgroundsection" id="contact">
        <div class="aboutMe">
            <figure>
                <img class="profilePicture" src={pictureOcklecook} alt="Profil de l'auteur du site">
                <figcaption>Dessin d'Alice Ocklecook, créatrice du blog culinaire</figcaption>
            </figure>
            <p>
                Bonjour ! Je suis Alice Ocklecook, passionnée de cuisine et créatrice de ce blog culinaire. Je partage ici mes recettes, astuces et inspirations pour vous aider à découvrir le plaisir de cuisiner et à éveiller vos papilles. Explorez mes créations et laissez-vous inspirer pour des moments gourmands inoubliables !
                À bientôt autour de nos assiettes,
                Alice Ocklecook.
            </p>
        </div>
    </section>

    <div class="contactNews" >
        <section class="backgroundsection left" >
            <h2>Formulaire de contact</h2>
            <form class="leftPage" method="get">
                <label for="email"></label>
                <input type="email" id="email" name="email" aria-label="Entrez votre adresse email" placeholder="Email">
                <label for="text"></label>
                <textarea type="text" id="text" name="message" aria-label="Entrez votre message" placeholder="Votre message"></textarea>
                <div class="wrapper">
                    <a class="button" href="#">Envoyer</a>
                </div>
                <SvgButton />            
            </form>
        </section>

        <section class="backgroundsection right">
            <div class="aboutNews">
                <h2 lang="en">Newsletter</h2>
                <label for="email"></label>
                <input type="email" id="email" name="email" aria-label="Entrez votre adresse email" placeholder="Email">
                <div class="wrapper">
                    <a class="button" href="#">S'inscrire</a>
                </div>
            </div>
            <SvgButton />
        </section>  
    </div>

    <section class="backgroundsection">
        <p class="presentation">Merci d'avoir consulté ce site.<br>
            Cordialement,<br>
            L'équipe O'cook</p>
        <p>© 2024 O'cook.</p>
        <a href="/legalnotice" use:link>Mentions légales</a>
    </section>
</main>

<style>
    img {
        width: 15rem;
    }
</style>