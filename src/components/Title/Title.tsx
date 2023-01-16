import style from './Title.module.css';

const Title = () => {
  return (
    <div className={style.title}>
      <p>
        Збираємо на батареї для
        <br className={style.desktopBreak} /> квадрокоптерів <br className={style.mobileBreak} />
        Mavic 3
      </p>
    </div>
  );
};

export default Title;
