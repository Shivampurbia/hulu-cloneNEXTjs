import React from 'react';
import Image from 'next/image';
import HeaderItem from './HeaderItem';
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return <header className='flex flex-col sm:flex-row justify-between items-center h-auto mr-6'>
      <div className='flex flex-grow justify-evenly max-w-2xl '>
          <HeaderItem title="HOME" Icon={HomeIcon}></HeaderItem>
          <HeaderItem title="SEARCH" Icon={SearchIcon}></HeaderItem>
          <HeaderItem title="USER" Icon={UserIcon}></HeaderItem>
          <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon}></HeaderItem>
          <HeaderItem title="TRENDING" Icon={LightningBoltIcon}></HeaderItem>
          <HeaderItem title="COLLECTION" Icon={CollectionIcon}></HeaderItem>
      </div>
      <Image className='object-contain' src='https://suplari.com/wp-content/uploads/2019/09/hulu-logo-white.png'  width={150}
    height={120}>
        
      </Image>
  </header>
  
  
  ;
} 
    
export default Header;
