import styles from './next-app-component.module.scss';

/* eslint-disable-next-line */
export interface NextAppComponentProps {}

export function NextAppComponent(props: NextAppComponentProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to NextAppComponent!</h1>
    </div>
  );
}

export default NextAppComponent;
