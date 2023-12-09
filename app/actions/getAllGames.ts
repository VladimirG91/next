export async function getAllGames(): Promise<IGame[]> {
  return fetch('https://642c494a208dfe25472ca61d.mockapi.io/movies').then((res) => res.json());
}
