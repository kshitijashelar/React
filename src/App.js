import { useState } from 'react';
import './App.css';
import Greetings from './components/Greetings';

const App = () => {
  const [name, setName] = useState('Kshitija');

  return (
    <div className="App">
      {
        setTimeout(() => {
          setName('KS');
        }, 2000)
      }
      <Greetings name={name} greeting="buddy"/>
      
    </div>
  );
}

export default App;
