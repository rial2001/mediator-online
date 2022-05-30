import { FC, memo, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Input } from 'antd';
import classNames from 'classnames';

import { update } from '@redux/user';
import useAuth from '@hooks/useAuth';

import buttonStyles from '@styles/ButtonsStyle.module.css';
import styles from '@styles/account/UserInfo.module.css';

interface IChangeInfoField {
  fieldName: string;
  type?: string;
  className?: string;
}

const ChangeInfoField: FC<IChangeInfoField> = ({
  className,
  fieldName,
  type,
}) => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const [readonly, setReadonly] = useState<{ [K: string]: boolean }>({
    address: true,
    city: true,
    email: true,
    name: true,
    password: true,
    phone: true,
    statusDispute: true,
    statusPay: true,
    support: true,
    timeZone: true,
  });

  const [userInfo, setUserInfo] = useState<{ [K: string]: string }>({
    address: user.address,
    city: user.city,
    email: user.email,
    name: user.name,
    password: user.password,
    phone: user.phone,
    statusDispute: user.statusDispute,
    statusPay: user.statusPay,
    support: user.support,
    timeZone: user.timeZone,
  });

  const [userInfoPlaceholder, setUserInfoPlaceholder] = useState<{
    [K: string]: string;
  }>({
    address: user.address,
    city: user.city,
    email: user.email,
    name: user.name,
    password: user.password,
    phone: user.phone,
    statusDispute: user.statusDispute,
    statusPay: user.statusPay,
    support: user.support,
    timeZone: user.timeZone,
  });

  const onChange = useCallback(
    event => {
      setUserInfo({
        ...userInfo,
        [event.target.name]: event.target.value,
      });
    },

    [userInfo]
  );

  const modifyClick = useCallback(
    event => {
      event.stopPropagation();

      const { name } = event.currentTarget;

      setReadonly({
        ...readonly,
        [name]: false,
      });
    },
    [readonly]
  );

  const modifyInfoHandler = useCallback(
    event => {
      const { name } = event.currentTarget;
      const value = userInfo[name];

      dispatch(update({...user, [name]: value }));

      setReadonly({
        ...readonly,
        [name]: true,
      });

      setUserInfoPlaceholder({
        ...userInfoPlaceholder,
        [name]: value,
      });
    },
    [dispatch, readonly, userInfo, userInfoPlaceholder]
  );

  const onFocus = useCallback(event => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: '',
    });
  }, []);

  return (
    <div className={classNames(styles.textBlock, className)}>
      <Input
        autoComplete="off"
        className={styles.textInto}
        name={fieldName}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={userInfoPlaceholder[fieldName]}
        readOnly={readonly[fieldName]}
        type={type}
        value={userInfo[fieldName]}
      />

      <Button
        className={buttonStyles.textButton}
        name={fieldName}
        onClick={readonly[fieldName] ? modifyClick : modifyInfoHandler}
        type="text"
      >
        {readonly[fieldName] ? 'ред' : 'сохранить'}
      </Button>
    </div>
  );
};

export default memo(ChangeInfoField);
