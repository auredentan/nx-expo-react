import styles from './index.module.scss';

/* eslint-disable-next-line */
export interface NextAppPageProps {}

export function NextAppPage(props: NextAppPageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to NextAppPage!</h1>
    </div>
  );
}

export default NextAppPage;
