import React from 'react';
import style from './ProgressBar.module.css';

interface ProgressBarProps {
  width: number;
  percent?: number;
  amountCollected?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ width, percent, amountCollected }) => {
  return (
    <div className={style.progress}>
      <div className={style.progressLine} style={{ width: `${width < 7 ? 5 : width}%` }}>
        {!amountCollected ? (
          <div className={style.percent}>{`${percent}%`}</div>
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
