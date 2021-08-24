import { FC } from 'react';
import { Typography } from 'antd';

import FooterMenu from '@components/footer/FooterMenu';
import Container from '@components/Container';

import styles from '@styles/footer/FooterStyle.module.css';

const Footer: FC = () => (
  <footer className={styles.footer}>
    <Container>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <Typography.Title className={styles.footerLogoTitle} level={2}>
            Медиатор. ОНЛАЙН
          </Typography.Title>
          <div className={styles.footerInfoBlock}>
            <Typography.Paragraph className={styles.footerLogoSubTitle}>
              Онлайн-Платформа для разрешения споров. Реестр медиаторов Росии
            </Typography.Paragraph>
            <Typography.Paragraph className={styles.footerLogoSubTitle}>
              все права защищены. 2021 год.
            </Typography.Paragraph>
          </div>
        </div>
        <FooterMenu />
      </div>
    </Container>
  </footer>
);

export default Footer;
