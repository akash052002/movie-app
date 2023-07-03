import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'

export default function Sections() {
    const [trending, setTrending] = useState([])
    const [upc, setUpc] = useState([])
    const [Tv, setTv] = useState([])
    const [play, setPlay] = useState([])
    useEffect(()=>{
          //api call
          const config = {
            headers:{
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDc1NjE2ZTEyMjZlNmVkMjc1ODlmYjc1MmM3NTlmMiIsInN1YiI6IjY0YTI3YzA2ZDQwMGYzMDEwYzM1ZjFiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gOWFNBZTo7nuJPg4UPXLlaczpMahQJYNGzNuzvFTOJc'
            }
          };
          let url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
          axios.get(url,config).then((res)=>{
            setTrending(res.data.results)
          }).catch((err)=>{
            alert("No internet")
          })
    },[])
    useEffect(()=>{
        //api call
        const config = {
          headers:{
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDc1NjE2ZTEyMjZlNmVkMjc1ODlmYjc1MmM3NTlmMiIsInN1YiI6IjY0YTI3YzA2ZDQwMGYzMDEwYzM1ZjFiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gOWFNBZTo7nuJPg4UPXLlaczpMahQJYNGzNuzvFTOJc'
          }
        };
        let url = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
        axios.get(url,config).then((res)=>{
          setUpc(res.data.results)
        }).catch((err)=>{
          alert("No internet")
        })
  },[])
  useEffect(()=>{
    //api call
    const config = {
      headers:{
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDc1NjE2ZTEyMjZlNmVkMjc1ODlmYjc1MmM3NTlmMiIsInN1YiI6IjY0YTI3YzA2ZDQwMGYzMDEwYzM1ZjFiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gOWFNBZTo7nuJPg4UPXLlaczpMahQJYNGzNuzvFTOJc'
      }
    };
    let url = "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc"
    axios.get(url,config).then((res)=>{
      setTv(res.data.results)
    }).catch((err)=>{
      alert("No internet")
    })
},[])
useEffect(()=>{
    //api call
    const config = {
      headers:{
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDc1NjE2ZTEyMjZlNmVkMjc1ODlmYjc1MmM3NTlmMiIsInN1YiI6IjY0YTI3YzA2ZDQwMGYzMDEwYzM1ZjFiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gOWFNBZTo7nuJPg4UPXLlaczpMahQJYNGzNuzvFTOJc'
      }
    };
    let url = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
    axios.get(url,config).then((res)=>{
      setPlay(res.data.results)
    }).catch((err)=>{
      alert("No internet")
    })
},[])
    return (
        <div className=''>
            <h1 className='text-3xl font-bold ml-4 mt-8'>Upcoming Movies</h1>
            <div className='flex gap-2 mx-4 mt-6 overflow-x-auto overflow-y-hidden'>
                {
                    upc.map(item=>{
                        return <MovieCard key={item.id} img = {`https://image.tmdb.org/t/p/w500${item.poster_path}`}/>
                    })
                }
            </div>

            <h1 className='text-3xl font-bold ml-4 mt-12'>Trending</h1>
            <div className='flex gap-2 mx-4 mt-6 overflow-x-auto overflow-y-hidden'>
                {
                    trending.map(item=>{
                        return <MovieCard key={item.id} img = {`https://image.tmdb.org/t/p/w500${item.poster_path}`}/>
                    })
                }
            </div>
            <h1 className='text-3xl font-bold ml-4 mt-12'>TV Serial</h1>
            <div className='flex gap-2 mx-4 mt-6 overflow-x-auto overflow-y-hidden'>
                {
                    Tv.map(item=>{
                        return <MovieCard key={item.id} img = {`https://image.tmdb.org/t/p/w500${item.poster_path}`}/>
                    })
                }
            </div>
            <h1 className='text-3xl font-bold ml-4 mt-12'>Now Playing</h1>
            <div className='flex gap-2 mx-4 mt-6 overflow-x-auto overflow-y-hidden'>
                {
                    play.map(item=>{
                        return <MovieCard key={item.id} img = {`https://image.tmdb.org/t/p/w500${item.poster_path}`}/>
                    })
                }

        </div>
        </div>
    )
}
