<script>
    import {link, push} from "svelte-spa-router"
    import {directus} from "../../utils/directus";

    let root // Root element reference

    // Data for user signup form
    const signupData = {
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
        role:'54b0274e-7107-431e-b655-6519d997cdd8', // User role ID
    }

    let signupError = ''  // Error message for signup form
    let signupSuccesMessage = '' //Succes message for signup form

    /** @param {Event} event */
    async function signup(event) {
        // 1. Intercept the form submission and prevent the default browser behavior
        event.preventDefault()

        // 2. Retrieve and validate the values of the form fields
        // Refer to signupData

        // Check if the two passwords match
        if (signupData.password !== signupData.passwordConfirm) {
            signupError = 'Les mots de passe ne correspondent pas'
            return
        }

        // 3. Send the data to Directus
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

        // 4. If Directus responds with success, display a success message
        if (response.ok) {
        // 5. Redirect the user to the login page
        // push('/')
            document.getElementById('signupSuccessMessage').textContent = 'Inscription réussie ! Vous pouvez maintenant vous connecter.'

        }
        // 6. If Directus responds with an error, display an error message
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
        // 1. Intercept the form submission and prevent the default browser behavior
        event.preventDefault()

        // 2. Retrieve the values of the form fields
        // Refer to signinData

        // 3. Send the data to Directus
        const response = await directus('auth/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(signinData),
        })

        // 4. If Directus responds with success, save the token for 15 minutes
        if (response.ok) {
            // 5. Save the authentication token in the localStorage
            const json = await response.json()
            localStorage.setItem('directusToken', json.data.access_token)

            // 6. Redirect the user to the homepage
            push('/') // TODO: Maybe display a success message?
            
        }
        // 7. If Directus responds with an error, display an error message
        else {
            signinError = "La connexion a échoué. Veuillez vérifier vos informations de connexion."
        }
    }

    // Displaying / hiding forms
    function toggleForm() {
        // 1. Retrieve all .logForm-section sections from the page as an array
        const sections = Array.from(root.querySelectorAll('.logForm-section'))

        // 2. For each section...
        sections.forEach(section => {
            const sectionForm = section.querySelector('form')

            // 3. ...if the section is closed, open it
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
            // 4. ...otherwise, close it
            else {
                section.classList.add('logForm-section-close')
                sectionForm.style.height = '0'
            }
        })
    }
</script>

<main role="main">
    <div class="logForm" bind:this={root}>
        <section class="logForm-section">
            <!-- Sign-in line -->
            <div class="signIn-line">
                <!-- Sign-in button -->
                <h2 class="signIn-buton" on:click={toggleForm} aria-label="Créer un compte">
                    Créer un compte
                </h2>
            </div>
            <!-- Sign-up form -->
            <form method="post" on:submit={signup}>
            <!-- Username input -->
                <label class="logForm-inputRow" for="pseudonyme">
                    Pseudonyme
                    <input type="text" id="pseudonyme" name="username" placeholder="Nom d'utilisateur" required bind:value={signupData.username}>
                </label>
                <!-- Email input -->
                <label class="logForm-inputRow" for="email">
                    Adresse e-mail
                    <input type="email" id="email" name="email" placeholder="Exemple : email@domain.com" required bind:value={signupData.email}>
                </label>
                <!-- Password input -->
                <label class="logForm-inputRow" for="mot-de-passe">
                    Mot de passe
                    <input type="password" id="mot-de-passe" name="password" required bind:value={signupData.password}>
                </label>
                <!-- Password security tips -->
                <div class="logForm-password-security-tips">
                    <p>Votre mot de passe doit contenir :</p>
                    <ul>
                        <li>8 caractères minimum</li>
                        <li>Au moins 1 lettre majuscule et minuscule</li>
                        <li>1 caractère spécial minimum (!, @, #, $, %, etc.)</li>
                        <li>1 chiffre minimum</li>
                        <li>Éviter les informations personnelles comme votre nom ou votre date de naissance</li>
                    </ul>
                </div>
                <!-- Confirm Password input -->
                <label class="logForm-inputRow" for="confirmation-de-mot-de-passe">
                    Confirmation du mot passe
                    <input type="password" id="confirmation-de-mot-de-passe" name="password-confirm" required bind:value={signupData.passwordConfirm}>
                </label>
                <!-- Signup error message -->
                {#if signupError}
                    <p class="logForm-errorMessage" aria-live="polite">
                        {signupError}
                    </p>
                <!-- Signup success message -->
                {:else}
                    <p id="signupSuccessMessage" class="success-message" aria-live="polite">
                        {signupSuccesMessage}
                    </p>  
                {/if}
                <!-- Signup button -->
                <button class="buttonlogin" type="submit">
                    S'enregistrer
                </button>
            </form>
        </section>
        <!-- End of sign-up form -->

        <!-- Sign-in section -->
        <section class="logForm-section logForm-section-close">
            <!-- Sign-in line -->
            <div class="signIn-line">
                <!-- Sign-in button -->
                <h2 class="signIn-buton" on:click={toggleForm} aria-label="Se connecter">
                    Se connecter
                </h2>
            </div> 
            <!-- Sign-in form -->
            <form method="post" on:submit={signin}>
                <!-- Email input -->
                <label for="username" class="logForm-inputRow">
                    Adresse e-mail
                    <input type="email" name="email" placeholder="Exemple : email@domain.com" required bind:value={signinData.email}>
                </label>
                <!-- Password input -->
                <label for="email" class="logForm-inputRow">
                    Mot de passe
                    <input type="password" name="password" required bind:value={signinData.password}>
                </label>
                <!-- Sign-in error message -->
                {#if signinError}
                    <p class="logForm-errorMessage"> 
                        {signinError}
                    </p>
                <!-- Sign-in button -->
                {/if}
                <button class="buttonlogin" type="submit">
                    Se connecter
                </button>
            </form>
        </section>
    </div>
</main>

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

        &-password-security-tips {
            display: block;
            width: 60%;
            margin: 1.2rem auto 1.7rem;

            p {
                font-size: 0.8rem; 
                margin-bottom: 0.3rem;
            }
            
            li {
                font-size: 0.8rem;
            }
        }

        #signupSuccessMessage {
            width: 60%;
            margin: 1rem auto;
            padding: 1rem;
            color: rgb(13, 105, 13);
            text-align: center;
            font-size: 1rem;
            border-radius: 0.25rem;
        }        
    }

    .signIn-buton {
        border: 2px solid var(--color-titre);
        padding: 0.8rem;
        border-radius: 2em;
        cursor: pointer;
        
    }

    .signIn-buton:hover {
    transform: scale(1.2, 1.2);
    transition: 0.7s ease;
    }

    .signIn-buton:not(:hover) {
    transition: 0.7s ease;
    }

    .signIn-line {
        display: flex;
        justify-content: center;
    }

    .buttonlogin {
        background-color: var(--color-titre);
    }

    .buttonlogin:hover {
    transform: scale(1.1, 1.1);
    transition: 0.7s ease;
    }

    .buttonlogin:not(:hover) {
    transition: 0.7s ease;
    }

    .buttonlogin {
        width: 60%;
        height: 2.5rem;
        margin: 0.6rem auto;
        display: block;
        color: #fff;
        font-size: 1em;
        font-weight: bold;
        border: none;
        border-radius: 1.2rem;
        transition: .2s ease-in;
        cursor: pointer;
    }
</style>
