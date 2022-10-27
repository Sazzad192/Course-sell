import { useState } from 'react';
import './App.css';
import Route from './router/Route'

function App() {

  const [theme, setTheme] = useState('light');

  const themeToggler = () =>{
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }
  return (
    <div className="App">
      <Route></Route>
    </div>
  );
}

export default App;
