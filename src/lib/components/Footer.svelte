<script>
    import {link} from "svelte-spa-router"
    // Import logo and social icons
    import ocooklogo from "../../assets/images/logos/ocook-logo-blue.webp"
    import instagramlogo from "../../assets/images/logos/socials/instagram.webp"
    import facebooklogo from "../../assets/images/logos/socials/facebook.webp"
    import twitterlogo from "../../assets/images/logos/socials/twitter.webp"
</script>

<footer class="backgroundcomponent" role="contentinfo">
    <!-- O'Cook logo -->
    <img class = "logofooter" src={ocooklogo} alt="Logo O'Cook">
    <!-- Footer navigation -->
        <nav class = "navfooter" role="navigation">
            <!-- Social media icons -->
            <ul class="socialicons">
                <!-- Facebook link -->
                <li><a href="/404" target="_blank" aria-label="Page Facebook de notre blog" use:link><img src={facebooklogo} alt="Logo Facebook"></a></li>
                <!-- Twitter link -->
                <li><a href="/404" target="_blank" aria-label="Page Twitter de notre blog" use:link><img src={twitterlogo} alt="Logo X (anciennement Twitter)"></a></li>
                <!-- Instagram link -->
                <li><a href="/404" target="_blank" aria-label="Page Instagram de notre entreprise" use:link><img src={instagramlogo} alt="Logo Instagram" ></a></li>
            </ul>
            <!-- Footer links -->
            <ul class="linksfooter">
            <!-- Legal notice link -->
                <li><a href="/legalnotice" title="Mentions légales" use:link>Mentions légales</a></li>
            <!-- Contact page link -->
                <li><a href="/aboutus" title="Page de contact" use:link>Contact</a></li>
            </ul>
        </nav>
</footer>

<style lang="scss">
    .logofooter {
        width: 4rem;
        margin-top: 0.5rem;
        margin-left: 0.5rem;
        object-fit: cover;
    }

    .linksfooter {
        width: 18rem;
        display: flex;
        justify-content: space-around;
        padding: 1rem 0rem 1rem 5rem;
    }

    .navfooter {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .socialicons {
        margin-left: 4rem;
        margin-top: -4rem;
        display: flex;
    }

    .socialicons img {
        width: 2.4rem;
        margin-left: 1rem;
    }
    a {
        color: var(--color-titre);
        font-weight: bold;
    }
    
</style>