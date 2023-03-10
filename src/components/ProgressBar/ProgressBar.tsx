import React from 'react';
import { NumericFormat } from 'react-number-format';
import style from './ProgressBar.module.css';

interface ProgressBarProps {
  width: number;
  percent?: number;
  amountCollected?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ width, percent, amountCollected }) => {
  const textContent = (
    <>
      {'Зібрано: '}
      {
        <NumericFormat
          decimalScale={0}
          value={amountCollected}
          displayType="text"
          thousandSeparator={' '}
          suffix={` грн`}
        />
      }
    </>
  );

  return (
    <div className={style.progress}>
      <div className={style.progressLine} style={{ width: `${width}%` }}>
        {amountCollected !== undefined ? (
          <div className={style.frontText}>{textContent}</div>
        ) : (
          <div className={style.percent}>
            {percent}
            <span>%</span>
          </div>
        )}
      </div>
      {amountCollected !== undefined && <div className={style.backText}>{textContent}</div>}
    </div>
  );
};

export default ProgressBar;
