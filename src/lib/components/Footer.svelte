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
    <a href="/"><img class="logofooter" src={ocooklogo} alt="Logo O'Cook"></a>
    <!-- Footer navigation -->
    <nav class = "navfooter" role="navigation">
        <!-- Footer links -->
        <ul class="linksfooter">
        <!-- Legal notice link -->
            <li><a href="/legalnotice" title="Mentions légales" use:link>Mentions légales</a></li>
        <!-- Contact page link -->
            <li><a href="/aboutus" title="Page de contact" use:link>Contact</a></li>
        </ul>
        <!-- Social media icons -->
        <ul class="socialicons">
            <!-- Facebook link -->
            <li><a href="/404" target="_blank" aria-label="Page Facebook de notre blog" use:link><img src={facebooklogo} alt="Logo Facebook"></a></li>
            <!-- Twitter link -->
            <li><a href="/404" target="_blank" aria-label="Page Twitter de notre blog" use:link><img src={twitterlogo} alt="Logo X (anciennement Twitter)"></a></li>
            <!-- Instagram link -->
            <li><a href="/404" target="_blank" aria-label="Page Instagram de notre entreprise" use:link><img src={instagramlogo} alt="Logo Instagram" ></a></li>
        </ul>
    </nav>
</footer>

<style lang="scss">
    footer {
        display: flex;
        align-items: center;
    }

    .logofooter {
        width: 4rem;
        margin: 0.4rem;
    }

    nav {
        text-align: center;
        margin: 0.5rem 2rem;
        width: 100%;
    }

    .linksfooter {
        a {
            color: var(--color-titre);
            font-weight: bold;
            margin-left: 1rem;
            font-size: 1.2rem;
        }

        li {
            padding-top: 0.2rem;
            margin: 0.5rem  0;
        }
    }
    
    .socialicons {
        margin-top: 0.5rem;
        display: flex;
        justify-content: space-between;
        img {
            width: 1.4rem;
            margin-left: 1rem;
        }
    }

    @media (min-width:769px) {
        .navfooter {
            display: flex;
            justify-content: space-between;
            
        }
        
        .socialicons {
            justify-content: flex-end;
        }
    }
</style>