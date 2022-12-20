import style from './Button.module.css';

interface ButtonProps {
  title: string;
  size?: 'big' | 'small';
  link?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, size, link }) => {
  if (link) {
    return (
      <a target="_blank" rel="noopener" href={link} className={`${style.button} ${size ? style[size] : style.big}`}>
        {title}
      </a>
    );
  }
  return <div className={`${style.button} ${size ? style[size] : style.big}`}>{title}</div>;
};

export default Button;
