import React from 'react'
import Link from "next/link"
import { MdEmail, MdPhone, MdLocationPin } from "react-icons/md"

const contact = () => {
    return (
        <div className='bg-blue-400 py-8'>
            <h3 className='text-center text-white font-semibod text-3xl'>Contact Us</h3>
            <div className=" p-6 grid sm:gap-5 sm:grid-cols-[60%,40%] sm:w-3/4 mx-auto">
                <div>
                    <form action="">
                        <div className='grid sm:grid-cols-2 gap-1'>
                            <input type="text" className='p-2 outline-none border-none' name="" placeholder='Name' id="" />
                            <input type="email" className='mt-2 p-2 sm:mt-0 outline-none border-none ' name="" placeholder="Email" id="" />
                        </div>
                        <div className='mt-5'>
                            <textarea className='w-full p-2 resize-none outline-none border-none' name="message" placeholder='Message' id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className='flex sm:justify-end'>
                            <button className='bg-yellow-300 text-white px-4 py-2 w-full sm:w-fit'>SUBMIT</button>

                        </div>
                    </form>
                </div>

                <div className="my-4 sm:my-0">
                    <ul>
                        <li className='flex items-center'><div className="bg-white w-fit p-2 rounded-full"><MdEmail className='text-blue-600' /></div> <Link href="mailto:fastrideservices@gmail.com"><a className='ml-2 text-white'>fastrideservices@gmail.com</a></Link></li>
                        <li className='flex items-center my-3'><div className="bg-white w-fit p-2 rounded-full"><MdPhone className='text-blue-600' /></div> <Link href="tel:+08023334444"><a className="text-white ml-2">+08023334444</a></Link></li>
                        <li className='flex items-center'><div className="bg-white w-fit p-2 rounded-full"><MdLocationPin className='text-blue-600' /></div> <span className='text-white ml-2'>234 Eminent Avenue Apt. 001</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default contact