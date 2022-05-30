import { validationExpression } from '@validations/validationExpression';

export const rulesFields = {
  date: [
    ({ getFieldValue }) => ({
      validator(_, value) {
        const isValid = new RegExp(validationExpression.date).test(value);

        if (!value || !isValid) {
          return Promise.reject(new Error('Введите правильную дату!'));
        }

        return Promise.resolve();
      },
    }),
  ],

  email: [
    ({ getFieldValue }) => ({
      validator(_, value) {
        const isValid = new RegExp(validationExpression.email).test(value);

        if (!value || !isValid) {
          return Promise.reject(new Error('Введите правильный E-mail!'));
        }

        return Promise.resolve();
      },
    }),
  ],

  phone: [
    ({ getFieldValue }) => ({
      validator(_, value) {
        const isValid = new RegExp(validationExpression.tel).test(value);

        if (!value || !isValid) {
          return Promise.reject(new Error('Введите правильный номер!'));
        }

        return Promise.resolve();
      },
    }),
  ],
  required: [{ message: 'Обязательное поле!', required: true }],
  time: [
    ({ getFieldValue }) => ({
      validator(_, value) {
        const isValid = new RegExp(validationExpression.time).test(value);

        if (!value || !isValid) {
          return Promise.reject(new Error('Введите правильное время!'));
        }

        return Promise.resolve();
      },
    }),
  ],
  repeat: [
    ({getFieldValue}) => ({
      validator(rule, value) {
        if(!value || getFieldValue('password') === value) {
          return Promise.resolve();
        }
        return Promise.reject('Пароли не совпадают!');
      }
    }),
    { message: 'Обязательное поле!', required: true }
  ]
};
