import React, { useEffect, useState } from 'react'
import Star from './Star'
import axios from 'axios'
export default function Banner() {
    const renderStar = (n) => {
      
    }

    const [rated, setRated] = useState({})
    useEffect(()=>{
          //api call
          const config = {
            headers:{
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDc1NjE2ZTEyMjZlNmVkMjc1ODlmYjc1MmM3NTlmMiIsInN1YiI6IjY0YTI3YzA2ZDQwMGYzMDEwYzM1ZjFiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gOWFNBZTo7nuJPg4UPXLlaczpMahQJYNGzNuzvFTOJc'
            }
          };
          let url = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
          axios.get(url,config).then((res)=>{
            setRated(res.data.results[0])
          }).catch((err)=>{
            alert("No internet")
          })
    },[])
    let img = `https://image.tmdb.org/t/p/w500${rated.backdrop_path}`
    const styles = {
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      };
    return (
        <div className='w-[100%] h-96 bg-red-100' style={styles}>
            <h1 className='text-white capitalize text-6xl pt-24 pl-4'>{rated.title}</h1>
            <p className='text-gray-200 pl-4 mt-4 w-[32rem]'>{rated.overview}</p>
            <div className='flex '>
            {
               //todo
            }
            </div>
          
        </div>
    )
}
