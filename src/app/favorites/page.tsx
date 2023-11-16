'use client';
import { News } from '@/common/interfaces';
import Card from '@/components/card';
import useLocalStorage from '@/hooks/useLocalStorage';

const favoritesLocalStorageKey = process.env.FAVORITES_LOCALSTORAGE_KEY || 'FAVORITES';

const Favorites = () => {
  const [localStorageFavorites, setLocalStorageFavorites] = useLocalStorage(favoritesLocalStorageKey, '[]');

  const favorites = JSON.parse(localStorageFavorites as string);

  return (
    <>
      <section className='mt-[38px] grid grid-flow-row grid-cols-2 grid-rows-1 gap-x-[30px] gap-y-10'>
        {favorites.map((article: News, index: number) => (
          <Card key={index} article={article} localStorageFavorites={localStorageFavorites as string} setLocalStorageFavorites={setLocalStorageFavorites as (value: string) => void}></Card>
        ))}
      </section>
    </>
  );
};

export default Favorites;
