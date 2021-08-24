import Head from 'next/head';
import { Typography } from 'antd';
import classNames from 'classnames';

import Layout from '@components/Layout';
import Container from '@components/Container';
import DifferentInfo from '@components/about/DifferentInfo';
import ServicesInfo from '@components/about/ServicesInfo';
import StepsInfo from '@components/about/StepsInfo';
import PrincipleInfo from '@components/about/PrincipleInfo';

import styles from '@styles/About.module.css';

const About = () => (
  <>
    <Head>
      <title>О проекте</title>
    </Head>
    <Layout>
      <section className={styles.about}>
        <Container>
          <div className={styles.content}>
            <Typography.Title level={2}>
              Медиация – что это такое?
            </Typography.Title>
            <Typography.Paragraph
              className={classNames(styles.description, styles.descriptionInfo)}
            >
              Медиация – технология внесудебного урегулирования спора,
              позволяющая сторонам прийти к консенсусу и отстоять свои интересы.
              При возникновении конфликта люди обращаются к медиатору, который
              выступает в качестве посредника в переговорах по спору. Согласно
              закону о медиации, участники сами должны договориться между собой.
              Медиатор способствует ведению конструктивного диалога, в процессе
              которого рассматриваются возможные варианты решения проблемы с
              учетом требований обеих сторон. Услуга посредничества помогает
              выйти из конфликта, сохранив хорошие отношения, и является
              эффективным инструментом досудебного урегулирования конфликта. К
              медиатору можно обратиться даже в случае нахождения дела в
              судопроизводстве.
            </Typography.Paragraph>
          </div>
        </Container>
      </section>

      <ServicesInfo />

      <section className={styles.about}>
        <Container>
          <div className={styles.content}>
            <Typography.Title level={2}>Зачем нужен медиатор?</Typography.Title>
            <Typography.Paragraph
              className={classNames(styles.description, styles.descriptionInfo)}
            >
              Медиатор – незаинтересованный посредник между конфликтующими
              сторонами, который занимается организацией и ведением переговоров
              по спору и не имеет права принимать или предлагать решения, давать
              правовые оценки участникам процедуры посредничества. Медиатор не
              разбирается, кто прав или виноват в конфликте, как судья, и не
              защищает ни одну из сторон, как адвокат. Медиатор беспристрастно
              изучает конфликтную ситуацию с учетом интересов и требований всех
              участников и помогает оппонентам услышать и понять друг друга. В
              случае принятия совместного решения сторонами конфликта медиатор
              занимается подготовкой соглашения, в котором будут описаны условия
              примирения.
            </Typography.Paragraph>
          </div>
        </Container>
      </section>

      <PrincipleInfo />

      <StepsInfo />

      <DifferentInfo />

      <section className={styles.about}>
        <Container>
          <div className={styles.content}>
            <Typography.Paragraph className={styles.description}>
              Процедура медиации не предполагает выявления выигравшей стороны.
              Главная особенность процесса – многосторонний анализ возникшей
              ситуации и поиск решения без обострения отношений между
              участниками. Конфиденциальность. Медиатор не имеет права
              разглашать информацию без согласия клиента. Обязательства,
              указанные в медиативном соглашении, исполняются чаще, чем
              постановление суда, т.к. участники принимают их добровольно.
              Индивидуальный подход к организации встреч. Место, время и
              длительность встречи оговариваются заранее.
            </Typography.Paragraph>
          </div>
        </Container>
      </section>
    </Layout>
  </>
);

export default About;
