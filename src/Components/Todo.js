import React, { useState, useEffect } from 'react';

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
    setArr(Object.keys(localStorage));
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  function deleteTodo(x) {
    localStorage.removeItem(x);
    fetchTodo();
  }

  return (
    <div className='container text-center'>
      <h1 className='mt-3 display-4'>My TODOs</h1>
      <div className="wrapper my-3">
        <div className="container my-3">
          {window.localStorage.length === 0 ? " You have nothing todo, Please do something..." :
            arr.map((e, index) => {
              return <div className="d-flex input" key={index}>
                <div className="flex-grow-1 m-1">
                  <input type="text" className="form-control disabled" defaultValue={localStorage.getItem(e)} />
                </div>
                <div className="m-1">
                  <button type="button" className="btn btn-primary actionBtn" onClick={() => { deleteTodo(e) }}><i className="fa-regular fa-trash-can"></i></button>
                </div>
              </div>
            })
          }
        </div>
      </div>
      <div className="wrapper">
        <div className="container my-3">
          <div className="d-flex input">
            <div className="flex-grow-1 m-1">
              <input type="text" className="form-control" value={text} onChange={handleOnChange} />
            </div>
            <div className="m-1">
              <button type="button" className="btn btn-primary accordion actionBtn" onClick={createTodo}><i className="fa-solid fa-plus"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo