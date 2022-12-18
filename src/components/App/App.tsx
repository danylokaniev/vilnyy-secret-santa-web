import React from 'react';
import Description from '../Description/Description';
import Header from '../Header/Header';
import Title from '../Title/Title';
import TotalCollect from '../TotalCollect/TotalCollect';
import style from './App.module.css';

function App() {
  return (
    <div className={style.app} style={{ backgroundImage: 'url(/img/background.png)' }}>
      <Header />
      <Title />
      <Description />
      <TotalCollect />
    </div>
  );
}

export default App;
