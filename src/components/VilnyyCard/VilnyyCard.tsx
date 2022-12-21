import React from 'react';
import { NumericFormat } from 'react-number-format';
import { MONO_BANK_URL } from '../../utils/constants';
import { Button } from '../Button/Button';
import ProgressBar from '../ProgressBar/ProgressBar';
import style from './VilnyyCard.module.css';

interface VilnyyCardProps {
  width: number;
  title: string;
  amountCollected: number;
  monoBankId: string;
  index: number;
}

const VilnyyCard: React.FC<VilnyyCardProps> = ({ width, title, amountCollected, monoBankId, index }) => {
  return (
    <div className={style.background}>
      <div className={style.title}>{`#${index} | ${title}`}</div>
      <div className={style.progress}>
        <ProgressBar width={width} amountCollected={amountCollected} />
        <div className={style.buttonContainer}>
          <Button title="Поповнити" size="small" link={`${MONO_BANK_URL}/${monoBankId}`} />
        </div>
      </div>
      <div className={style.collectedMobile}>
        <div>
          {'Зібрано: '}

          <span>
            {
              <NumericFormat
                decimalScale={0}
                value={amountCollected}
                displayType="text"
                thousandSeparator={' '}
                suffix={` грн`}
              />
            }
          </span>
        </div>
        <div>
          <Button title="Поповнити" size="small" link={`${MONO_BANK_URL}/${monoBankId}`} />
        </div>
      </div>
    </div>
  );
};

export default VilnyyCard;
