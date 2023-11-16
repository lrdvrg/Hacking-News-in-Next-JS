'use client';
import React, { useEffect, useState } from 'react';
import Card from '@/components/card';
import Dropdown from '@/components/dropdown';
import { News } from '@/common/interfaces/news.interface';
import useNewsByCategory from '@/hooks/fetchNews';
import useLocalStorage from '@/hooks/useLocalStorage';

const categoryLocalStorageKey = process.env.CATEGORY_LOCALSTORAGE_KEY || 'CATEGORY';
const favoritesLocalStorageKey = process.env.FAVORITES_LOCALSTORAGE_KEY || 'FAVORITES';

const Home = () => {
  const [localStorageCategory, setLocalStorageCategory] = useLocalStorage(categoryLocalStorageKey, '');
  const [localStorageFavorites, setLocalStorageFavorites] = useLocalStorage(favoritesLocalStorageKey, '[]');

  const [category, setCategory] = useState('');
  const [page, setPage] = useState(0);

  useEffect(() => {
    setCategory(localStorageCategory as string);
  }, [localStorageCategory]);

  const { news } = useNewsByCategory(category, page);

  return (
    <>
      <Dropdown category={category} setCategory={setCategory} setPage={setPage} setLocalStorageCategory={setLocalStorageCategory as (value: string) => void}></Dropdown>
      <section className='mt-10 xl:mt-[38px] grid grid-flow-row grid-cols-1 xl:grid-cols-2 grid-rows-1 gap-x-[30px] gap-y-10'>
        {news.map((article: News, index) => (
          <Card
            key={index}
            article={article}
            localStorageFavorites={localStorageFavorites as string}
            setLocalStorageFavorites={setLocalStorageFavorites as (value: string) => void}
            isLast={index === news.length - 1}
            newLimit={() => setPage(page + 1)}
          ></Card>
        ))}
      </section>
    </>
  );
};

export default Home;
