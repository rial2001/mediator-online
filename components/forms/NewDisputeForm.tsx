import { FC, memo, useCallback, useState } from 'react';
import { Button, Checkbox, Form, Input, Typography, TreeSelect } from 'antd';
import classNames from 'classnames';
import { Rule, ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import FieldMask from '@components/fields/FieldMask';
import { rulesFields } from '@validations/rulesFields';
import { maskField } from '@constants/maskField';
import { initialValuesForm, meetingForm } from '@constants/initialValuesForm';
import useAuth from '@hooks/useAuth';
import {create} from '@redux/dispute';

import buttonsStyle from '@styles/ButtonsStyle.module.css';
import styles from '@styles/forms/NewDisputeForm.module.css';
import categories from '@configs/categories.json';

const { TreeNode } = TreeSelect;

interface CategoryItem {
  title: string;
  value: string;
  items?: Array<CategoryItem>;
}

const CategoryItemView = (category: CategoryItem) => {
  if(!category.items) {
    return (
      <TreeNode key={category.value} value={category.value} title={category.title} />
    )
  }
  return (
    <TreeNode key={category.value} value={category.value} title={category.title} selectable={false}>
      {category.items.map(item => CategoryItemView(item))}
    </TreeNode>
  )
}

const Categories = () => {
  return categories.map(item => CategoryItemView(item)) 
}

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
  const [disabled, setDisabled] = useState<boolean>();
  const [disabledEmail, setDisabledEmail] = useState<boolean>();
  const [rulesEmail, setRulesEmail] = useState<Rule[]>();
  const {user} = useAuth();
  const mediators = useSelector<any, any>(state => state.mediators.mediators)

  const router = useRouter();
  const dispatcher = useDispatch()

  const onFinish = useCallback(
    (values: any): void => {
      dispatcher(create({
        ...values,
        userId: user.id,
        mediatorId: mediators[0].id,
        meetingForm: "some connection"
      }))
      setDisable(false);
      activeTab('second');
    },
    [setDisable, activeTab]
  );

  const onFinishFailed = useCallback(
    (errorInfo: ValidateErrorEntity<any>): void => {
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
    //const values = form.getFieldsValue();
    router.push('/work/choose-mediator');
  }, [router, form]);

  return (
    <Form
      className={classNames(styles.form, 'formDispute')}
      form={form}
      initialValues={{ ...initialValuesForm.newDispute }}
      layout="vertical"
      name="new-dispute"
      onChange={onChangeForm}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      requiredMark={false}
    >
      <Form.Item
        className={styles.formItem}
        label="??????????????????"
        name="category"
        rules={rulesFields.required}
      >
        <TreeSelect treeDefaultExpandAll style={{border: "1px solid #000000"}}>
          {Categories()}
        </TreeSelect>
      </Form.Item>

      <Form.Item
        className={styles.formItem}
        label="?????????????? ????????????????"
        name="description"
        rules={rulesFields.required}
      >
        <Input.TextArea className={styles.description} />
      </Form.Item>
      <Form.Item
        className={styles.formItem}
        label="?????? ????????????"
        name="geo"
        rules={rulesFields.required}
      >
        <Input />
      </Form.Item>

      <Form.Item className={styles.formItem}>
        <Input.Group prefixCls="secondMember">
          <Form.Item
            className={classNames(styles.secondMember, 'secondMemberField')}
            label="???????????? ??????????????"
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
            <Checkbox>e-mail ?????? ???? ????????????????</Checkbox>
          </Form.Item>
        </Input.Group>
      </Form.Item>

      <Form.Item
        className={styles.formItem}
        label="???????????????? ?????????????? ?????? ?????? ?????????? ?????? ?????????????????????????????? ?????????????? ???????????? ?? ????????????????????"
      >
        <Input.Group className={classNames(styles.date, 'dateGroup')}>
          <FieldMask
            className={styles.dateItem}
            label="????????"
            name="date"
            placeholder="????????"
            rules={rulesFields.date}
            {...maskField.date}
          />

          <FieldMask
            className={styles.dateItem}
            label="??????????"
            name="time"
            placeholder="??????????"
            rules={rulesFields.time}
            {...maskField.time}
          />
        </Input.Group>
      </Form.Item>

      <Form.Item
        className={styles.formItem}
        label="?????????? ??????????????, ??????????????????"
        name="meetingForm"
        rules={rulesFields.required}
      >
        <Checkbox.Group className={styles.meetGroup} options={meetingForm} />
      </Form.Item>
      <Form.Item
        className={classNames(styles.formItem, 'mediatorField')}
        label="????????????????"
      >
        <Form.Item name="isMediator" valuePropName="checked">
          <Checkbox>???????????? ?????????????????? ????????????????</Checkbox>
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
            ??????????????
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
          ?????????????? ????????
        </Button>
      </Form.Item>
    </Form>
  );
};

export default memo(NewDisputeForm);
