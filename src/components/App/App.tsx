import React, { useEffect, useState } from 'react';
import { VilnyyBank } from '../../interfaces/vilnyy';
import Description from '../Description/Description';
import Header from '../Header/Header';
import Title from '../Title/Title';
import TotalCollect from '../TotalCollect/TotalCollect';
import VilnyyCards from '../VilnyyCards/VilnyyCards';
import { getLatestVilnyyBanks } from '../../api/getLatestBanks';
import style from './App.module.css';

const App = () => {
  const [vilnyyBanks, setVilnyyBanks] = useState<VilnyyBank[]>([]);

  useEffect(() => {
    const updateVilnyysBanks = async () => {
      const banks = await getLatestVilnyyBanks();
      setVilnyyBanks(banks);
    };

    const banksUpdateInterval = setInterval(() => updateVilnyysBanks(), 2 * 60 * 1000);
    updateVilnyysBanks();

    return () => clearInterval(banksUpdateInterval);
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
};

export default App;
