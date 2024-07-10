import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Banner = () => {

  const [bannerImage, setBannerImage] = useState();
  const [title, setTitle] = useState('Placeholder Movie');

  useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=133bd7587ffdd3169810f03ffdba8613&language=en-US')
      // .then(response => response.json())
      .then(response => {
        console.log(response);
        setBannerImage(`https://image.tmdb.org/t/p/original${response.data.results[0].backdrop_path}`);
        setTitle(response.data.results[0].title);
      })
      .catch(err => console.error(err));
  },[]);

  return (
    <div className='h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end' style={{backgroundImage:`url(${bannerImage})`}}>{/*md is for medium screen size or above, then height = 75vh */}
        <div className='text-white w-full text-center text-2xl'>
            {title}
        </div>
    </div>
  )
}

export default Banner