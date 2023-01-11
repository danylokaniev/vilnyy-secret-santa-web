import PresentIcon from '../../images/present';
import style from './Present.module.css';

const Present = () => {
  return (
    <div className={style.block}>
      Спільнота, яка зробить найбільший внесок, отримає <span>неонову</span> табличку <span>VILNYY</span> на колівінг
      <div className={style.icon}>
        <PresentIcon />
      </div>
    </div>
  );
};

export default Present;
