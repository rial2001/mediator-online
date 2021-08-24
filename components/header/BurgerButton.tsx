import { FC } from 'react';

import styles from '@styles/header/BurgerMenuStyle.module.css';

interface IBurgerMenuButton {
  onClick: () => void;
}

const BurgerButton: FC<IBurgerMenuButton> = ({ ...props }) => (
  <button className={styles.burgerMenu} type="button" {...props}>
    <span className={styles.burgerItem}> </span>
  </button>
);

export default BurgerButton;
