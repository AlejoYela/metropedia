// auth.js
import createAuth0Client from "@auth0/auth0-spa-js";

export const initAuth0 = async () => {
  const auth0Client = await createAuth0Client({
    domain: import.meta.env.VITE_AUTH0_DOMAIN,  // Tu dominio de Auth0
    client_id: import.meta.env.VITE_AUTH0_CLIENT_ID, // Tu client ID de Auth0
    redirect_uri: "https://metropedia.vercel.app" // URI de redirección
  });
  return auth0Client;
};
