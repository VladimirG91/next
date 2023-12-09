import Link from 'next/link';
import { getAllGames } from '@/app/actions/getAllGames';
import Card from '../components/Card/Card';

const page = async () => {
  const games = await getAllGames();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between  mt-10">
      {
        <ul className="grid grid-cols-2 gap-2 p-1 lg:p-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {games.map((game: IGame) => (
            <li key={game.id}>
              <Link href={`games/${game.id}`}>
                <Card {...game} />
              </Link>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default page;
