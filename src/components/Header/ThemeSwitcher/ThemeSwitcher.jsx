import { Component } from 'react';
import styles from './themeSwitcher.module.css';
import moon from '../../../img/moon.png'
import sun from '../../../img/sun.png'
import { themeContext } from '../../../context/themeContext';

export class ThemeSwither extends Component {
  static contextType = themeContext;

  handleClick = () => {
    const { toggleTheme } = this.context
    toggleTheme()
  };

  render() {
    const { theme } = this.context

    return (
      <div className={styles.themeSwicher}>
        <img className={styles.img} src={moon} alt="Темная тема" />
        <label className={styles.switch} >
          <input
            type='checkbox'
            onClick={this.handleClick}
            defaultChecked={theme === 'light' ? true : false}
          />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
        <img className={styles.img} src={sun} alt="Светлая тема" />
      </div>
    );
  }
}


