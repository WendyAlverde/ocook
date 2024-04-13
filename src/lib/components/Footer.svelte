<script>
    import {link} from "svelte-spa-router"
    import ocooklogo from "../../assets/images/logos/ocook-logo-blue.webp"
    import instagramlogo from "../../assets/images/logos/socials/instagram.png"
    import facebooklogo from "../../assets/images/logos/socials/facebook.png"
    import twitterlogo from "../../assets/images/logos/socials/twitter.png"
</script>

<footer class="backgroundcomponent" role="contentinfo">
    <img class = "logofooter" src={ocooklogo} alt="Logo O'Cook">
        <nav class = "navfooter" role="navigation">
            <ul class="socialicons">
                <li><a href="#" target="_blank" aria-label="Page Facebook de notre blog"><img src={facebooklogo} alt="Logo Facebook" style="width:42px;height:42px;"></a></li>
                <li><a href="#" target="_blank" aria-label="Page Twitter de notre blog"><img src={twitterlogo} alt="Logo X (anciennement Twitter)" style="width:42px;height:42px;"></a></li>
                <li><a href="#" target="_blank" aria-label="Page Instagram de notre entreprise"><img src={instagramlogo} alt="Logo Instagram" style="width:42px;height:42px;"></a></li>
            </ul>
            <ul class="linksfooter">
                <li><a href="/legalnotice" title="Mentions légales" use:link>Mentions légales</a></li>
                <li><a href="/aboutus" title="Page de contact" use:link>Contact</a></li>
            </ul>
        </nav>
</footer>