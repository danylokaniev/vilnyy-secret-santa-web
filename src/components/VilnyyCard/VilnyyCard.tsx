import React from 'react';
import { MONO_BANK_URL } from '../../utils/constants';
import Button from '../Button/Button';
import ProgressBar from '../ProgressBar/ProgressBar';
import style from './VilnyyCard.module.css';

interface VilnyyCardProps {
  width: number;
  title: string;
  amountCollected: number;
  monoBankId: string;
}

const VilnyyCard: React.FC<VilnyyCardProps> = ({ width, title, amountCollected, monoBankId }) => {
  return (
    <div className={style.background}>
      <div className={style.title}>{title}</div>
      <div className={style.progress}>
        <ProgressBar width={width} amountCollected={amountCollected} />
        <Button title="Поповнити" size="small" link={`${MONO_BANK_URL}/${monoBankId}`} />
      </div>
    </div>
  );
};

export default VilnyyCard;
