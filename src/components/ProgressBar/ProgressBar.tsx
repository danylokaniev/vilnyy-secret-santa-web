import React from 'react';
import style from './ProgressBar.module.css';

interface ProgressBarProps {
  now: number;
  amountCollected?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ now, amountCollected }) => {
  return (
    <div className={style.progress}>
      <div className={style.progressLine} style={{ width: `${now}%` }}>
        {!amountCollected ? (
          <div className={style.percent}>{`${now}%`}</div>
        ) : (
          <div className={style.amountCollected}>
            {'Зібрано: '}
            {/* TODO: Put NumberFormat instead of plain string */}
            {amountCollected}
            {'грн'}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
