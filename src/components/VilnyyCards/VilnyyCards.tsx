import VilnyyCard from '../VilnyyCard/VilnyyCard';
import style from './VilnyyCards.module.css';

const VilnyyCards = () => {
  return (
    <div className={style.list}>
      <div className={style.title}>Спільноти</div>
      <VilnyyCard title={'#1 | Київ, вул. Волоська'} percent={99} amountCollected={20000} />
      <VilnyyCard title={'#2 | Київ, вул. Велика Житомирьска'} percent={77} amountCollected={17898} />
    </div>
  );
};

export default VilnyyCards;
