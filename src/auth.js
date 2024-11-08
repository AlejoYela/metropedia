import createAuth0Client from '@auth0/auth0-spa-js';

let auth0Client;

// Inicializar Auth0
export const initAuth0 = async () => {
  auth0Client = await createAuth0Client({
    domain: 'dev-6tbiy7tc5eqhqb7k.us.auth0.com',  // Cambia al tuyo
    client_id: 'JozbrwbE60QoHfD6hZiQy18zIQFxGEw0', // Cambia al tuyo
    redirect_uri: window.location.origin // La URL donde quieres redirigir después del login
  });
};

// Función para iniciar sesión
export const login = async () => {
  await auth0Client.loginWithRedirect({
    connection: 'google-oauth2'  // Aquí eliges el tipo de conexión
  });
};

// Función de logout
export const logout = () => {
  auth0Client.logout({
    returnTo: window.location.origin  // La URL donde redirigir después del logout
  });
};

// Función para manejar el callback
export const handleRedirectCallback = async () => {
  await auth0Client.handleRedirectCallback();
  console.log('Redirection handled');
};

// Función para obtener el usuario autenticado
export const getUser = async () => {
  return await auth0Client.getUser();
};

// Comprobar si el usuario está autenticado
export const isAuthenticated = async () => {
  return await auth0Client.isAuthenticated();
};
