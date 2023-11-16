/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { News, NewsApiResponse } from '@/common/interfaces/news.interface';
import { useEffect, useState } from 'react';

const useNewsByCategory = (category: string, page: number) => {
  const apiUrl = process.env.API_URL;
  const [news, setNews] = useState<News[]>([]);

  /**
   * Set new News array when category change.
   */
  useEffect(() => {
    fetch(`${apiUrl}/search_by_date?query=${category}&page=${page}`)
      .then((response) => response.json())
      .then((data: NewsApiResponse) => {
        const news = data.hits.filter((newItem) => newItem.author && newItem.created_at && newItem.story_title && newItem.story_url);
        setNews(news);
      });
  }, [category]);

  /**
   * Add new News to previous News arrays when page change.
   */
  useEffect(() => {
    fetch(`${apiUrl}/search_by_date?query=${category}&page=${page}`)
      .then((response) => response.json())
      .then((data: NewsApiResponse) => {
        const news = data.hits.filter((newItem) => newItem.author && newItem.created_at && newItem.story_title && newItem.story_url);
        setNews((prev) => [...prev, ...news]);
      });
  }, [page]);

  return { news };
};

export default useNewsByCategory;
