import Community from '../../images/community';
import ProgressBar from '../ProgressBar/ProgressBar';
import style from './TotalCollect.module.css';

interface TotalCollectProps {
  percent: number;
}

const TotalCollect: React.FC<TotalCollectProps> = ({ percent }) => {
  const width = percent < 10 ? 10 : percent > 100 ? 100 : percent;
  return (
    <div className={style.content}>
      <Community />
      <div className={style.total}>
        <div className={style.title}>Ціль: 100 000 гривен на підтримку нашої країни!</div>
        <div className={style.collected}>Зібрано: 60 000 грн</div>
        <div className={style.progress}>
          <ProgressBar percent={width} />
        </div>
      </div>
    </div>
  );
};

export default TotalCollect;
