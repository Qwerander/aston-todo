export const filteredTodos = (todos, search, status) => {
  let filteredTodos = [...todos];
  if (search) {
    return filteredTodos.filter((todo) => todo.title.toLowerCase().includes(search.toLowerCase()));
  }
  switch (status) {
    case 'active':
      filteredTodos = filteredTodos?.filter((todo) => !todo.done && !todo.arhive);
      break;
    case 'done':
      filteredTodos = filteredTodos?.filter((todo) => todo.done && !todo.arhive);
      break;
    case 'arhive':
      filteredTodos = filteredTodos?.filter((todo) => todo.arhive);
      break;
    default:
      break;
  }

  return filteredTodos;
};
