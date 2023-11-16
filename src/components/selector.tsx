'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';
import { NameValueObject } from '@/common/interfaces/name-value.interface';

const Selector = () => {
  const pathName = usePathname();

  const selectorClasses = 'border w-[6.125rem] h-[1.94rem] flex justify-center items-center  text-base border-gray-300 rounded-sm px-3 py-1';
  const activeSelectorClass = 'text-[#1797ff] !border-[#1797ff]';

  const navOptions: NameValueObject[] = [
    { name: 'All', value: 'home' },
    { name: 'My faves', value: 'favorites' },
  ];

  return (
    <div className='selector-group w-full flex justify-center my-5 xl:my-[4.375em]'>
      {navOptions.map((navOption) => (
        <Link key={navOption.value} href={navOption.value} className={`selector ${pathName === `/${navOption.value}` ? activeSelectorClass : 'text-gray-600'}  ${selectorClasses}`}>
          {navOption.name}
        </Link>
      ))}
    </div>
  );
};

export default Selector;
