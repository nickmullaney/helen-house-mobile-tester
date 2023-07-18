import Auth0 from 'auth0-js';

const auth0 = new Auth0.WebAuth({
  clientId: 'FOmlJJIIhyAyo5jUhCZxQ9tJAzsi2Kob',
  domain: 'dev-3c6lxg8hjpdu1ria.us.auth0.com',
});

export default auth0;
