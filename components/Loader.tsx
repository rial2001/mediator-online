import { FC } from 'react';
import { Spin } from 'antd';

import styles from '@styles/Loader.module.css';

const Loader: FC = () => <Spin className={styles.loader} />;

export default Loader;
