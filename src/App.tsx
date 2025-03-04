import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [subdomainContent, setSubdomainContent] = useState<string>('');

  useEffect(() => {
    // Obtendo o subdomínio a partir da URL
    const hostname = window.location.hostname;
    const subdomain = hostname.split('.')[0]; // Pega a parte do subdomínio

    // Definindo o conteúdo com base no subdomínio
    switch (subdomain) {
      case 'app1':
        setSubdomainContent('Conteúdo para App 1');
        break;
      case 'app2':
        setSubdomainContent('Conteúdo para App 2');
        break;
      default:
        setSubdomainContent('Conteúdo padrão para subdomínios não reconhecidos');
    }
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>{subdomainContent}</p>
      </div>
      <p className="read-the-docs">
        Clique nos logos do Vite e do React para saber mais
      </p>
    </>
  );
}

export default App;