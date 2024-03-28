import logo from '../logo.svg';
import './App.css';
import Card2 from '../components/Card2';

function App() {
  const james = {id:1, name: 'James', job: 'Back-end'}; 
  const maria = {id:2, name: 'Maria', job: 'React JS'};
  return (
    <>
      <Card2 person={james}/>
      <br />
      <Card2 person={maria}/>
    </>
  );
}

export default App;

// 반복적인 태그가 필요하다면 components로 파일화
