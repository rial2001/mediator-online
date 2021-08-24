import { FC, memo, useCallback, useState } from 'react';
import { Button, Checkbox, Form, Input, Typography } from 'antd';
import classNames from 'classnames';
import { Rule, ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import FieldMask from '@components/fields/FieldMask';
import { rulesFields } from '@validations/rulesFields';
import { maskField } from '@constants/maskField';
import { workActions } from '@redux/work/workActions';
import { newDisputeSelector } from '@redux/work/workSelectors';
import { initialValuesForm, meetingForm } from '@constants/initialValuesForm';
import { INewDispute } from '@models/dispute';

import buttonsStyle from '@styles/ButtonsStyle.module.css';
import styles from '@styles/forms/NewDisputeForm.module.css';

interface INewDisputeForm {
  setDisable: (boolean) => void;
  activeTab: (key: string) => void;
  error?: string;
}

const NewDisputeForm: FC<INewDisputeForm> = ({
  activeTab,
  error,
  setDisable,
}) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState<boolean>();
  const [disabledEmail, setDisabledEmail] = useState<boolean>();
  const [rulesEmail, setRulesEmail] = useState<Rule[]>();

  const router = useRouter();
  const initialValues = useSelector(newDisputeSelector);

  const onFinish = useCallback(
    (values: INewDispute): void => {
      dispatch(workActions.openDispute(values));
      setDisable(false);
      activeTab('second');
    },
    [setDisable, activeTab, dispatch]
  );

  const onFinishFailed = useCallback(
    (errorInfo: ValidateErrorEntity<INewDispute>): void => {
      console.log(errorInfo);
      setDisable(true);
    },
    [setDisable]
  );

  const onChangeForm = () => {
    const values = form.getFieldsValue();

    setDisabled(values.isMediator);
    setDisabledEmail(values.isEmail);

    if (values.isEmail) {
      setRulesEmail([]);
      form.setFieldsValue({ secondMember: '' });
    } else {
      setRulesEmail(rulesFields.email);
    }
  };

  const clickChooseMediator = useCallback(() => {
    const values = form.getFieldsValue();

    dispatch(workActions.openDispute(values));
    router.push('/work/choose-mediator');
  }, [dispatch, router, form]);

  return (
    <Form
      className={classNames(styles.form, 'formDispute')}
      form={form}
      initialValues={{ ...initialValuesForm.newDispute, ...initialValues }}
      layout="vertical"
      name="new-dispute"
      onChange={onChangeForm}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      requiredMark={false}
    >
      <Form.Item
        className={styles.formItem}
        label="Категория"
        name="category"
        rules={rulesFields.required}
      >
        <Input />
      </Form.Item>

      <Form.Item
        className={styles.formItem}
        label="Краткое описание"
        name="description"
        rules={rulesFields.required}
      >
        <Input.TextArea className={styles.description} />
      </Form.Item>
      <Form.Item
        className={styles.formItem}
        label="Ваш регион"
        name="geo"
        rules={rulesFields.required}
      >
        <Input />
      </Form.Item>

      <Form.Item className={styles.formItem}>
        <Input.Group prefixCls="secondMember">
          <Form.Item
            className={classNames(styles.secondMember, 'secondMemberField')}
            label="Вторая сторона"
            name="secondMember"
            rules={rulesEmail}
          >
            <Input disabled={disabledEmail} placeholder="e-mail" />
          </Form.Item>
          <Form.Item
            className={classNames(styles.isEmailCheckBox, 'email-checkbox')}
            name="isEmail"
            valuePropName="checked"
          >
            <Checkbox>e-mail мне не известен</Checkbox>
          </Form.Item>
        </Input.Group>
      </Form.Item>

      <Form.Item
        className={styles.formItem}
        label="Выберите удобное для Вас время для предварительной встречи Сторон с медиатором"
      >
        <Input.Group className={classNames(styles.date, 'dateGroup')}>
          <FieldMask
            className={styles.dateItem}
            label="Дата"
            name="date"
            placeholder="Дата"
            rules={rulesFields.date}
            {...maskField.date}
          />

          <FieldMask
            className={styles.dateItem}
            label="Время"
            name="time"
            placeholder="Время"
            rules={rulesFields.time}
            {...maskField.time}
          />
        </Input.Group>
      </Form.Item>

      <Form.Item
        className={styles.formItem}
        label="Форма встречи, сообщения"
        name="meetingForm"
        rules={rulesFields.required}
      >
        <Checkbox.Group className={styles.meetGroup} options={meetingForm} />
      </Form.Item>
      <Form.Item
        className={classNames(styles.formItem, 'mediatorField')}
        label="Медиатор"
      >
        <Form.Item name="isMediator" valuePropName="checked">
          <Checkbox>Подбор медиатора Сервисом</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button
            className={classNames(
              buttonsStyle.defaultButton,
              styles.openMediator
            )}
            disabled={disabled}
            onClick={clickChooseMediator}
          >
            Выбрать
          </Button>
        </Form.Item>
      </Form.Item>

      {error && (
        <div className={styles.errorMessage}>
          <Typography.Text className={styles.errorMessage}>
            {error}
          </Typography.Text>
        </div>
      )}

      <Form.Item className={styles.nextButtonBlock}>
        <Button
          className={classNames(buttonsStyle.defaultButton, styles.nextButton)}
          htmlType="submit"
          size="large"
        >
          Открыть спор
        </Button>
      </Form.Item>
    </Form>
  );
};

export default memo(NewDisputeForm);
