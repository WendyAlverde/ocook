import {link, push} from "svelte-spa-router"

// Fonction pour se déconnecter de Directus
export function logout() {
    // on retire le token du local storage et c'est tout ! (pas d'appel à Directus nécessaire)
    localStorage.removeItem('directusToken')

    // 5. on redirige l'utilisateur vers la page de connexion
    //push('/logform')
    
}