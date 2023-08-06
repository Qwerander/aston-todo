import { Component } from 'react';
import styles from './actionBlock.module.css';
import SearchTodo from '../SearchTodo/SearсhTodo';

export class ActionBlock extends Component {

    render() {

        return (
            <div className={styles.block}>
                <button className={styles.btn} onClick={this.props.showModal}>Новое дело</button>
                <SearchTodo handleSearch={this.props.handleSearch} />
            </div>
        );
    }
}


