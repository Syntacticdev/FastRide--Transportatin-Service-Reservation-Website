import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div className='bg-gray-50' >
      <Header />
      <div>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout