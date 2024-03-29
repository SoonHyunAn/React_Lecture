// uuid 라이브러리는 다양한 종류의 UUID를 생성할 수 있도록 여러 함수를 제공하는데, 
// v4 함수는 랜덤하고 고유한 UUID를 생성합니다.
import '../apps/App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { MdLibraryAddCheck } from "react-icons/md";
import { Button, Form, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');
  const handleChange = (event) => setText(event.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0)
      return;
    onAdd({ id: uuidv4(), work: text, status: 'active' });
    setText('');
  }
  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      <input type='text' placeholder='할 일을 입력하세요.' value={text}
        onChange={handleChange} />
      <Button variant="danger" onClick={handleSubmit}>
        <MdLibraryAddCheck /> 추가
      </Button>
    </form>
  );
}