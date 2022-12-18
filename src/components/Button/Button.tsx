import style from './Button.module.css';

interface ButtonProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title }) => {
  return <div className={style.button}>{title}</div>;
};

export default Button;
