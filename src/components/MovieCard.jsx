import React from 'react'

export default function MovieCard(props) {
  return (
    <div className='w-36 rounded-md overflow-hidden hover:scale-105'>
        <img src={props.img}/>
    </div>
  )
}
