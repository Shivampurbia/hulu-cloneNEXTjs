import React from 'react';
import Thumbnail from './Thumbnail';
import FlipMove from "react-flip-move";
function Result({results}) {
    
  return <FlipMove className='mt-4 px-4 my-8 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
      {
          results.map((result)=>(
              <Thumbnail key={result.id} result = {result }></Thumbnail>
          ))
      }
  </FlipMove>;
}

export default Result;
