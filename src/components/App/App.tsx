import React, { useEffect, useState } from 'react';
import { VilnyyBank } from '../../interfaces/vilnyy';
import Description from '../Description/Description';
import Header from '../Header/Header';
import Title from '../Title/Title';
import TotalCollect from '../TotalCollect/TotalCollect';
import VilnyyCards from '../VilnyyCards/VilnyyCards';
import { getLatestVilnyyBanks } from '../../api/getLatestBanks';
import style from './App.module.css';

function App() {
  const [vilnyyBanks, setVilnyyBanks] = useState<VilnyyBank[]>([]);

  useEffect(() => {
    const getVilnyysBanks = async () => {
      const banks = await getLatestVilnyyBanks();
      setVilnyyBanks(banks);
    };
    getVilnyysBanks();
  }, []);

  return (
    <div className={style.app} style={{ backgroundImage: 'url(/img/background.png)' }}>
      <Header />
      <Title />
      <Description />
      <TotalCollect banks={vilnyyBanks} />
      <VilnyyCards banks={vilnyyBanks} />
    </div>
  );
}

export default App;
