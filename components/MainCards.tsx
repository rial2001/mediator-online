import { FC } from 'react';
import { Card, Typography } from 'antd';
import Container from '@components/Container';

import styles from '@styles/MainCards.module.css';

const MainCards: FC = () => (
  <section className={styles.cardSection}>
    <Container>
      <div className={styles.cardWrapper}>
        <Card className={styles.card}>
          <div className={styles.img}>
            <img alt="alt" src="/comfortable-icon.svg" />
          </div>
          <div className={styles.cardContent}>
            <Typography.Title className={styles.cardTitle} level={4}>
              Удобно
            </Typography.Title>
            <Typography.Paragraph className={styles.cardDescription}>
              Сервис помогает Сторонам договориться об урегулировании, не выходя
              из дома и в удобное для них время. Возможность разрешить спор на
              100 % в режиме онлайн. МЕДИАТОР.ОНЛАЙН - это виртуальная
              платформа, которая помогает снизить распространение COVID-19.
            </Typography.Paragraph>
          </div>
        </Card>
        <Card className={styles.card}>
          <div className={styles.img}>
            <img alt="alt" src="/available-icon.svg" />
          </div>
          <div className={styles.cardContent}>
            <Typography.Title className={styles.cardTitle} level={4}>
              Доступно
            </Typography.Title>
            <Typography.Paragraph className={styles.cardDescription}>
              Базовые функции Сервиса абсолютно бесплатны для Сторон. Медиатор
              не назначается, а выбирается каждой из Сторон! Условия медиации
              согласуются индивидуально с выбранным Вами медиатором. Записаться
              на бесплатную онлайн - встречу можно прямо сейчас.
            </Typography.Paragraph>
          </div>
        </Card>
        <Card className={styles.card}>
          <div className={styles.img}>
            <img alt="alt" src="/law-icon.svg" />
          </div>
          <div className={styles.cardContent}>
            <Typography.Title className={styles.cardTitle} level={4}>
              По закону
            </Typography.Title>
            <Typography.Paragraph className={styles.cardDescription}>
              Сервис создан в целях создания условий для применения Закона №
              193-ФЗ от 27.07.2010 г. «Об альтернативной процедуре
              урегулирования споров с участием посредника (процедуре медиации)».
              См. реестр медиаторов России. Реестр открыт для всех медиаторов
              Росии. Зарегистрироваться.
            </Typography.Paragraph>
          </div>
        </Card>
      </div>
    </Container>
  </section>
);

export default MainCards;
