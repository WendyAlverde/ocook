<script>
    import {link} from "svelte-spa-router"
</script>

<footer class="backgroundcomponent" role="contentinfo">
    <img class = "logofooter" src="../public/images/ocook-logo-blue.webp" alt="Logo O'Cook">
        <nav class = "navfooter" role="navigation">
            <ul class="socialicons">
                <li><a href="#" target="_blank" aria-label="Page Facebook de notre blog"><img   src="../public/images/logos/facebook.png" alt="HTML tutorial" style="width:42px;height:42px;"></a></li>
                <li><a href="#" target="_blank" aria-label="Page Twitter de notre blog"><img src="../public/images/logos/twitter.png" alt="HTML tutorial" style="width:42px;height:42px;"></a></li>
                <li><a href="#" target="_blank" aria-label="Page Instagram de notre entreprise"><img src="../public/images/logos/instagram.png" alt="HTML tutorial" style="width:42px;height:42px;"></a></li>
            </ul>
            <ul class="linksfooter" >
                <li><a href="/aboutus" title="Mentions légales" use:link>Mentions légales</a></li>
                <li><a href="/aboutus" title="Page de contact" use:link>Contact</a></li>
            </ul>
        </nav>
</footer>