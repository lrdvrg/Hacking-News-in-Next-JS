'use client';

import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import { DropdownProps, NameValueObject } from '@/common/interfaces';

const dropDownOptions: NameValueObject[] = [
  {
    name: 'Angular',
    value: 'angular',
  },
  {
    name: 'React',
    value: 'reactjs',
  },
  {
    name: 'Vuejs',
    value: 'vuejs',
  },
];

const Dropdown: FunctionComponent<DropdownProps> = ({ category, setCategory, setPage, setLocalStorageCategory }) => {
  /**
   * Reset page counter for API fetching and set new category.
   * @param category news category.
   */
  const changeCategory = (category: string) => {
    setPage(0);
    setCategory(category);
    setLocalStorageCategory(category);
  };

  return (
    <div className='select dropdown relative inline-block'>
      <button className='dropbtn w-60 p-2  text-sm border rounded border-[#2e2e2e] cursor-pointer text-start'>{`${category || 'Select your news'}`}</button>
      <div className='hidden dropdown-content absolute bg-white min-w-[240px] z-1 shadow-sm'>
        {dropDownOptions.map((option) => (
          <div className='flex text-sm text-[#343434] cursor-pointer px-[12.5px] py-3' key={option.value} onClick={() => changeCategory(option.value)}>
            <Image className='mr-2' src={`/${option.value}.png`} height={12} width={20} alt={option.name}></Image>
            {option.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
