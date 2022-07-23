import React from 'react'
import { MdFacebook } from "react-icons/md"
import { FaInstagram, FaTwitter } from "react-icons/fa"
import Link from "next/link"
const ShowCase = () => {
    return (
        <div className='showcase min-h-[500px] relative sm:bg-gray-900 bg-[url("/close-up-suv.png")] bg-contain bg-top sm:bg-right bg-no-repeat grid grid-rows-[85%,15%]'>
            <div className="content grid sm:grid-cols-2">
                <div className="sm:bg-slate-200 mb-12 px-5 sm:mb-0 flex flex-col justify-end sm:justify-center sm:clip-your-box">
                    <h3 className="text-4xl sm:text-5xl">The best place to find </h3>
                    <h3 className="font-light text-2xl sm:text-3xl">Great transportation services</h3>
                    <button className="bg-gray-700 text-teal-50 w-fit ml-6 mt-4 px-6 py-2 hover:bg-blue-300 clip-your-box-3">RESERVE NOW!</button>
                </div>
            </div>
            <div className="ct_foot grid-cols-2 bg-transparent sm:bg-blue-200 grid  sm:grid-cols-[60%,40%] sm:w-2/5">
                <div className='flex items-center bg-red-400 sm:bg-transparent clip-your-box-4 sm:clip-your-box-none justify-center h-[full]'>
                    <div className='text-white'><span className='font-bold text-red-400'>Tel:</span> +234803330111</div>
                </div>
                <div className='sm:w-[300px] justify-center clip-your-box-3 items-center h-[full]  flex bg-purple-600 sm:clip-your-box-2'>
                    <Link href="/">
                        <a><MdFacebook className='w-[30px] h-[30px] text-white' /></a>
                    </Link>
                    <Link href="/">
                        <a><FaInstagram className='w-[30px] h-[30px] mx-4 text-white' /></a>
                    </Link>
                    <Link href="/">
                        <a><FaTwitter className='w-[30px] h-[30px] text-white' /></a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ShowCase



{/* <div className="ct_foot  bg-blue-200 grid grid-cols-2 sm:grid-cols-[60%,40%] sm:w-2/4">
                <div className=' flex items-center justify-center h-[full]'>
                    <div className='text-white'><span className='font-bold text-red-400'>Tel:</span> +234803330111</div>
                </div>
                <div className='flex justify-center items-center h-[full]  bg-purple-600 sm:clip-your-box-2'>
                    <Link href="/">
                        <a><MdFacebook className='w-[30px] h-[30px] text-white' /></a>
                    </Link>
                    <Link href="/">
                        <a><FaInstagram className='w-[30px] h-[30px] mx-4 text-white' /></a>
                    </Link>
                    <Link href="/">
                        <a><FaTwitter className='w-[30px] h-[30px] text-white' /></a>
                    </Link>
                </div>
            </div> */}