import Logo from '../../images/logo';
import style from './Header.module.css';

const Header = () => {
  return (
    <div className={style.header}>
      <a target="_blank" rel="noopener" href="https://vilnyy.co">
        <Logo />
      </a>
    </div>
  );
};

export default Header;
