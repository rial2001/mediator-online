import { useSelector } from 'react-redux';

const useAuth = () => {
  const isAuth = useSelector<any, any>(state => !!state.user.user)
  const user = useSelector<any, any>(state => state.user.user)
  return { isAuth, user }
}

export default useAuth
