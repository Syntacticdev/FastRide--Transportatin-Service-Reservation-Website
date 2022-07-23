import React from 'react'
import Link from "next/link"
import { AiFillFacebook, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai"

const Footer = () => {
    return (
        <div className="footer">
            <div className="px-10 pt-10 pb-5 grid gap-3 sm:grid-cols-[20%,20%,20%,40%] bg-white">
                <div className="enquiries">
                    <ul>
                        <h2 className='font-semibold mb-2 text-2xl'>Enquiries</h2>
                        <li><span className=''>Test Drive</span></li>
                        <li><span className=''>Service</span></li>
                        <li><span className=''>Learning</span></li>
                    </ul>
                </div>
                <div className="offers">
                    <ul>
                        <h2 className='font-semibold mb-2 text-2xl'>Offers</h2>
                        <li><span className=''>Special Offers</span></li>
                        <li><span className=''>First Time Offer</span></li>
                        <li><span className=''>Vip Reserve</span></li>
                    </ul>
                </div>
                <div className="about">
                    <ul>
                        <h2 className='font-semibold mb-2 text-2xl'>Navigations</h2>
                        <li><Link href='/about'><a>About</a></Link></li>
                        <li><Link href='/contact'><a>Contact</a></Link></li>
                        <li>
                            <div className="flex mt-2">
                                <Link href="/facebook"><a><AiFillFacebook className='w-8 h-8' /></a></Link>
                                <Link href="/facebook"><a><AiOutlineTwitter className='mx-2 w-8 h-8' /></a></Link>
                                <Link href="/facebook"><a><AiFillInstagram className='w-8 h-8' /></a></Link>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="enquiries">
                    <ul>
                        <h2 className='font-semibold mb-2 text-2xl'>Connect With Us</h2>
                        <li>
                            <div>
                                <h3>CUSTOMER SERVICE</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque a error nam ratione corporis, optio perspiciatis nemo nulla sit iste.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copyright text-center py-2">
                <span className="font-medium">Copyright 2022, FastRide inc. All Right Reserved.</span>
            </div>
        </div>
    )
}

export default Footer