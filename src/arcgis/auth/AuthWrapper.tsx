import type React from 'react';

import useSignInStatus, { SignInStatus } from './useSignInStatus';
import { signIn } from './utils';

function AuthWrapper({ appId, children }: React.PropsWithChildren<{ appId: string }>) {
  const [status] = useSignInStatus(appId);

  if (status === SignInStatus.Error) {
    return <div>There was an error signing in.</div>;
  }

  if (status === SignInStatus.SignedOut) {
    signIn();
    return null;
  }

  if (status === SignInStatus.SignedIn) {
    return <>{children}</>;
  }
}

export default AuthWrapper;
