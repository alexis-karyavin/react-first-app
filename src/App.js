import './App.css';

import { useState } from 'react';
import HelloWorld from './components/HelloWorld/HelloWorld';

function App() {
  const [title] = useState('Шапка');
  return (
    <div className="App">
      {title}
      <HelloWorld text="Алёша"/>
    </div>
  );
}

export default App;
