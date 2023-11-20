"use client"
"use client"
import React, { useState } from 'react'
import Response from './Response'
import Link from 'next/link'
import questions from "./questions"
import { useRouter } from 'next/navigation'

export default function Questions() {
    const {push} = useRouter()
    const [selection, setSelection] = useState("")
    const [currQuestion, setCurrQuestion] = useState(0)
    const [option, setOption] = useState(0)
    const [page, setPage] = useState(0)
  return (
    <div className='grid h-screen bg-white text-black p-6 w-screen'>
        <div className='appear'>
            <h1 className='text-center text-4xl sm:text-7xl mt-8 mb-16'>
                {questions.questions[currQuestion].q}</h1>
            <hr className='border border-gray-700'></hr>
        </div>
        <div className='grid place-items-center appear mt-[-300px]'>
            <div className='grid gap-y-8 justify-center w-full'>
            <button onClick={()=>{
                setSelection(questions.questions[currQuestion].si)
                setOption(0)
            }} className='bg-gray-300 rounded-lg p-2 w-56 sm:w-96 text-xl sm:text-5xl
            hover:bg-gray-500 hover:text-white duration-150'>{questions.questions[currQuestion].st}</button>
            <button onClick={()=>{
                setOption(1)
                setSelection(questions.questions[currQuestion].no)
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
                    if(currQuestion == 2 && option == 1){
                        setCurrQuestion(currQuestion+2)
                    }else{
                        setCurrQuestion(currQuestion+1)
                    }
                    
                }else{
                    push("/")
                    setPage(0)
                }
            }
               
                
            }} className={`bg-lime-500 rounded-full p-4 text-3xl
            hover:bg-lime-700 text-white duration-150 ${selection == "" ? 'invisible' : "visible"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor" d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6l-6 6Z"/>
                </svg></button>
        </div>
    </div>
  )
}
