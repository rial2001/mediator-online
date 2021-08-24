import useAuth from '@hooks/useAuth';
import { appRouters } from '@routers/appRouters';

export const PrivateAppRouters = route => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return appRouters.home;
  }

  return route;
};
