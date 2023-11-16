import { CardProps } from '@/common/interfaces';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent, useEffect, useRef } from 'react';
import { News } from '../common/interfaces/news.interface';

const Card: FunctionComponent<CardProps> = ({ article, localStorageFavorites, setLocalStorageFavorites, isLast, newLimit }) => {
  const currentFavorites: News[] = JSON.parse(localStorageFavorites);

  dayjs.extend(relativeTime);
  const createdAtDate = dayjs().to(dayjs(article.created_at));

  const cardRef = useRef(null);

  /**
   * Observe when the last card instance is visible and call for new elements when it is.
   */
  useEffect(() => {
    if (!cardRef?.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (isLast && entry.isIntersecting && newLimit) {
        newLimit();
        observer.unobserve(entry.target);
      }
    });

    observer.observe(cardRef.current);
  }, [isLast, newLimit]);

  /**
   * Check if article is already part of favorites array stored in local storage.
   */
  const handleFavorites = () => {
    if (!currentFavorites.find((item) => item.story_id === article.story_id && item.author === article.author)) {
      currentFavorites.push(article);
      setLocalStorageFavorites(JSON.stringify(currentFavorites));
    } else {
      const newFavorites = currentFavorites.filter((item) => item.story_id !== article.story_id && item.author === article.author);
      setLocalStorageFavorites(JSON.stringify(newFavorites));
    }
  };

  return (
    <article className='flex border border-[#979797] rounded-md justify-between bg-white xl:h-[95px] hover:opacity-40' ref={cardRef}>
      <Link href={article.story_url} target='_blank' className='cursor-pointer w-full max-w-full py-0 px-[26px]'>
        <div className='flex pt-4'>
          <Image className='align-bottom' src='/clock.svg' width={16} height={16} alt='Clock'></Image>
          <h5 className='text-[11px] text-[#767676] pl-2'>
            {createdAtDate} by {article.author}
          </h5>
        </div>
        <h3 className='pt-2 pb-2 xl:pb-0 text-[#6b6b6b] text-sm font-medium'>{article.story_title}</h3>
      </Link>
      <div className='bg-[#60606016] w-[4.25rem] flex justify-center items-center'>
        <Image
          onClick={() => handleFavorites()}
          className='cursor-pointer'
          src={`${currentFavorites.find((item: News) => item.story_id === article.story_id) ? '/heart-full.svg' : '/heart-empty.svg'}`}
          width={24}
          height={22}
          alt='Heart'
        ></Image>
      </div>
    </article>
  );
};

export default Card;
