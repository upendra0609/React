import {memo} from 'react'

const Child= ({ todos, addTodo }) => {
    console.log("child render");
    return (
      <>
        <button onClick={addTodo}>Add Todo</button>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
      </>
    );
  };

  export default memo(Child);