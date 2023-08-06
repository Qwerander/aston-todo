import { Component } from 'react';
import styles from './layout.module.css';

export class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className={styles.layout} >
        {children}
      </div>
    );
  }
}


