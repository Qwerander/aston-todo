import { Component } from 'react';
import { TodoList } from '../TodoList/TodoList';
import { Title } from '../Title/Title';


export class Todos extends Component {
  render() {
    const { filteredTodos, title } = this.props;

    return (
      <>
        <Title title={title} />
        <TodoList filteredTodos={filteredTodos} />
      </>
    );
  }
}

