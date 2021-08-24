import { Typography } from 'antd';

import Container from '@components/Container';

import styles from '@styles/About.module.css';

const ServicesInfo = () => (
  <section className={styles.about}>
    <Container>
      <div className={styles.content}>
        <Typography.Title level={2}>Медиатор.ОНЛАЙН</Typography.Title>
        <Typography.Paragraph className={styles.description}>
          Это открытый реестр медиаторов России. Сервис открыт для медиаторов
          всей России – медиаторы самостоятельно регистрируются в сервисе,
          указывают свой профиль. Также Медиатор.ОНЛАЙН это онлайн-сервис
          разрешения споров с участием в качестве посредника независимого лица
          (медиатора) в соответствии с Законом 193-ФЗ от 27 июля 2010 г. «Об
          альтернативной процедуре урегулирования споров с участием посредника
          (процедуре медиации)» с изм. от 26.07.2019 г.
        </Typography.Paragraph>
        <div className={styles.serviceBlock}>
          <Typography.Title level={4}>Сервис позволяет:</Typography.Title>
          <ol className={styles.list}>
            <li>
              <Typography.Text>1</Typography.Text>
              Упрощенную процедуру медиации (через сайт / приложение)
            </li>
            <li>
              <Typography.Text>2</Typography.Text>
              Стороны по спору самостоятельно выбирают наиболее подходящую
              кандидатуру, в режиме онлайн и согласуют условия медиации
            </li>
            <li>
              <Typography.Text>3</Typography.Text>
              Простая и удобная регистрация для сторон спора, медиаторов
            </li>
            <li>
              <Typography.Text>4</Typography.Text>
              Простая и удобная регистрация для сторон спора, медиаторов
            </li>
            <li>
              <Typography.Text>5</Typography.Text>
              Использование шаблонов по наиболее распространенным категориям
              споров
            </li>
          </ol>
        </div>
      </div>
    </Container>
  </section>
);

export default ServicesInfo;
