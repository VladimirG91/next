import Image from 'next/image';
import styles from './Card.module.scss';
interface Igame {
  id: string;
  title?: string;
  description?: string;
  releaseDate?: string;
  genre?: string;
  imageSrc: string;
  country?: string;
  director?: string;
  scenario?: string;
}

const Card: React.FC<Igame> = ({ title, imageSrc }) => {
  return (
    <div className={styles.card}>
      <Image src={imageSrc} alt="" width={300} height={400} className={styles.image} />
    </div>
  );
};

export default Card;
