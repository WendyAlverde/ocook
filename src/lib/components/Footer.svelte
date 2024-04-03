<script>
    import {link} from "svelte-spa-router"
</script>

<footer class="backgroundcomponent" role="contentinfo">
    <img src="../public/images/logo-big-blue.png" alt="Logo O'Cook">
    <nav role="navigation">
        <ul>
            <li><a href="/legalNotice" title="Mentions légales" use:link>Mentions légales</a></li>
            <li><a href="/aboutus" title="Page de contact" use:link>Contact</a></li>
        </ul>
        <li>
            <ul>
                <li><a href="https://www.facebook.com/votrepage" target="_blank" aria-label="Page Facebook de notre blog">Facebook</a></li>
                <li><a href="https://www.instagram.com/votrepage" target="_blank" aria-label="Page Twitter de notre blog">Instagram</a></li>
                <li><a href="https://twitter.com/votrepage" target="_blank" aria-label="Page Instagram de notre entreprise">Twitter</a></li>
            </ul>
        </li>
    </nav>
</footer>