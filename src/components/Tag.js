import React, { useState } from 'react'

import { MagnifyingGlass } from 'react-loader-spinner'
import useGif from '../hooks/useGif';
import { FaDownload } from "react-icons/fa6";

const Tag = () => {

    const [tag,setTag]=useState('')
    

    const{gif,loading,fetchData}=useGif(tag);  

    function clickHandler(){
      fetchData(tag);
    }

    function changeHandler(event){
        setTag(event.target.value)
    }

    function handleKeyPress(event){
      if(event.key === 'Enter'){
        fetchData(tag);
      }
    }

    function downloadGif() {
      if (gif) {
          fetch(gif)
              .then((response) => response.blob())
              .then((blob) => {
                  const url = window.URL.createObjectURL(new Blob([blob]));
                  const link = document.createElement('a');
                  link.href = url;
                  link.setAttribute('download', 'gif_image.gif');
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
              });
      }
  }


  return (
          <div className='w-1/2 bg-blue-500 rounded-lg border
            border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        
          <h1 className='text-2xl mt-[15px] underline uppercase font-bold'>Random {tag} GIF</h1>
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

          <input
            className='w-10/12  mb-[2px] bg-white py-2 rounded-lg text-xl text-center'
            onChange={changeHandler}
            value={tag}
            onKeyPress={handleKeyPress}
          />
          <div className='w-10/12 flex'>
              <button onClick={clickHandler}
                  className='w-10/12 mb-[20px] bg-yellow-400 py-2 rounded-lg text-xl'
              >
                  Generate
              </button>
              {gif && (
              
              <FaDownload onClick={downloadGif} className='w-[200px] text-4xl cursor-pointer text-zinc-950' />                
            )}
          </div>
          

        
    </div>
  )
}

export default Tag;