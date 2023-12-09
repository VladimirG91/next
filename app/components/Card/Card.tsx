import Image from 'next/image';
import styles from './Card.module.scss';

const Card: React.FC<IGame> = ({ id, title, imageSrc }) => {
  return (
    <div className={styles.card}>
      <Image src={imageSrc} alt="" width={300} height={400} className={styles.image} />
    </div>
  );
};

export default Card;
