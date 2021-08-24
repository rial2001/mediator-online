import { useSelector } from 'react-redux';

import { isAuthSelector, userSelector } from '@redux/auth/authSelectors';

const useAuth = () => {
  const isAuth = useSelector(state => isAuthSelector(state));
  const user = useSelector(state => userSelector(state));

  return { isAuth, user };
};

export default useAuth;
