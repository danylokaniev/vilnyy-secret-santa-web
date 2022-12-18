import React from 'react';
import Header from '../Header/Header';
import style from './App.module.css';

function App() {
  return (
    <div className={style.app} style={{ backgroundImage: 'url(/img/background.png)' }}>
      <Header />
    </div>
  );
}

export default App;
