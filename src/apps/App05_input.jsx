import logo from '../logo.svg';
import './App.css';
import CardInput from '../components/CardInput';
import CardInput2 from '../components/CardInput2';

function App() {

  return (
    <>
      <CardInput name={'제임스'}/>
      <br />
      <CardInput name={'마리아'}/>
      <br />
      <CardInput2 name={'브라이언'} email={'brian@naver.com'}/>
      <br />
    </>
  );
}

export default App;
