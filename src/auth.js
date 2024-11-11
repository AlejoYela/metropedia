import createAuth0Client from "@auth0/auth0-spa-js";

async function configureAuth0() {
  const auth0 = await createAuth0Client({
    domain: "dev-6tbiy7tc5eqhqb7k.us.auth0.com", // Reemplaza con tu dominio de Auth0
    client_id: "JozbrwbE60QoHfD6hZiQy18zIQFxGEw0", // Reemplaza con tu Client ID
    authorizationParams: {
      scope: "openid profile email" // Incluye 'openid' para el acceso al perfil básico del usuario
    }
  });

  // Retornamos el cliente Auth0 configurado
  return auth0;
}

// Exportamos el cliente Auth0 para usarlo en otros archivos
export default configureAuth0;
