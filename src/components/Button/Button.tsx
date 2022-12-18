import style from './Button.module.css';

interface ButtonProps {
  title: string;
  size?: 'big' | 'small';
}

const Button: React.FC<ButtonProps> = ({ title, size }) => {
  return <div className={`${style.button} ${size ? style[size] : style.big}`}>{title}</div>;
};

export default Button;
