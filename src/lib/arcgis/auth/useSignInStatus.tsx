import type OAuthInfo from '@arcgis/core/identity/OAuthInfo';
import type Portal from '@arcgis/core/portal/Portal';
import { useCallback, useEffect, useState } from 'react';

import { checkSignInStatus, loadPortal, registerAppWithOAuth } from './utils';

export enum SignInStatus {
  Idle = 'idle',
  Working = 'working',
  SignedOut = 'signedout',
  SignedIn = 'signedin',
  Error = 'error',
}

const useSignInStatus = (appId: string = ''): [SignInStatus, Portal | undefined] => {
  const [status, setStatus] = useState<SignInStatus>(SignInStatus.Idle);
  const [portal, setPortal] = useState<Portal | undefined>(undefined);

  // Asynchronous function to handle signing in
  const handleSignInStatus = useCallback(async () => {
    setStatus(SignInStatus.Working);
    try {
      const oauthInfo: OAuthInfo = registerAppWithOAuth(appId);
      const credential = await checkSignInStatus({ portalUrl: oauthInfo.portalUrl });

      if (!credential) {
        setStatus(SignInStatus.SignedOut);
        return;
      }

      const loadedPortal: Portal = await loadPortal({ portalUrl: oauthInfo.portalUrl });
      setPortal(loadedPortal);
      setStatus(SignInStatus.SignedIn);
    } catch (error) {
      console.error('Error checking sign-in status:', error);
      setStatus(SignInStatus.Error);
    }
  }, [appId]);

  useEffect(() => {
    if (appId) {
      handleSignInStatus();
    }
  }, [appId, handleSignInStatus]);

  return [status, portal];
};

export default useSignInStatus;
