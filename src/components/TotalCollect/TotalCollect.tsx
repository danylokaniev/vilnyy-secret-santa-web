import ProgressBar from '../ProgressBar/ProgressBar';
import style from './TotalCollect.module.css';

const TotalCollect = () => {
  return (
    <div className={style.total}>
      <div className={style.totalTitle}>Ціль: 100 000 гривен на підтримку нашої країни!</div>
      <div className={style.totalCollected}>Зібрано: 60 000 грн</div>
      <ProgressBar now={100} amountCollected={20000} />
    </div>
  );
};

export default TotalCollect;
