import Community from '../../images/community';
import Button from '../Button/Button';
import style from './Description.module.css';

const Description = () => {
  return (
    <div className={style.description}>
      <div className={style.titleContainer}>
        <div className={style.title}>Об’єднуємося, щоб дати тягла окупантам!</div>
        <Community />
      </div>
      <div className={style.content}>
        <p>Збираємо кошти на щось дуже добре, що допоможе Силам оборони вибити росіян з нашої землі.</p>
        <p>
          <span>Спільнота Вільного</span>, яка зробить найбільший донат отримає подяку від Дані.
        </p>
      </div>
      <Button title={'Підтримати'} />
    </div>
  );
};

export default Description;
