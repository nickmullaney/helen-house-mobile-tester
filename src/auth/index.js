import * as AuthSession from 'expo-auth-session';
import auth0 from '../../auth0';

export const login = async () => {
  const redirectUrl = AuthSession.makeRedirectUri({ useProxy: true });

  const result = await AuthSession.startAsync({
    authUrl: auth0.webAuth.authorizeUrl({
      redirectUri: redirectUrl,
      scope: 'openid profile email',
      audience: 'https://dev-3c6lxg8hjpdu1ria.us.auth0.com/api/v2/',
    }),
  });

  // Handle the authentication result
  if (result.type === 'success') {
    // Authentication succeeded, process the result
    const { params } = result;
    // Access the returned parameters such as access_token, id_token, etc.
    console.log(params);
    return true; // Return a success flag or any relevant data
  } else if (result.type === 'error') {
    // Authentication failed, handle the error
    const { error } = result;
    console.log(error);
    return false; // Return an error flag or handle the error accordingly
  }

  return false; // Return an error flag if an unexpected result occurs
};
