import { Component } from 'react';
import styles from './todoList.module.css';
import { Todo } from '../Todo/Todo';


export class TodoList extends Component {

  render() {
    const { filteredTodos } = this.props;
    console.log(filteredTodos);
      return (
        <ul className={styles.list}>
          {filteredTodos?.map(todo => {
            return <Todo
              key={todo.id}
              title={todo.title}
              description={todo.description}
              done={todo.done}
              arhive={todo.arhive}
              id={todo.id}
            />
          })}
        </ul>
      );
    }

  }


