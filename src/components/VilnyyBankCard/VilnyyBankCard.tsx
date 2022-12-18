import Button from '../Button/Button';
import ProgressBar from '../ProgressBar/ProgressBar';
import style from './VilnyyBankCard.module.css';

const VilnyyBankCard = () => {
  const collected = 20000;
  const now = 55;
  return (
    <div className={style.background}>
      <div className={style.title}>#1 | Київ, вул. Волоська </div>
      <div className={style.progress}>
        <ProgressBar now={now} amountCollected={collected} />
        <Button title="Поповнити" size="small" />
      </div>
    </div>
  );
};

export default VilnyyBankCard;
