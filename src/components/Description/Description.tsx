import style from './Description.module.css';

const Description = () => {
  return (
    <div className={style.description}>
      <div className={style.descriptionTitle}>Об’єднуємося, щоб дати тягла окупантам!</div>
      <div className={style.descriptionContent}>
        <p>Збираємо кошти на щось дуже добре, що допоможе Силам оборони вибити росіян з нашої землі.</p>
        <p>
          <span>Спільнота Вільного</span>, яка зробить найбільший донат отримає подяку від Дані.
        </p>
      </div>
    </div>
  );
};

export default Description;
