<script>
    import {link} from "svelte-spa-router"
</script>

<div class="mainlog">  	
    <input type="checkbox" id="chk" aria-hidden="true">

    <div class="signup">
        <form>
            <label class="labelLogform" for="chk" aria-hidden="true">S'enregistrer</label>
            <input class="inputLogForm" type="text" name="txt" placeholder="Nom d'utilisateur" required="">
            <input class="inputLogForm"type="email" name="email" placeholder="Adresse mail" required="">
            <input class="inputLogForm"type="password" name="pswd" placeholder="Mot de passe" required="">
            <input class="inputLogForm"type="password" name="pswd" placeholder="Confirmer le mot de passe" required="">
            <button class="buttonlogin">S'enregistrer</button>
        </form>
    </div>

    <div class="login">
        <form>
            <label class="labelLogform" for="chk" aria-hidden="true">Se connecter</label>
            <input class="inputLogForm"type="text" name="txt" placeholder="Nom d'utilisateur" required="">
            <input class="inputLogForm"type="email" name="email" placeholder="Email" required="">
            <input class="inputLogForm"type="password" name="pswd" placeholder="Mot de passe" required="">
            <button class="buttonlogin">Se connecter</button>
        </form>
    </div>
    
</div>

