import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { TodoProvider } from './context/todoContext';
import { Header } from './components/Header/Header';
import { ThemeProvider } from './context/themeContext';
import Modal from './components/Modal/Modal';
import AddNewTodo from './components/AddNewTodo/AddNewTodo';
import { ActionBlock } from './components/ActionBlock/ActionBlock';
import { filteredTodos } from './helpers/helpers';
import { Todos } from './components/Todos/Todos';
import mock from './mock/mock.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      theme: 'light',
      showModal: false,
      search: '',
    };
  }

  componentDidMount() {
    this.getTodos();
    document.documentElement.dataset.theme = this.state.theme;
    const currentPath = window.location.pathname;
    if (currentPath === '/') {
      window.location.replace('/active');
      return null;
    }
  }

  componentDidUpdate() {
    document.documentElement.dataset.theme = this.state.theme;
  }

  getTodos = () => {
    const storedTodos = localStorage.getItem('todos');
    const todos = storedTodos && JSON.parse(storedTodos);

    todos ? this.setState({ todos }) : this.setState([]);
  };

  saveTodos = () => {
    const { todos } = this.state;
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  updateTodosState = (todos) => {
    this.setState({ todos }, this.saveTodos);
  };

  addTodo = (title, description = '') => {
    const { todos } = this.state;
    const newTodo = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };
    const updatedTodos = [...todos, newTodo];
    this.updateTodosState(updatedTodos);
  };

  toggleTheme = () => {
    this.setState((prevState) => ({
      theme: prevState.theme === 'light' ? 'dark' : 'light',
    }));
  };

  showModal = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  };

  handleSearch = (searchText) => {
    console.log(searchText);
    this.setState({
      search: searchText,
    });
  };

  render() {
    const { todos, theme, showModal, search } = this.state;
    

    const contextTodo = {
      todos,
      updateTodosState: this.updateTodosState,
      addTodo: this.addTodo,
      search,
    };

    const contextTheme = {
      theme: theme,
      toggleTheme: this.toggleTheme,
    };

    return (
      <ThemeProvider value={contextTheme}>
        <TodoProvider value={contextTodo}>
          <Header />
          <Layout>
            <ActionBlock showModal={this.showModal} handleSearch={this.handleSearch} />
            <Routes>
              <Route
                path="/active"
                element={<Todos filteredTodos={filteredTodos(todos, search, 'active')} title={'Список активных дел'} />}
              />
              <Route
                path="/done"
                element={
                  <Todos filteredTodos={filteredTodos(todos, search, 'done')} title={'Список выполненных дел'} />
                }
              />
              <Route
                path="/arhive"
                element={<Todos filteredTodos={filteredTodos(todos, search, 'arhive')} title={'Список архивных дел'} />}
              />

              <Route path="*" element={<div>Страница не найдена</div>} />
            </Routes>
          </Layout>
          {showModal && (
            <Modal toggle={this.showModal}>
              <AddNewTodo addTodo={this.addTodo} close={this.showModal} />
            </Modal>
          )}
        </TodoProvider>
      </ThemeProvider>
    );
  }
}
export default App;
