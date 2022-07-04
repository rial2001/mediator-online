import { FC, useCallback, useEffect, useState } from 'react';
import { Button, Form, Input, Typography } from 'antd';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';

import { rulesFields } from '@validations/rulesFields';
import { confirmCode } from '@redux/user';
import { IRegistrationUser } from '@models/users';
import {userService} from '@services/user'

import styles from '@styles/forms/ConfirmCodeForm.module.css';
import buttonsStyle from '@styles/ButtonsStyle.module.css';

interface IConfirmCode {
  user?: IRegistrationUser;
  clickBack: (key: string) => void;
}

const leadZero = (val: number) => val <= 9 ? `0${val}` : val

const ConfirmCodeForm: FC<IConfirmCode> = ({ clickBack, user }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [intervalRef, setIntervalRef] = useState<any>(null)
  const [cutdown, setCutdown] = useState(600);

  useEffect(() => {
    const hnd = async () => {
      try {
        await userService.sendPhoneCode()
      } catch (err) {
        console.log(err)
      }
    }
    hnd()
    const intervalId = setInterval(() => {
      setCutdown((val) => val - 1)
    }, 1000)
    setIntervalRef(intervalId)
  }, [])

  useEffect(() => {
    if(cutdown <= 0) {
      clearInterval(intervalRef)
    }
  }, [cutdown])

  const onFinish = useCallback(
    (values: { code: string }): void => {
      dispatch(confirmCode(values.code));
    },
    [dispatch, user]
  );

  const resendCodeHandler = async () => {
    if(cutdown <= 0) {
      try {
        await userService.sendPhoneCode()
      } catch (err) {
        console.log(err)
      }
      setCutdown(600)
      clearInterval(intervalRef)
      const intervalId = setInterval(() => {
        setCutdown((val) => val - 1)
      }, 1000)
      setIntervalRef(intervalId)
    }
  };

  return (
    <Form
      className={styles.confirmCodeForm}
      form={form}
      layout="vertical"
      name="confirmCode"
      onFinish={onFinish}
      requiredMark={false}
      scrollToFirstError
    >
      <Form.Item
        className={styles.item}
        label="Введите код из смс"
        name="code"
        rules={rulesFields.required}
      >
        <Input className={styles.confirmCodeField} />
      </Form.Item>
      <Form.Item className={styles.item}>
        <Typography.Link
          className={styles.resendCode}
          onClick={resendCodeHandler}
        >
          {cutdown > 0 ? (`отправить повторно через ${Math.floor(cutdown / 60)}:${leadZero(cutdown % 60)}`) : ("отправить повторно")}
        </Typography.Link>
      </Form.Item>

      <Form.Item className={styles.buttonsBlock}>
        <Button
          className={classNames(buttonsStyle.defaultButton, styles.formButton)}
          onClick={() => clickBack('first')}
        >
          назад
        </Button>
        <Button
          className={classNames(buttonsStyle.defaultButton, styles.formButton)}
          htmlType="submit"
        >
          далее
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ConfirmCodeForm;
