<script>
    import {link} from "svelte-spa-router"
    import pictureOcklecook from "../../assets/images/aboutus/phototest.jpg"
</script>

<main class="aboutus">
    <h1>À propos</h1>

    <section class="backgroundsection">
        <div class="aboutMe">
            <img class="profilePicture" src={pictureOcklecook} alt="Profil de l'auteur du site">
            <p>
                Bonjour ! Je suis Alice Ocklecook, passionnée de cuisine et créatrice de ce blog culinaire. Je partage ici mes recettes, astuces et inspirations pour vous aider à découvrir le plaisir de cuisiner et à éveiller vos papilles. Explorez mes créations et laissez-vous inspirer pour des moments gourmands inoubliables !
                À bientôt autour de nos assiettes,
                Alice Ocklecook.
            </p>
        </div>
    </section>

    <div class="contactNews">
        <section class="backgroundsection left">
            <h2 class="title">Formulaire de contact</h2>
            <form class="leftPage" method="get">
                <label for="email"></label>
                <input type="email" id="email" name="email" aria-label="Entrez votre adresse email" placeholder="Email">
                <label for="text"></label>
                <textarea type="text" id="text" name="message" aria-label="Entrez votre message" placeholder="Votre message"></textarea>
                <div class="wrapper">
                    <a class="button" href="#">Envoyer</a>
                </div>
                
                <!-- Filter: https://css-tricks.com/gooey-effect/ -->
                <svg style="visibility: hidden; position: absolute;" width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                        <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />    
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                            <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                        </filter>
                    </defs>
                </svg>            
            </form>
        </section>

        <section class="backgroundsection right">
            <div class="aboutNews">
                <h2 class="title" lang="en">Newsletter</h2>
                <label for="email"></label>
                <input type="email" id="email" name="email" aria-label="Entrez votre adresse email" placeholder="Email">
                <div class="wrapper">
                    <a class="button" href="#">S'inscrire</a>
                </div>
            </div>
            <!-- Filter: https://css-tricks.com/gooey-effect/ -->
            <svg style="visibility: hidden; position: absolute;" width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />    
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                    </filter>
                </defs>
            </svg>
        </section>  
    </div>

    <section class="backgroundsection">
        <p class="presentation">Merci d'avoir consulté ce site.<br>
            Cordialement,<br>
            L'équipe O'cook</p>
        <p>© 2024 O'cook.</p>
        <a href="/legalNotice" use:link>Mentions légales</a>
    </section>
</main>
