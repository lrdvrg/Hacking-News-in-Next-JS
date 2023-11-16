import { News } from './news.interface';

export interface DropdownProps {
    category: string;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    setCategory: React.Dispatch<React.SetStateAction<string>>;
    setLocalStorageCategory: (value: string) => void;
}

export interface CardProps {
    localStorageFavorites: string;
    isLast?: boolean;
    article: News;
    setLocalStorageFavorites: (value: string) => void;
    newLimit?: () => void;
}