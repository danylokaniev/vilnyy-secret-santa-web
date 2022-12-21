import style from './Footer.module.css';

const Footer = () => {
  return (
    <div className={style.footer}>
      Made by
      <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/danylo-kanievskyi/" className={style.link}>
        Kanievskyi Danylo
      </a>
      {',  '}
      Designed by
      <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/elenakol95/" className={style.link}>
        Olena Koliesnikova
      </a>
    </div>
  );
};

export default Footer;
