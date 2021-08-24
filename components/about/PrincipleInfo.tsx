import { Typography } from 'antd';
import classNames from 'classnames';

import Container from '@components/Container';

import styles from '@styles/About.module.css';

const PrincipleInfo = () => (
  <section className={styles.about}>
    <Container>
      <div className={styles.content}>
        <Typography.Title className={styles.principleTitle} level={2}>
          Принципы медиации
        </Typography.Title>
        <ol className={classNames(styles.list, styles.listPrinciples)}>
          <li>
            <Typography.Text>1</Typography.Text>
            Добровольное согласие на посредничество всех участников процесса. На
            любом этапе переговоров стороны вправе завершить процедуру.
          </li>
          <li>
            <Typography.Text>2</Typography.Text>
            Нейтральность и незаинтересованность посредника. Медиатор не может
            принимать чью-либо сторону, влиять на принятие решения и должен
            проводить медиацию беспристрастно, рассматривая спор с позиции обеих
            сторон.
          </li>
          <li>
            <Typography.Text>3</Typography.Text>
            Равноправие сторон и готовность к сотрудничеству. Желание прийти к
            согласию на равных условиях должно быть обоюдным.
          </li>
          <li>
            <Typography.Text>4</Typography.Text>
            Конфиденциальность. Медиатор не имеет права разглашать какую-либо
            информацию без согласия участников процедуры.
          </li>
        </ol>
      </div>
    </Container>
  </section>
);

export default PrincipleInfo;
