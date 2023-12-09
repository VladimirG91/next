export async function getGame(id: number): Promise<IGame> {
  return fetch(`https://642c494a208dfe25472ca61d.mockapi.io/movies/${id}`).then((res) =>
    res.json(),
  );
}
