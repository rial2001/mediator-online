import { FC, memo, useCallback } from 'react';
import { Button, Form, Radio } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import MemberCard from '@components/work/MemberCard';
import { rulesFields } from '@validations/rulesFields';

import buttonsStyle from '@styles/ButtonsStyle.module.css';
import styles from '@styles/forms/ChooseMediatorForm.module.css';

interface IDisputeInfo {
  mediator: string;
}

const ChooseMediatorForm: FC<any> = ({onSelect}) => {
  const dispatch = useDispatch();
  const mediators = useSelector(state => state.mediators.mediators)

  const onFinish = useCallback(
    (values: IDisputeInfo): void => {
      const selected = mediators.find(med => med.id === values.mediator)
      if(selected) onSelect(selected)
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
      <Form.Item className={styles.chooseMediatorWrapper}
        name="mediator"
        rules={rulesFields.required}
      >
        <Radio.Group className={classNames(styles.mediatorGroup, 'mediatorGroup')}>
        {mediators.map(mediator => (
          <Radio.Button className={styles.mediatorItem} value={mediator.id} key={`select_mediator_${mediator.id}`}>
            <MemberCard mediator={mediator} />
          </Radio.Button>
        ))}
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
