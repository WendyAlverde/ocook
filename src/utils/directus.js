/**
 * @param {String} endpoint Le endpoint Directus à appeler (exemple : items/Recipes)
 * @param {Object} options Les options de la requête fetch (exemple : { method: 'GET' })
 */
export function directus(endpoint, options = {}) {

    // on déterminue l'URL de l'API Directus à appeler
    const url = import.meta.env.VITE_API_BASE_URL + endpoint

    // on ajoute le token d'authentification si l'utilisateur est connecté
    const token = localStorage.getItem('directusToken')
    if (token) {
        options.headers = {
            ...(options.headers || {}),
            Authorization: 'Bearer ' + token
        }
    }

    // on appelle l'API Directus
    return fetch(url, options)
}

/**
 * Va chercher les informations du user connecté et les retourne
 */
export async function getDirectusUser() {

    const token = localStorage.getItem('directusToken')
    if (!token) {
        return null
    }

    const response = await directus('users/me')

    const json = await response.json()

    return json.data
}

export default {
    directus,
    getDirectusUser
}
