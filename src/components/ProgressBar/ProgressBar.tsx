import React from 'react';
import { NumericFormat } from 'react-number-format';
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
            {
              <NumericFormat
                decimalScale={0}
                value={amountCollected}
                displayType="text"
                thousandSeparator={' '}
                suffix={` грн`}
              />
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
