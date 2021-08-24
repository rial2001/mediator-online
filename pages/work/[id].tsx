import Head from 'next/head';

import Layout from '@components/Layout';
import WorkBoard from '@components/work/WorkBoard';
import { PrivatePage } from '@components/PrivatePage';

const Work = () => (
  <PrivatePage>
    <Head>
      <title>Мои дела</title>
    </Head>
    <Layout>
      <WorkBoard />
    </Layout>
  </PrivatePage>
);

export default Work;
