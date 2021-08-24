import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import App, { AppContext } from 'next/app';

import AuthProvider from '@components/AuthProvider';
import { store } from '@redux/store';
import 'antd/dist/antd.css';
import '@styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

MyApp.propTypes = {
  Component: PropTypes.any,
  initialReduxState: PropTypes.object,
  pageProps: PropTypes.shape({}),
};
