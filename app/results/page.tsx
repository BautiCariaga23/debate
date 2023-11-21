import Link from 'next/link'
import React from 'react'

type Props = {
    params:{},
    searchParams: {[key:string]: string | string[] | undefined},
}
export default function Results(props: Props) {
  return (
    <div className='grid h-screen place-items-center gap-y-9 bg-white text-black p-6'>
        <div className='grid place-items-center'>
        <h1 className='text-8xl text-center'>Tu puntaje final fue:</h1>
        <h2 className='text-7xl text-center'><span className='text-red-700'>{props.searchParams.points} </span> puntos</h2>
        <Link href={"/"}><div className='mt-16 text-center bg-gray-300 text-3xl sm:text-6xl rounded-lg p-2 hover:cursor-pointer hover:bg-gray-700 hover:text-white duration-300'>Volver a empezar</div>
        </Link>
        </div>
    </div>
  )
}
