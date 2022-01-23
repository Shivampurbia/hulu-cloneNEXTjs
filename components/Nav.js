import React from 'react';
import requests from '../utils/requests'; 
import { useRouter } from 'next/router';

function Nav() {
  
  //console.log(Object.entries(requests)[0]);
  
  const router = useRouter();
  
  return (
  <nav className='mr-10 ml-10'> 
    <div className="flex sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
    {Object.entries(requests).map(([key,{title,url}])=>(
        <h2 
            key={key}
            onClick={()=>{router.push(`/?genre=${key}`)}}
            className="last:pr-24 curser-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500">{title}</h2>
    ))}
    
    </div>
    <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12'/>
  </nav>
  );

}

export default Nav;
