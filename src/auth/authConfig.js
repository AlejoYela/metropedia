// src/auth/authConfig.js
import { Auth0Client } from "@auth0/auth0-spa-js";

const auth0 = new Auth0Client({
    domain: import.meta.env.AUTH0_DOMAIN,
    client_id: import.meta.env.AUTH0_CLIENT_ID,
    redirect_uri: 'http://localhost:4321/campus/1087619754', // URL de redirección después de inicio de sesión
});

export default auth0;