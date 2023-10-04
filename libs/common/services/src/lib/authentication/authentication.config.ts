import { environment } from '../environments/environment';
import { AuthConfig } from '@auth0/auth0-angular';

export const authConfig: AuthConfig = {
  // Your Auth0 app's domain
  // Important: Don't forget to start with https://
  //  AND the trailing slash!
  // The app's clientId configured in Auth0
  clientId: environment.clientId,
  domain: environment.issuer,
  // issuer: environment.issuer,
  useRefreshTokens: true,
  cacheLocation: 'localstorage',
  authorizationParams: {
    scope: 'openid profile email offline_access read:roles',
    redirect_uri: environment.hostUrl + '/',
    audience: environment.apiIdentifier
  },
};