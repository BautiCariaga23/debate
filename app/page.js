"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Home() {

  const [clicked, setClicked] = useState(false)
  const {push} = useRouter()
  return (
    <main onClick={()=>{
      setClicked(true);

      setTimeout(()=>{
        push("/questions")
      },1000)
    }} className="grid bg-white text-black place-items-center h-screen">
      <div className={`text-center ${clicked ? 'dissapear' : ''} translate-y-0 duration-500`}>
        <h1 className='text-5xl sm:text-7xl font-bold mb-16 tracking-wider'>{`${'Te advierto, Sócrates, que tanto si contesta de una manera como de otra, el joven será refutado'.toUpperCase()}`}</h1>
        <h2 className='font-black text-gray-600 text-4xl animate-pulse'>TOCA PARA COMENZAR!</h2>
      </div>
    </main>
  )
}
