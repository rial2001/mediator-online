import { FC } from 'react';
import { Input, Form } from 'antd';
import InputMask from 'react-input-mask';
import { Rule } from 'rc-field-form/lib/interface';

interface IFieldMask {
  className?: string;
  mask: string | RegExp;
  rules: Rule[];
  label?: string;
  name: string;
  formatChars?: { [K: number]: string };
  beforeMaskedValueChange?: boolean;
  placeholder?: string;
}

const FieldMask: FC<IFieldMask> = ({
  beforeMaskedValueChange,
  className,
  formatChars,
  label,
  mask,
  name,
  placeholder,
  rules,
}) => (
  <Form.Item label={label} name={name} rules={rules as Rule[]}>
    <InputMask
      autoComplete="off"
      beforeMaskedValueChange={beforeMaskedValueChange}
      formatChars={formatChars}
      mask={mask}
    >
      {({ ...props }) => (
        <Input className={className} {...props} placeholder={placeholder} />
      )}
    </InputMask>
  </Form.Item>
);

export default FieldMask;
