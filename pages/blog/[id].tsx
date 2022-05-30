import { Typography } from 'antd';
import Head from 'next/head';

import CardBlog from '@components/blog/CardBlog';
import Layout from '@components/Layout';
import Container from '@components/Container';

import styles from '@styles/blog/BlogPage.module.css';

const PageBlog = () => (
  <>
    <Head>
      <title>Название статьи</title>
    </Head>
    <Layout>
      <section className={styles.pageBlogSection}>
        <div className={styles.headerImage} />
        <Container>
          <div className={styles.content}>
            <div className={styles.blogContent}>
              <div className={styles.titleBlog}>
                <Typography.Title level={2}>Название статьи</Typography.Title>
                <Typography.Text>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim.{' '}
                </Typography.Text>
              </div>
              <div className={styles.textBlock}>
                <Typography.Paragraph>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus.
                </Typography.Paragraph>
                <Typography.Paragraph>
                  Donec quam felis, ultricies nec, pellentesque eu, pretium
                  quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                  fringilla vel, aliquet nec, vulputate eget, arcu. In enim
                  justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                </Typography.Paragraph>
                <Typography.Paragraph>
                  Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                  Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                  eleifend tellus. Aenean leo ligula, porttitor eu, consequat
                  vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
                  viverra quis, feugiat a, tellus.
                </Typography.Paragraph>
                <Typography.Paragraph>
                  Phasellus viverra nulla ut metus varius laoreet. Quisque
                  rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                  Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                  rhoncus.
                </Typography.Paragraph>
                <Typography.Paragraph>
                  Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                  semper libero, sit amet adipiscing sem neque sed ipsum. Nam
                  quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                  Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
                  ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet
                  orci eget eros faucibus tincidunt. Duis leo. Sed fringilla
                  mauris sit amet nibh. Donec sodales sagittis magna. Sed
                  consequat, leo eget bibendum sodales, augue velit cursus nunc,
                </Typography.Paragraph>
                <div className={styles.imageContent} />
                <Typography.Paragraph>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus.
                </Typography.Paragraph>
                <Typography.Paragraph>
                  Donec quam felis, ultricies nec, pellentesque eu, pretium
                  quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                  fringilla vel, aliquet nec, vulputate eget, arcu. In enim
                  justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                </Typography.Paragraph>
                <Typography.Paragraph>
                  Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                  Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                  eleifend tellus. Aenean leo ligula, porttitor eu, consequat
                  vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
                  viverra quis, feugiat a, tellus.
                </Typography.Paragraph>
                <Typography.Paragraph>
                  Phasellus viverra nulla ut metus varius laoreet. Quisque
                  rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                  Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                  rhoncus.
                </Typography.Paragraph>
                <Typography.Paragraph>
                  Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                  semper libero, sit amet adipiscing sem neque sed ipsum. Nam
                  quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                  Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
                  ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet
                  orci eget eros faucibus tincidunt. Duis leo. Sed fringilla
                  mauris sit amet nibh. Donec sodales sagittis magna. Sed
                  consequat, leo eget bibendum sodales, augue velit cursus nunc,
                </Typography.Paragraph>
              </div>
            </div>
            <div className={styles.recommend}>
              <Typography.Title className={styles.titleRecommend} level={3}>
                Читай так же
              </Typography.Title>
              <CardBlog />
              <CardBlog />
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  </>
);

export default PageBlog;
