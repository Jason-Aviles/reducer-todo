export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = " TOGGLE_TODO";
export const CLEAR_TODO = "CLEAR_TODO";

export const initialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589
    }
  ]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        item: action.payload,
        id: Date.now(),
        completed: false
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(items => {
          if (action.payload === items.id) {
            return { ...items, completed: !items.completed };
          }
          return items;
        })
      };
    case CLEAR_TODO:
      return {...state, todos: state.todos.filter(todo => !todo.completed)};
    default:
      return state;
  }
};
