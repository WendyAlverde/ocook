<script>
    import {link} from "svelte-spa-router"
</script>

<header>

    <div class="navbar">
        <nav>
            <ul>
                <li class=""><a href="/" use:link>Home</a></li>
                <li class=""><a href="/recipes" use:link>Recipes</a></li>
                <li class=""><a href="/reviews" use:link>Reviews</a></li>
                <li class=""><a href="/logform" use:link>Log form</a></li>
                <li class=""><a href="/aboutus" use:link>About us</a></li>

            </ul>
        </nav>
    </div>

</header>