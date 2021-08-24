import { useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import classNames from 'classnames';
import { Rule } from 'rc-field-form/lib/interface';

import { rulesFields } from '@validations/rulesFields';
import FieldMask from '@components/fields/FieldMask';

import buttonsStyle from '@styles/ButtonsStyle.module.css';
import styles from '@styles/forms/PartnersRequestForm.module.css';

interface IPartners {
  name: string;
  email: string;
  phone: string;
  organization: string;
}

const PartnersRequestForm = () => {
  const onFinish = useCallback((values: IPartners): void => {
    console.log(values);
  }, []);

  return (
    <Form
      className={classNames(styles.form, 'partnersForm')}
      name="partners"
      onFinish={onFinish}
      requiredMark={false}
      scrollToFirstError
    >
      <Form.Item
        className={styles.item}
        label="Ф.И.О."
        name="name"
        rules={rulesFields.required}
      >
        <Input className={styles.formItem} />
      </Form.Item>

      <Form.Item
        className={styles.item}
        label="e-mail"
        name="email"
        rules={rulesFields.email as Rule[]}
      >
        <Input className={styles.formItem} type="email" />
      </Form.Item>

      <FieldMask
        className={classNames(styles.formItem, styles.phoneField)}
        label="номер телефона"
        mask="+7 (999) 999-99-99"
        name="phone"
        rules={rulesFields.phone}
      />
      <Form.Item
        className={styles.item}
        label="ИНН Вашей организации"
        name="organization"
        rules={rulesFields.required}
      >
        <Input className={styles.formItem} />
      </Form.Item>

      <Form.Item>
        <Button
          className={classNames(buttonsStyle.primaryButton, styles.button)}
          htmlType="submit"
          type="primary"
        >
          Отправить заявку
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PartnersRequestForm;
