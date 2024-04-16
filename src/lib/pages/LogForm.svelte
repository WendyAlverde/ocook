<script>
    import {link, push} from "svelte-spa-router"
    import {directus} from "../../utils/directus";

    let root

    const signupData = {
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
        role:'54b0274e-7107-431e-b655-6519d997cdd8',
    }

    let signupError = ''

    /** @param {Event} event */
    async function signup(event) {
        // 1. intercepter l'envoi du formulaire et annuler le comportement par défaut du navigateur
        event.preventDefault()

        // 2. récupérer et vérifier les valeurs des champs du formulaire
        // cf. signupData

        // on vérifie que les deux mots de passe sont identiques
        if (signupData.password !== signupData.passwordConfirm) {
            signupError = 'Les mots de passe ne correspondent pas'
            return
        }

        // 3. envoyer les données à Directus
        const response = await directus('users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: signupData.email,
                password: signupData.password,
                first_name: signupData.username,
                role: signupData.role,
            }),
        })

        // 4. si Directus nous dit que tout est OK, on dit "MERCI NICO"
        if (response.ok) {
            // 5. on redirige l'utilisateur vers la page de connexion
            push('/')

        }
        // 6. si Directus nous dit que c'est pas OK, on dit que c'est la faute à Nico
        else {
            signupError = "Oups, une erreur est survenue pendant l'enregistrement. Veuillez réessayer plus tard."
        }
    }

    const signinData = {
        email: '',
        password: ''
    }

    let signinError = ''

    /** @param {Event} event */
    async function signin(event) {
        // 1. intercepter l'envoi du formulaire et annuler le comportement par défaut du navigateur
        event.preventDefault()

        // 2. récupérer les valeurs des champs du formulaire
        // cf. signinData

        // 3. envoyer les données à Directus
        const response = await directus('auth/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(signinData),
        })

        // 4. si Directus nous dit que tout est OK, on dit "MERCI NICO"
        if (response.ok) {
            // 5. enregistrer le token d'authentification dans le localStorage
            const json = await response.json()
            localStorage.setItem('directusToken', json.data.access_token)

            // 6. on redirige l'utilisateur vers la page d'accueil
            // push('/') // TODO: peut-être afficher un message de succès ?
            
        }
        // 7. si Directus nous dit que c'est pas OK, on dit que c'est la faute à Nico
        else {
            signinError = "La connexion a échoué. Veuillez vérifier vos informations de connexion."
        }
    }

    // Affichage / masquage des formulaires
    function toggleForm() {
        // 1. récupérer toutes les sections .logForm-section de la page en array
        const sections = Array.from(root.querySelectorAll('.logForm-section'))

        // 2. pour chaque section...
        sections.forEach(section => {
            const sectionForm = section.querySelector('form')

            // 3. ...si la section est fermée, on l'ouvre
            if (section.classList.contains('logForm-section-close')) {
                section.classList.remove('logForm-section-close')

                const height = Array.from(sectionForm.children).reduce(
                    (height, child) => {
                        const childStyle = getComputedStyle(child)

                        return height
                            + child.offsetHeight
                            + parseFloat(childStyle.marginTop)
                            + parseFloat(childStyle.marginBottom)
                    },
                    0
                )

                sectionForm.style.height = height + 'px'
            }
            // 4. ...sinon, on la ferme
            else {
                section.classList.add('logForm-section-close')
                sectionForm.style.height = '0'
            }
        })
    }
</script>

<div class="logForm" bind:this={root}>
    <section class="logForm-section">
        <h2 on:click={toggleForm}>
            S'enregistrer
        </h2>
        <form method="post" on:submit={signup}>
            <label class="logForm-inputRow">
                Pseudonyme
                <input type="text" name="username" placeholder="Nom d'utilisateur" required bind:value={signupData.username}>
            </label>
            <label class="logForm-inputRow">
                Adresse e-mail
                <input type="email" name="email" placeholder="Exemple : email@domain.com" required bind:value={signupData.email}>
            </label>
            <label class="logForm-inputRow">
                Mot de passe
                <input type="password" name="password" required bind:value={signupData.password}>
            </label>
            <label class="logForm-inputRow">
                Confirmation du mot passe
                <input type="password" name="password-confirm" required bind:value={signupData.passwordConfirm}>
            </label>
            {#if signupError}
                <p class="logForm-errorMessage">
                    {signupError}
                </p>
            {/if}
            <button class="buttonlogin" type="submit">
                S'enregistrer
            </button>
        </form>
    </section>

    <section class="logForm-section logForm-section-close">
        <h2 on:click={toggleForm}>
            Se connecter
        </h2>
        <form method="post" on:submit={signin}>
            <label class="logForm-inputRow">
                Adresse e-mail
                <input type="email" name="email" placeholder="Exemple : email@domain.com" required bind:value={signinData.email}>
            </label>
            <label class="logForm-inputRow">
                Mot de passe
                <input type="password" name="password" required bind:value={signinData.password}>
            </label>
            {#if signinError}
                <p class="logForm-errorMessage">
                    {signinError}
                </p>
            {/if}
            <button class="buttonlogin" type="submit">
                Se connecter
            </button>
        </form>
    </section>
</div>

<style lang="scss">
    .logForm {

        margin-bottom: 5rem;

        &-inputRow {
            display: block;
            width: 60%;
            margin: 1.2rem auto;

            & > input {
                display: block;
                width: 100%;
                padding: 1rem;
            }
        }

        &-errorMessage {
            width: 60%;
            margin: 1rem auto;
            padding: 1rem;
            color: var(--dark-red);
            background-color: var(--backgroundsection);
            border: 2px solid var(--dark-red);
            border-radius: 0.25rem;
        }

        &-section {
            margin-top: 4rem;

            &-close {
                & > form {
                    height: 0;
                }
            }
        }

        & form {
            overflow-y: hidden;
            transition: height 0.4s ease-in;
        }
    }
</style>