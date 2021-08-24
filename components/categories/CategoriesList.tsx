import { Typography } from 'antd';
import classNames from 'classnames';

import styles from '@styles/categories/AllCategories.module.css';

const CategoriesList = () => (
  <ol className={styles.list}>
    <li className={styles.titleList}>
      <Typography.Title className={styles.titleList} level={4}>
        Семейная медиация
      </Typography.Title>
      <ol className={styles.list}>
        <li>Споры, связанные с прекращением брака</li>
        <li>Имущественные споры</li>
        <li>Споры о детях</li>
        <li>Споры в связи с исполнением алиментных обязательств</li>
        <li>Иные</li>
      </ol>
    </li>
    <li>
      Гражданские споры
      <ol className={classNames(styles.list, styles.sublist)}>
        <li>
          Имущественные споры
          <ol className={classNames(styles.list, styles.sublist)}>
            <li>
              споры, связанные с нарушением обязательств по договору:
              <ol className={classNames(styles.list, styles.sublist)}>
                <li>купли-продажи, поставки </li>
                <li>медицинских услуг</li>
                <li>транспортных услуг</li>
                <li>услуг в сфере образования </li>
                <li>строительных и связанных с ними инженерных услуг</li>
                <li>услуг связи</li>
                <li>коммунальных услуг</li>
                <li>жилищных услуг</li>
                <li>бытовых услуг</li>
                <li>отдыха, культуры и спорта</li>
                <li>иные</li>
              </ol>
            </li>
            <li>споры, связанные с нарушением права собственности</li>
            <li>споры с причинением вреда</li>
            <li>Иные</li>
          </ol>
        </li>
      </ol>
    </li>
    <li>
      Отношения, связанные с защитой прав потребителей:
      <ol className={styles.list}>
        <li>из договоров поставки, купли-продажи</li>
        <li>
          из договоров в сфере:
          <ol className={classNames(styles.list, styles.sublist)}>
            <li>услуги торговли</li>
            <li>медицинских услуг</li>
            <li>транспортных услуг</li>
            <li>услуг в сфере образования</li>

            <li>строительных и связанных с ними инженерных услуг</li>
            <li>услуг связи</li>
            <li>коммунальных услуг</li>
            <li>жилищных услуг</li>
            <li>бытовых услуг</li>
            <li>отдыха, культуры и спорта</li>
            <li>иные договоры в сфере услуг</li>
          </ol>
        </li>
        <li>из договоров с финансово-кредитными учреждениями</li>
        <li>Иные</li>
      </ol>
    </li>
    <li>
      Споры, возникающие из трудовых отношений
      <ol className={classNames(styles.list, styles.sublist)}>
        <li>
          <ol className={classNames(styles.list, styles.sublist)}>
            <li>Дела по оплате труда</li>
            <li>О возмещении ущерба</li>
            <li>Дела о восстановлении на работе</li>
            <li>Иные</li>
          </ol>
        </li>
        <li>Споры, возникающие из пенсионных отношений</li>
        <li>Споры, возникающие из пенсионных отношений</li>
        <li>Споры, связанные с социальными спорами</li>
        <li>Споры, связанные с жилищными отношениями</li>
        <li>Споры, связанные с недвижимостью</li>
        <li>Отношения, связанные с интеллектуальной собственностью</li>
        <li>Споры, связанные с наследственными отношениями</li>
        <li>Иные</li>
      </ol>
    </li>
    <li>
      Арбитражные споры
      <ol className={classNames(styles.list, styles.sublist)}>
        <li>Экономические споры, возникающие из гражданских правоотношений.</li>
        <li>споры с причинением вреда</li>
        <li>Корпоративные споры</li>
        <li>Иное</li>
      </ol>
    </li>
    <li>
      Административные дела
      <ol className={classNames(styles.list, styles.sublist)}>
        <li>Налоговые споры</li>
        <li>Исполнительное производство службы судебных приставов</li>
        <li>Иное</li>
      </ol>
    </li>
  </ol>
);

export default CategoriesList;
