import './App.css';

import { useState } from 'react';
import HelloWorld from './components/HelloWorld/HelloWorld';

function App() {
  const [title, setTitle] = useState('Шапка');
  return (
    <div className="App">
      {title}
      <HelloWorld text="Алёша"/>
    </div>
  );
}

export default App;
