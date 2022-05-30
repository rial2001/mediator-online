import Head from 'next/head';

import Layout from '@components/Layout';
import WorkBoard from '@components/work/WorkBoard';

const Work = () => (
  <>
    <Head>
      <title>Мои дела</title>
    </Head>
    <Layout>
      <WorkBoard />
    </Layout>
  </>
);

export default Work;
