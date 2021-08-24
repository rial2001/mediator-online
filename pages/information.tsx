import { FC } from 'react';
import Head from 'next/head';

import Layout from '@components/Layout';

const Information: FC = () => (
  <>
    <Head>
      <title>Полезная информация</title>
    </Head>
    <Layout>information</Layout>
  </>
);

export default Information;
