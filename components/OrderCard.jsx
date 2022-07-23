import React from 'react'
import Image from "next/image"
import Ruler from './Ruler'
import { MdArrowForwardIos } from "react-icons/md"

const OrderCard = () => {
    return (
        <div className='shadow-sm shadow-white mb-9 w-[80%]  mx-auto grid grid-rows-[40%,60%] h-[450px]'>
            <div className="thumbnail px-3 object-contain relative bg-red-400">
                <Image src="/close-up-suv.png" className='p-3' alt="car-type" layout='fill' priority />
            </div>
            <div className="bg-white relative">
                <button className='bg-red-300 text-sm text-white py-2 absolute -bottom-5 left-1/2 -translate-x-1/2 px-3'>
                    RESERVE NOW
                </button>
                <div className="p-3">
                    <h3 className="font-semibold">Divi Leod V3</h3>
                    <span className='font-semibold text-xs text-red-400'>Starting $44/day</span>
                </div>

                <Ruler />
                <div className='p-3 grid items-center h-2/4'>
                    <ul>
                        <li><span>Logo</span> <span className='text-sm'>Vehicle Type: Sudan</span></li>
                        <li><span>Logo</span> <span className='text-sm'>4 Doors, 5 Seats</span></li>
                        <li><span>Logo</span> <span className='text-sm'>Transmission: Automatic</span></li>
                    </ul>
                </div>
                <Ruler />
                <div className="divide-solid divide-black divide-y-2 divide divide-x-2 "></div>
            </div>
        </div>
    )
}

export default OrderCard