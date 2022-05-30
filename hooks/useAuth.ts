import { useSelector } from 'react-redux';

const useAuth = () => {
  const isAuth = useSelector(state => !!state.user.user)
  const user = useSelector(state => state.user.user)
  return { isAuth, user }
}

export default useAuth
