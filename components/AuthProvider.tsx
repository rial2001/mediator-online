import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { load } from '@redux/user'

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(load())
  }, [dispatch])

  return React.Children.only(children)
};

export default AuthProvider
