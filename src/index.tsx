import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import packageJson from '../package.json';
import './index.css';

console.log(`Vilnyy Charity Project v${packageJson.version}`);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
