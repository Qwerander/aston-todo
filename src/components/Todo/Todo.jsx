import { Component } from 'react';
import styles from './todo.module.css';
import { todoContext } from '../../context/todoContext';

export class Todo extends Component {
  static contextType = todoContext;

  handleDone = () => {
    const { todos } = this.context;
    const { id } = this.props;

    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done
        };
      }
      return todo;
    });

    this.context.updateTodosState(updatedTodos);
  }

  handleDelete = () => {
    const { todos } = this.context;
    const { id } = this.props;

    const updatedTodos = todos.filter(todo => todo.id !== id);

    this.context.updateTodosState(updatedTodos);
  }

  handleArchive = () => {
    const { todos } = this.context;
    const { id } = this.props;

    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          arhive: !todo.arhive
        };
      }
      return todo;
    });

    this.context.updateTodosState(updatedTodos);
  }
  render() {
    const { title, description, done, arhive } = this.props;

    return (
      <li className={styles.todo}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.content}>
          <p className={styles.descr}>{description}</p>

          <div className={styles.btnGroup}>
            {done ? (
              <button className={styles.btnDone} onClick={this.handleDone}>Не сделано</button>
            ) : (
              <button className={styles.btnDone} onClick={this.handleDone}>Сделано</button>
            )}
            <button className={styles.btnDel} onClick={this.handleDelete}>Удалить</button>
            {arhive ? (
              <button className={styles.btnArhive} onClick={this.handleArchive}>Из архива</button>
            ) : (
              <button className={styles.btnArhive} onClick={this.handleArchive}>В архив</button>
            )}
          </div>
        </div>
      </li>
    );
  }
}


