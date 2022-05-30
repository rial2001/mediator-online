import { Typography } from 'antd';
//import { useDispatch, useSelector } from 'react-redux';
//import { useEffect } from 'react';

import Layout from '@components/Layout';
import Container from '@components/Container';
//import { errorSelect } from '@redux/error/errorSelector';
//import { errorActions } from '@redux/error/errorActions';
//import { errorActionTypes } from '@redux/error/errorActionTypes';
//import Loader from '@components/Loader';

import styles from '@styles/Error.module.css';

export default function ErrorPage() {
  //const dispatch = useDispatch();

  //useEffect((): any => {
    //return (): { type: errorActionTypes } => {
      //return dispatch(errorActions.clearError());
    //};
  //}, []);

  //const payload = useSelector(errorSelect);

  //const { errorCode, errorMessage } = payload;

  //if (!errorCode && !errorMessage) {
    //return <Loader />;
  //}

  return (
    <Layout>
      <section>
        <Container>
          <div className={styles.content}>
            <Typography.Title className={styles.title} level={4}>
              Ошибка
            </Typography.Title>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
