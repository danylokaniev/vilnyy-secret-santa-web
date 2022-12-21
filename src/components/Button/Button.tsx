import style from './Button.module.css';
import { Link } from 'react-scroll';

interface ButtonProps {
  title: string;
  size?: 'big' | 'small';
  link?: string;
  onClick?: () => void;
}

interface LinkButtonProps {
  title: string;
  size?: 'big' | 'small';
  id: string;
}

export const Button: React.FC<ButtonProps> = ({ title, size, link }) => {
  if (link) {
    return (
      <a target="_blank" rel="noopener" href={link} className={`${style.button} ${size ? style[size] : style.big}`}>
        {title}
      </a>
    );
  }
  return <div className={`${style.button} ${size ? style[size] : style.big}`}>{title}</div>;
};

export const LinkButton: React.FC<LinkButtonProps> = ({ title, size, id }) => {
  return (
    <Link className={`${style.button} ${size ? style[size] : style.big}`} to={id} spy smooth duration={1000}>
      {title}
    </Link>
  );
};
