import esriConfig from '@arcgis/core/config';
import type Credential from '@arcgis/core/identity/Credential';
import esriId from '@arcgis/core/identity/IdentityManager';
import OAuthInfo from '@arcgis/core/identity/OAuthInfo';
import Portal from '@arcgis/core/portal/Portal';

/**

 * Clean the Portal url
 * - Remove /home or /sharing endpoint.
 * - Upgrade the URL to https.
 * - Default to esriConfig.portalUrl - default being https://www.arcgis.com.
 *
 * @param portalUrl Portal URL.
 * @returns Cleaned Portal URL.
 *
 */
export function cleanUrl(portalUrl: string = ''): string {
  // Default to esriConfig.portalUrl or 'https://www.arcgis.com'.
  const defaultUrl = esriConfig.portalUrl || 'https://www.arcgis.com';
  let url: URL;

  try {
    url = new URL(portalUrl || defaultUrl);
  } catch {
    url = new URL(defaultUrl);
  }

  // Remove /home or /sharing endpoints.
  if (url.pathname.includes('/home')) {
    url.pathname = url.pathname.substring(0, url.pathname.indexOf('/home'));
  } else if (url.pathname.includes('/sharing')) {
    url.pathname = url.pathname.substring(0, url.pathname.indexOf('/sharing'));
  }

  // Upgrade the URL to HTTPS.
  if (typeof window !== 'undefined' && window.location.protocol === 'https:') {
    url.protocol = 'https:';
  }

  return url.toString();
}

/**
 * Register an application with OAuth.
 *
 * @param appId The application ID.
 * @param portalUrl The portal URL.
 * @returns The OAuth information.
 */
export function registerAppWithOAuth(appId: string, portalUrl: string = ''): OAuthInfo {
  const url: string = cleanUrl(portalUrl);

  const info = new OAuthInfo({
    appId,
    portalUrl: url,
    // Uncomment the next line to prevent the user's signed
    // in state from being shared with other apps on the same
    // domain with the same authNamespace value.
    // authNamespace: "portal_oauth_inline",
    popup: false,
  });

  esriId.registerOAuthInfos([info]);
  return info;
}

/**
 * Register a token.
 *
 * @param token The token to register.
 * @param server The server URL.
 */
export function registerToken({ token, server = '' }: { token: string; server?: string }) {
  const url: string = cleanUrl(server);
  esriId.registerToken({
    token,
    server: `${url}/sharing/rest`,
  });
}

/**
 * Check the sign-in status.
 *
 * @param portalUrl The portal URL.
 * @returns The credential if signed in, undefined otherwise.
 */
export async function checkSignInStatus({
  portalUrl = '',
}: {
  portalUrl?: string;
} = {}): Promise<Credential | undefined> {
  try {
    const url: string = cleanUrl(portalUrl);
    const credential = await esriId.checkSignInStatus(`${url}/sharing`);
    return credential; // logged in.
  } catch (error) {
    console.warn('Failed to check sign-in status:', error);
    return undefined; // logged out.
  }
}

/**
 * Sign in.
 *
 * @param portalUrl The portal URL.
 * @param options The options for getting the credential.
 * @returns The credential.
 */
export async function signIn(
  portalUrl: string = '',
  options: __esri.IdentityManagerGetCredentialOptions = {},
): Promise<Credential> {
  const url: string = cleanUrl(portalUrl);
  try {
    return await esriId.getCredential(`${url}/sharing`, options);
  } catch (error) {
    throw new AuthError('Sign-in failed', error);
  }
}

/**
 * Sign out.
 *
 * @param clearSessionStorage Whether to clear session storage.
 * @param reloadPage Whether to reload the page after signing out.
 */
export function signOut(clearSessionStorage: boolean = true, reloadPage: boolean = true) {
  if (clearSessionStorage) {
    sessionStorage.clear();
  }
  destroyCredentials();
  if (typeof window !== 'undefined' && reloadPage) {
    window.location.reload();
  }
}

/**
 * Destroy credentials.
 */
export function destroyCredentials() {
  esriId.destroyCredentials();
}

/**
 * Convert the identity to JSON.
 * @returns The JSON representation of the identity.
 */
export function identityToJson(): unknown {
  return esriId.toJSON();
}

/**
 * Initialize the identity from JSON.
 *
 * @param json The JSON representation of the identity.
 */
export function initializeIdentity(json: unknown) {
  esriId.initialize(json);
}

/**
 * Find a credential.
 *
 * @param portalUrl The portal URL.
 * @param userId The user ID.
 * @returns The found credential.
 */
export function findCredential(portalUrl: string = '', userId?: string): Credential | undefined {
  const url: string = cleanUrl(portalUrl);
  return esriId.findCredential(url, userId);
}

/**
 * Load a portal.
 *
 * @param portalUrl The portal URL.
 * @param rest The rest of the parameters.
 * @returns The loaded portal.
 */
export async function loadPortal({
  portalUrl,
  ...rest
}: {
  portalUrl?: string;
} = {}): Promise<Portal> {
  const url: string = cleanUrl(portalUrl);
  const portal = new Portal({ url, ...rest });

  portal.authMode = 'immediate';

  try {
    await portal.load();
    return portal;
  } catch (error) {
    console.error('Failed to load portal:', error);
    throw error;
  }
}

/** Custom error class for authentication errors. */
export class AuthError extends Error {
  constructor(
    message: string,
    public originalError?: unknown,
  ) {
    super(message);
    this.name = 'AuthError';
  }
}
