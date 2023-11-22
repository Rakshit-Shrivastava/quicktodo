import React, { useState, useEffect } from 'react'

const Todo = () => {
  const [text, setText] = useState('');
  const [arr, setArr] = useState([]);

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const createTodo = () => {
    localStorage.setItem((localStorage.length + 1).toString(), text);
    window.location.reload();
  }

  function fetchTodo() {
    setArr(Object.keys(localStorage))
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  function deleteTodo(x) {
    localStorage.removeItem(x);
    fetchTodo();
    alert("Todo has been deleted");
    window.location.reload();
  }

  return (
    <div className='container text-center'>
      <h1>My TODOs</h1>
      <div className='todoContainer container'>
        <ul className='viewPan'>
          {arr.map((e, index) => {
            return <li key={index}>
              <input type="text" value={localStorage.getItem(e)} disabled />
              <div className='buttonArea'>
                {/* <button>Complete</button> */}
                <button onClick={() => { deleteTodo(e) }}>Delete</button>
              </div>
            </li>
          })}
        </ul>
        <ul className='createTodo'>
          <li>
            <input type="text" value={text} onChange={handleOnChange} />
            <button onClick={createTodo}>Create Todo</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Todo