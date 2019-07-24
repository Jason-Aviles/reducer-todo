import React from 'react';

const Todos = (props) => {
   const {item,id,completed}=props.items
   console.log(props,"herehere")
    return (
        <div>
          <h1 className={completed ? 'strike'  : '' } onClick={()=>props.toggleItem(id)}>{item}</h1>
          <h1>{id}</h1>
          <h2>{ !completed ?'false' : 'true' }</h2>
        </div>
    );
};

export default Todos;