import React,{useReducer} from "react";

import "./App.css";

import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import {
  ADD_TODO,
  TOGGLE_TODO,
  CLEAR_TODO,
  reducer,
  initialState
} from "./reducer";

function App() {

const [state,dispatch]= useReducer(reducer,initialState)


const addItem = (e, item) => {
  e.preventDefault();
  dispatch({ type: ADD_TODO, payload: item });
};

const toggleItem = itemId => {
  dispatch({ type: TOGGLE_TODO, payload: itemId });
};

const clearTodo = e => {
  e.preventDefault();
  dispatch({ type: CLEAR_TODO });
};
  return( <div className="App" >


<AddTodo addItem={addItem}/>

<TodoList
todolist={state.todos}
clearTodo={clearTodo}
toggleItem={toggleItem}
/>

  </div>);
}

export default App;
