import logo from '../logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setcount] = useState(0);
  const [number, setNumber] =useState([]);
  const handleClick = () => {
    setcount(count+1);
    setNumber([...number, count+1, ' ']); // 새로운 객체 생성
    // 오류 코드  - 리엑트 비권장
    // setNumber(number.push(count+1)) 
    console.log(count);
  }
  return (
    <>
      <div className='count'>{count}</div>
      <h3>{number}</h3>
      <button onClick={handleClick}>증가하기</button>
    </>
  );
}

export default App;
