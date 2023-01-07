import Community from '../../images/community';
import { VILNYYS_ANCHOR_ID } from '../../utils/constants';
import { LinkButton } from '../Button/Button';
import style from './Description.module.css';

const Description = () => {
  return (
    <div className={style.description}>
      <div className={style.titleContainer}>
        <div className={style.title}>Обʼєднуємося, щоб ЗСУ палили русню швидше!</div>
        <Community />
      </div>
      <div className={style.content}>
        <p>
          Влаштовуємо змагання між спільнотами <span>VILNYY</span>, щоб підтримати збір коштів для батальйону
          <span> «Свобода»</span>, де служать наші колівери.
        </p>
        {/* <p>
          <span>Спільнота,</span>, яка зробить найбільший внесок отримає
        </p> */}
        <p>Обирай свою спільноту, тисни «підтримати» та донать комфортну суму.</p>
      </div>
      <LinkButton title={'Підтримати'} id={VILNYYS_ANCHOR_ID} />
    </div>
  );
};

export default Description;
