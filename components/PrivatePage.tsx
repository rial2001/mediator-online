import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Loader from '@components/Loader';
import { appRouters } from '@routers/appRouters';
import { initAppService } from '@services/initAppService';

export const PrivatePage = props => {
  const router = useRouter();

  useEffect(() => {
    (async function () {
      const resp = await initAppService.authUser();

      if (!resp.data.user) {
        return <Loader />;
      }

      if (typeof window !== 'undefined' && !resp.data.user) {
        router.push(appRouters.home);
      }

      return null;
    })();
  }, []);

  return props.children;
};
