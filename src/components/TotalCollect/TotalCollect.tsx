import Community from '../../images/community';
import { VilnyyBank } from '../../interfaces/vilnyy';
import ProgressBar from '../ProgressBar/ProgressBar';
import style from './TotalCollect.module.css';
import { NumericFormat } from 'react-number-format';

interface TotalCollectProps {
  banks: VilnyyBank[];
}

const getTotalWidth = (percent: number) => {
  if (percent < 1) {
    return 1;
  }
  if (percent > 100) {
    return 100;
  }
  return percent;
};

const TotalCollect: React.FC<TotalCollectProps> = ({ banks }) => {
  const total = banks.reduce((total, bank) => (total += bank.amount), 0);
  const goal = process.env.REACT_APP_GOAL;
  const percent = Math.floor((total / Number(goal)) * 100);
  const width = getTotalWidth(percent);

  return (
    <div className={style.content}>
      <Community />
      <div className={style.total}>
        <div className={style.title}>
          Ціль:{' '}
          {<NumericFormat decimalScale={0} value={goal} displayType="text" thousandSeparator={' '} suffix={` грн`} />}{' '}
          гривен на підтримку нашої країни!
        </div>
        <div className={style.collected}>
          Зібрано: <br />
          {<NumericFormat decimalScale={0} value={total} displayType="text" thousandSeparator={' '} suffix={` грн`} />}
        </div>
        <div className={style.progress}>
          <ProgressBar percent={percent} width={width} />
        </div>
      </div>
    </div>
  );
};

export default TotalCollect;
