"use client"
"use client"
import React, { useState } from 'react'
import Response from './Response'
import questions from "./questions"
import { useRouter } from 'next/navigation'

export default function Questions() {
    const {push} = useRouter()
    const [selection, setSelection] = useState("")
    const [currQuestion, setCurrQuestion] = useState(0)
    const [option, setOption] = useState(0)
    const [page, setPage] = useState(0)
    const [points, setPoints] = useState(0)
    const [discount, setDiscount] = useState(5)
  return (
    <div className='grid h-screen bg-white text-black p-6 w-screen'>
        <div className='appear'>
            <h1 className='text-center text-4xl sm:text-7xl mt-8 mb-16'>
                {questions.questions[currQuestion].q}</h1>
            <hr className='border border-gray-700'></hr>
        </div>
        <div className='grid place-items-center appear'>
            <div className='grid gap-y-8 justify-center w-full'>
            <div onClick={()=>{
                if(currQuestion > 0){
                    setPoints(points+questions.questions[currQuestion-1].d)
                    setCurrQuestion(currQuestion-1)
                    setPage(0)
                }
                
                }} className='absolute top-[5rem] left-[-20px] hover:cursor-pointer hover:scale-105 duration-150'>
                <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M20 10v4h-9l3.5 3.5l-2.42 2.42L4.16 12l7.92-7.92L14.5 6.5L11 10h9Z"/>
            </svg>
            </div>
            <button onClick={()=>{
                setSelection(questions.questions[currQuestion].si)
                setDiscount(questions.questions[currQuestion].d)
                setPoints(points-questions.questions[currQuestion].d)
                setOption(0)
            }} className='bg-gray-300 rounded-lg p-2 w-56 sm:w-96 text-xl sm:text-5xl
            hover:bg-gray-500 hover:text-white duration-150'>{questions.questions[currQuestion].st}</button>
            <button onClick={()=>{
                setOption(1)
                setSelection(questions.questions[currQuestion].no)
                setDiscount(questions.questions[currQuestion].d)
                setPoints(points-questions.questions[currQuestion].d)
            }} className='bg-gray-300 rounded-lg p-2 w-56 sm:w-96 text-xl sm:text-5xl
            hover:bg-gray-500 hover:text-white duration-150'>{questions.questions[currQuestion].nd}</button>
            </div>
        </div>
        <div className={`${selection != '' ? 'visible bg-[rgba(0,0,0,0.8)]' : 'invisible bg-[rgba(0,0,0,0)]'}
          absolute h-screen top-0 left-0 w-full grid place-items-center duration-150`}>
        <Response response = {selection}></Response>
        <button onClick={()=>{
            if(questions.questions[currQuestion].si_pages != undefined){
                if(option == 0){
                        if(page < 3){
                            setPage(page+1)
                            setSelection(questions.questions[currQuestion].si_pages[page])
                        }else{
                            setSelection("")
                            if(currQuestion<questions.questions.length-1){
                                setCurrQuestion(currQuestion+1)
                            }else{
                                setCurrQuestion(0)
                            }
                        }
                    }else{
                        if(page < 3){
                            setPage(page+1)
                            setSelection(questions.questions[currQuestion].no_pages[page])
                        }else{
                            setSelection("")
                            if(currQuestion<questions.questions.length-1){
                                setCurrQuestion(currQuestion+1)
                            }else{
                                setCurrQuestion(0)
                            }
                        }
                    }
            }else{
                setSelection("")
                if(currQuestion<questions.questions.length-1){
                        setCurrQuestion(currQuestion+1)
                }else{
                    push(`/results?points=${points}`)
                    setPage(0)
                }
            }
               
                
            }} className={`bg-lime-500 rounded-full p-4 text-3xl
            hover:bg-lime-700 text-white duration-150 ${selection == "" ? 'invisible' : "visible"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor" d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6l-6 6Z"/>
                </svg></button>
        </div>
        <footer className='mt-auto appear w-48'>
        <p className={`absolute text-red-700 text-red-600 text-3xl translate-y-[-20px] opacity-0 ${selection != "" ? 'opacity-100 translate-y-[-50px]' : ''} duration-300`}>-{discount} Puntos</p>
        <p className={`text-lg sm:text-3xl ${points <0 ?'text-red-400' :'text-black'}`}>{points}: Puntos</p>
        </footer>
    </div>
  )
}
