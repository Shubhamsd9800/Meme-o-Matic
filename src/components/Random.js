import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { MagnifyingGlass } from 'react-loader-spinner'
import useGif from '../hooks/useGif';

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {


  const {gif,loading,fetchData}=useGif();
   
  return (
          <div className='w-1/2 bg-green-500 rounded-lg border
            border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        
          <h1 className='text-2xl mt-[15px] underline uppercase font-bold'>A Random GIF</h1>
          {
            loading?(<MagnifyingGlass
              visible={true}
              height="80"
              width="80"
              ariaLabel="magnifying-glass-loading"
              wrapperStyle={{}}
              wrapperClass="magnifying-glass-wrapper"
              glassColor="#c0efff"
              color="#008DDA"
              />) : 
            (<img src={gif} alt='gif' width="420"/>)

          }
        
          <button onClick={()=> fetchData()}
          className='w-10/12 mb-[20px] bg-yellow-400 py-2 rounded-lg text-xl'
          >
            Generate
        </button>
    </div>
  )
}

export default Random