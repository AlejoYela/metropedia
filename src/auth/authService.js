// src/auth/authActions.js
import auth0 from './authConfig';

export async function login() {
    await auth0.loginWithRedirect();
}

export async function logout() {
    await auth0.logout({
        returnTo: 'http://localhost:4321/',
    });
}
