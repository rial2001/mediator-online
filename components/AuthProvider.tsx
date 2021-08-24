import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initAppActions } from '@redux/initAppActions';

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initAppActions.initApp());
  }, [dispatch]);

  return React.Children.only(children);
};

export default AuthProvider;
