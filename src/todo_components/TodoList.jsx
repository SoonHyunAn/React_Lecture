import { useState } from 'react';
import '../apps/App.css';
import { FaRegTrashAlt } from "react-icons/fa";

export default function TodoList() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([
    { id: '1234', work: '공부하기', status: 'active' },
    { id: '4567', work: '청소하기', status: 'active' }
  ]);
  return (
    <div>
      <ul>
        {
          todos.map(todo => (
            <li>
              <input type="checkbox" id='{todo.id}' checked={todo.status === 'completed'}
                onChange={handleChange} />
              <label htmlFor="{todo.id}">{todo.work}</label>
            <button onClick={handleDelete}><FaRegTrashAlt /></button>
            </li>
          )
          )
        }
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='할 일을 입력하세요.' value={text} onChange={handleAdd}/>
        <button></button>
      </form>
    </div>
  );
}