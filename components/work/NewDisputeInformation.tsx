import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Typography } from 'antd';
import classNames from 'classnames';
import { useRouter } from 'next/router';

import { appRouters } from '@routers/appRouters';
import styles from '@styles/work/NewDisputeInformation.module.css';
import buttonStyles from '@styles/ButtonsStyle.module.css';
import useDispute from '@hooks/useDispute'

interface INewDisputeInformation {
  activeTab: (key: string) => void;
}

const NewDisputeInformation: FC<INewDisputeInformation> = ({ activeTab }) => {
  const {dispute} = useDispute();
  const router = useRouter();

  const openDisputeHandler = useCallback((): void => {
    router.push(appRouters.home);
  }, [router, dispute]);

  const closeDisputeHandler = useCallback((): void => {
    router.push(appRouters.home);
  }, [router, dispute]);

  return (
    <div className={styles.content}>
      <Typography.Title className={styles.tabTitle} level={4}>
        Спор открыт!
      </Typography.Title>
      <div className={styles.blockInfo}>
        <div className={styles.textBlock}>
          <Typography.Title level={5}>Категория споров</Typography.Title>
          <Typography.Text>{dispute?.category}</Typography.Text>
        </div>
        <div className={styles.textBlock}>
          <Typography.Title level={5}>Краткое описание</Typography.Title>
          <Typography.Text>{dispute?.description}</Typography.Text>
        </div>
        <div className={styles.textBlock}>
          <Typography.Title level={5}>Ваш регион</Typography.Title>
          <Typography.Text>{dispute?.geo}</Typography.Text>
        </div>
        <div className={classNames(styles.textBlock, styles.textBlockRow)}>
          <Typography.Title level={5}>Вторая сторона</Typography.Title>
          <Typography.Text>{dispute?.user.firstName} {dispute?.user.familyName}</Typography.Text>
        </div>
        <div className={classNames(styles.textBlock, styles.textBlockRow)}>
          <Typography.Title level={5}>
            Дата и время предварительной встречи Сторон с медиатором
          </Typography.Title>
          <Typography.Text>{dispute?.time}</Typography.Text>
          <Typography.Text>{dispute?.date}</Typography.Text>
        </div>
        <div className={classNames(styles.textBlock, styles.textBlockRow)}>
          <Typography.Title level={5}>
            Форма встречи, сообщения
          </Typography.Title>
          <Typography.Text>Встреча</Typography.Text>
        </div>
      </div>
      <div
        className={classNames(
          styles.textBlock,
          styles.textBlockRow,
          styles.statusBlock
        )}
      >
        <Typography.Title level={5}>Статус</Typography.Title>
        <Typography.Text>ждет подтверждения медиатором</Typography.Text>
      </div>
      <div className={styles.otherInfo}>
        <Typography.Title className={styles.recommendation} level={5}>
          Сервисом сформировано и направлено приклашение к процедуре медиации
          второй стороне.
        </Typography.Title>

        <Typography.Title className={styles.recommendation} level={5}>
          Рекомендует скачать и самостоятельно направить приглашение второй
          стороне.
        </Typography.Title>
        <div className={classNames(styles.invite)}>
          <Typography.Title level={5}>
            Приглашение для второй стороны
          </Typography.Title>
          <Button
            className={classNames(
              buttonStyles.defaultButton,
              styles.downloadBtn
            )}
          >
            Скачать PDF
          </Button>
        </div>
      </div>

      <div className={styles.buttonsBlock}>
        <Button
          className={classNames(
            buttonStyles.defaultButton,
            styles.navigationBtn
          )}
          onClick={openDisputeHandler}
        >
          На главную
        </Button>
        <Button
          className={classNames(
            buttonStyles.defaultButton,
            styles.navigationBtn
          )}
          onClick={() => activeTab('first')}
        >
          Редактировать
        </Button>
        <Button
          className={classNames(
            buttonStyles.defaultButton,
            styles.navigationBtn
          )}
          onClick={closeDisputeHandler}
        >
          Закрыть спор
        </Button>
      </div>
    </div>
  );
};

export default NewDisputeInformation;
