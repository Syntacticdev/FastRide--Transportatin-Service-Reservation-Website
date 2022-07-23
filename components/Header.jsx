import React from 'react'
import Link from "next/link"

const Header = () => {
  return (
    <div className='px-6 py-4 sticky bg-white top-0 w-screen flex items-center justify-between'>
      <Link href="/">
        <a className="text-logo"><span className='text-3xl font-bold text-red-600'>Fast</span><span className='text-4xl italic font-semibold underline'>Ride</span></a>
      </Link>

      <div className="actions">
        <div className="socials">
          <nav className='h-nav flex list-none'>
            <li>
              <Link href="/find-us">
                <a>Find us</a>
              </Link>
            </li>
            <li>
              <Link href="tel:+08023334444">
                <a>0802 333 4444</a>
              </Link>
            </li>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header