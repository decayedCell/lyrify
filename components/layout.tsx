import {ReactElement} from 'react';

import styles from './layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({children}: LayoutProps) {
  return <div className={styles.container}>{children}</div>;
}
