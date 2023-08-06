import { Component } from 'react';
import styles from './header.module.css';
import { NavLink } from 'react-router-dom';
import { ThemeSwither } from './ThemeSwitcher/ThemeSwitcher';

export class Header extends Component {
  
  render() {
 
    return (
      <header className={styles.header}>
        <nav className={styles.nav}>
          <NavLink to={'/active'} className={styles.link}>
            Активные
          </NavLink>
          <NavLink to={'/done'} className={styles.link}>
            Выполненные
          </NavLink>
          <NavLink to={'/arhive'} className={styles.link}>
            Архив
          </NavLink>
        </nav>
        <ThemeSwither />
      </header>
    );
  }
}


