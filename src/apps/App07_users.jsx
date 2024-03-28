import { useState } from 'react';
import logo from '../logo.svg';
import './App.css';
import User from '../components/User';
import User2 from '../components/User2';

function App() {

  return (
    <div>
     <User />
      <br />
     <User2 />
    </div>
  );
}

export default App;
