import Image from 'next/image';

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
    <div>
      <h3>{title}</h3>
      <Image src={imageSrc} alt="" width={300} height={300} />
    </div>
  );
};

export default Card;
