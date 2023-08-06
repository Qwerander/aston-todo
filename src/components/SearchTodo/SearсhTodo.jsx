import React, { Component } from 'react';
import styles from './searchTodo.module.css';
import { ReactComponent as Search } from '../../img/search.svg';
import { ReactComponent as Reset } from '../../img/search-reset.svg';

class SearchTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.timeoutId = null;
  }

  handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.setState({
      searchTerm: searchTerm
    });

    this.timeoutId = setTimeout(() => {
      this.props.handleSearch(searchTerm);
    }, 500); // 0,5 секунды
  };

  handleReset = () => {
    this.setState({
      searchTerm: ''
    });
    this.props.handleSearch('');
  }

  render() {
    const { searchTerm } = this.state;

    return (
      <label className={styles.label}>
        <input
          className={styles.input}
          type="text"
          placeholder="Поиск по заголовку..."
          value={searchTerm}
          onChange={this.handleSearchChange}
        />
        {searchTerm
          ? <Reset className={styles.reset} onClick={this.handleReset} />
          : <Search />
        }
      </label>
    );
  }
}

export default SearchTodo;
