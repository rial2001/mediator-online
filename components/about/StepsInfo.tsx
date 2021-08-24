import { Typography } from 'antd';

import Container from '@components/Container';

import styles from '@styles/About.module.css';

const StepsInfo = () => (
  <section className={styles.about}>
    <Container>
      <div className={styles.content}>
        <Typography.Title className={styles.stepsMediationTitle} level={2}>
          Как проходит медиация
        </Typography.Title>

        <div className={styles.stepsMediation}>
          <div className={styles.stepItem}>
            <Typography.Paragraph className={styles.stepDescription}>
              Обращение к медиатору. Инициатором процедуры могут быть как обе,
              так и одна из сторон. В случае обращения одного из оппонентов по
              его просьбе посредник сам свяжется с другим участником конфликта и
              предложит урегулировать спор посредством медиации. Стороны сами
              выбирают специалиста.
            </Typography.Paragraph>

            <Typography.Paragraph className={styles.stepDescription}>
              Подготовка к процедуре. Медиатор объясняет правила проведения
              процесса и с согласия всех участников назначает время и место
              встречи.
            </Typography.Paragraph>

            <Typography.Paragraph className={styles.stepDescription}>
              Предмедиация. Посредник определяет модель оказания услуги на
              данной стадии посредничества. Он может встретиться как с обеими
              сторонами сразу, так и с каждой в отдельности. Чаще всего на этом
              этапе заключается соглашение о процедуре медиации.
            </Typography.Paragraph>
          </div>
          <div className={styles.stepNumberBlock}>
            <div className={styles.stepNumber}>
              <Typography.Text>1</Typography.Text>
            </div>
            <div className={styles.stepNumber}>
              <Typography.Text>2</Typography.Text>
            </div>
            <div className={styles.stepNumber}>
              <Typography.Text>3</Typography.Text>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default StepsInfo;
