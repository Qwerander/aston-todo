import { Component } from 'react';
import styles from './title.module.css';

export class Title extends Component {
  render() {
    const { title } = this.props
    return (
      <h1 className={styles.title}>{title}</h1>
    );
  }
}


