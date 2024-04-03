<script>
    import {link} from "svelte-spa-router"
</script>

<main>
    <h1>À propos</h1>

    <section class="backgroundcomponent">
        
        <img src="../public/images/phototest.jpg" alt="Profil de l'auteur du site">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo, hic ut cum nobis iusto architecto sequi, nisi minus veniam maxime cupiditate tenetur. Molestias dolore ullam voluptas, minima beatae soluta.
        </p>
    </section>

    <section class="backgroundcomponent">
        <h2 class="title">Formulaire de contact</h2>
        <form action="" method="get">
            <label for="email"></label>
            <input type="email" id="email" name="email" aria-label="Entrez votre adresse email" placeholder="Email">
            <label for="text"></label>
            <textarea type="text" id="text" name="message" aria-label="Entrez votre message" placeholder="Votre message"></textarea>
            <button type="submit" class="envoyer">Envoyer</button>
        </form>
    </section>

    <section class="backgroundcomponent">
        <h2 class="title" lang="en">Newsletter</h2>
        <label for="email"></label>
        <input type="email" id="email" name="email" aria-label="Entrez votre adresse email" placeholder="Email">
        <button type="submit" class="envoyer">Envoyer</button>
    </section>

    <section class="backgroundcomponent">
        <p class="presentation">Chers passionnés de cuisine,

            Au nom de toute l'équipe O'cook, nous souhaitons exprimer notre plus profonde gratitude pour votre soutien continu et votre enthousiasme pour la cuisine.
            
            Nous sommes reconnaissants de pouvoir partager notre passion pour les saveurs. Vos retours, vos partages et vos encouragements sont pour nous une source d'inspiration constante.
                        
            Encore une fois, merci du fond du cœur pour votre fidélité et votre passion pour la cuisine.
            
            À vos fourneaux ! <br>
            
            Cordialement,<br>
            L'équipe O'cook</p>
        <p>© 2024 O'cook. Tous droits réservés. Les contenus de ce site, y compris les textes, les images, les vidéos et les recettes, sont la propriété intellectuelle de O'cook et sont protégés par les lois sur les droits d'auteur.</p>
        <a href="/legalNotice" use:link>Mentions légales</a>
    </section>
</main>