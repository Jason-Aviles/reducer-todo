import React from 'react';
import TODOS from './Todos'
const TodoList = (props) => {
    console.log(props)
    return (
        <div>
         <ul>{props.todolist.map((items,i) => <TODOS key={i} items={items} toggleItem={props.toggleItem}/>)} </ul>  
         <button onClick={props.clearTodo}>Delete</button>
        </div>
    );
};

export default TodoList;