import { useState } from 'react'; // Importando apenas useState
import './App.css';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={theme}>
      <div className="container">
        <h1>{theme === 'light' ? 'Tema Claro' : 'Tema Escuro'}</h1>
        <p>
          {theme === 'light'
            ? 'Você está usando o tema claro! Clique no botão abaixo para mudar para o tema escuro.'
            : 'Você está usando o tema escuro! Clique no botão abaixo para mudar para o tema claro.'}
        </p>
        <button onClick={toggleTheme}>
          Mudar para {theme === 'light' ? 'Escuro' : 'Claro'}
        </button>
      </div>
    </div>
  );
}

export default App;