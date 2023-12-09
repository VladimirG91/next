import Card from '@/app/components/Card/Card';

export async function generateStaticParams() {
  const games = await fetch('https://642c494a208dfe25472ca61d.mockapi.io/movies').then((res) =>
    res.json(),
  );
  console.log(games);
  return games.map((game: any) => ({
    id: game.title.replace(/\s+/g, '-'),
  }));
}

const Games = ({ params }: any) => {
  return (
    <>
      <div>game with id {params.id}</div>;
    </>
  );
};

export default Games;
