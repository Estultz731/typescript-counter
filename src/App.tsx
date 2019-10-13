import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const [countState, setCount] = useState(0);
  return (
    <div className='wrapper'>
      <button onClick={() => setCount(currentState => currentState - 1)}>
        -
      </button>
      {countState}
      <button onClick={() => setCount(currentState => currentState + 1)}>
        +
      </button>
    </div>
  );
};

export default App;
