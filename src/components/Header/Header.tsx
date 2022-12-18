import Logo from '../../images/logo';
import style from './Header.module.css';

const Header = () => {
  return (
    <div className={style.header}>
      <Logo />
    </div>
  );
};

export default Header;
