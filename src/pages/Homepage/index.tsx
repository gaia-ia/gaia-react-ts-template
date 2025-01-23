import { Body, Title } from '@components';

import styles from './styles.module.css';

const Homepage = () => {
  return (
    <div className={styles.container}>
      <Title>Welcome to GaIA React + TypeScript Template</Title>
      <Body>
        This is a template for a React + TypeScript project with a basic
        configuration.
      </Body>
    </div>
  );
};

export default Homepage;
