'use client';
import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';

interface IGame {
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

const Cards = () => {
  const [games, setGames] = useState<IGame[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://642c494a208dfe25472ca61d.mockapi.io/movies');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data: IGame[] = await response.json();
        setGames(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again.');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul className="grid grid-cols-2 gap-2 p-1 lg:p-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {games.map((game) => (
            <Card key={game.id} {...game} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cards;
