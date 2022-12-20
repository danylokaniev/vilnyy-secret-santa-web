import { VilnyyBank } from '../../interfaces/vilnyy';
import VilnyyCard from '../VilnyyCard/VilnyyCard';
import style from './VilnyyCards.module.css';

interface VilnyyCardsProps {
  banks: VilnyyBank[];
}

const VilnyyCards: React.FC<VilnyyCardsProps> = ({ banks }) => {
  const maxAmount = Math.max(...banks.map((bank) => bank.amount));
  return (
    <div className={style.list}>
      <div className={style.title}>Спільноти</div>
      {banks.map((bank) => (
        <VilnyyCard
          title={bank.vilnyy.name}
          width={Math.ceil((bank.amount / maxAmount) * 100)}
          amountCollected={bank.amount}
          monoBankId={bank.vilnyy.bankId}
        />
      ))}
    </div>
  );
};

export default VilnyyCards;
