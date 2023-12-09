import Image from 'next/image';
import { getGame } from '@/app/actions/getGame';

interface IParams {
  params: {
    id: number;
  };
}
async function Game({ params: { id } }: IParams) {
  const game = await getGame(id);
  return (
    <div className="flex justify-center align-middle">
      <Image src={game.imageSrc} alt={game.title} width={300} height={400} />
      <div className="pl-10 w-1/2 text-white">
        <h3 className="text-white text-3xl">{game.title}</h3>
        <p>{game.description}</p>
        <p>жанр: {game.genre}</p>
        <p>дата релиза: {game.releaseDate}</p>
        <p>страна: {game.country}</p>
        <p>режиссер:{game.director}</p>
      </div>
    </div>
  );
}

export default Game;
