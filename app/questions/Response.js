import React from 'react'

export default function Response(props) {
  return (
    <div className='w-48 z-50 sm:w-96 bg-white text-black p-4 rounded-lg shadow-2xl relative'>
        <h1 className='text-md sm:text-3xl'>{props.response}</h1>
    </div>
  )
}
