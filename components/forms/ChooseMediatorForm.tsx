import { FC, memo, useCallback } from 'react';
import { Button, Form, Radio } from 'antd';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import MemberCard from '@components/work/MemberCard';
import { rulesFields } from '@validations/rulesFields';
import { workActions } from '@redux/work/workActions';

import buttonsStyle from '@styles/ButtonsStyle.module.css';
import styles from '@styles/forms/ChooseMediatorForm.module.css';

interface IDisputeInfo {
  mediator: string;
}

const ChooseMediatorForm: FC = () => {
  const dispatch = useDispatch();

  const onFinish = useCallback(
    (values: IDisputeInfo): void => {
      dispatch(workActions.addDisputeMediatorRequest(values.mediator));
    },
    [dispatch]
  );

  return (
    <Form
      className={styles.chooseMediatorForm}
      name="chooseMediator"
      onFinish={onFinish}
      requiredMark={false}
      scrollToFirstError
    >
      <Form.Item
        className={styles.chooseMediatorWrapper}
        name="mediator"
        rules={rulesFields.required}
      >
        <Radio.Group
          className={classNames(styles.mediatorGroup, 'mediatorGroup')}
        >
          <Radio.Button className={styles.mediatorItem} value="987654321">
            <MemberCard />
          </Radio.Button>
          <Radio.Button className={styles.mediatorItem} value="23232323">
            <MemberCard />
          </Radio.Button>
          <Radio.Button className={styles.mediatorItem} value="12345">
            <MemberCard />
          </Radio.Button>
          <Radio.Button className={styles.mediatorItem} value="789456">
            <MemberCard />
          </Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item className={styles.buttonsBlock}>
        <Button
          className={classNames(buttonsStyle.primaryButton, styles.button)}
          htmlType="submit"
        >
          Готово
        </Button>
        <Button
          className={classNames(buttonsStyle.defaultButton, styles.button)}
        >
          Открыть реестр медиаторов
        </Button>
      </Form.Item>
    </Form>
  );
};

export default memo(ChooseMediatorForm);
