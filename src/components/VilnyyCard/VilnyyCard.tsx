import React from 'react';
import Button from '../Button/Button';
import ProgressBar from '../ProgressBar/ProgressBar';
import style from './VilnyyCard.module.css';

interface VilnyyCardProps {
  percent: number;
  title: string;
  amountCollected: number;
}

const VilnyyCard: React.FC<VilnyyCardProps> = ({ percent, title, amountCollected }) => {
  return (
    <div className={style.background}>
      <div className={style.title}>{title}</div>
      <div className={style.progress}>
        <ProgressBar percent={percent} amountCollected={amountCollected} />
        <Button title="Поповнити" size="small" />
      </div>
    </div>
  );
};

export default VilnyyCard;
