import Head from 'next/head'
import Image from 'next/image'
import OrderCard from '../components/OrderCard'
import ShowCase from '../components/ShowCase'
import styles from '../styles/Home.module.css'
import { AiFillTag, AiFillPhone, AiOutlineLaptop } from "react-icons/ai"
import { MdComputer, MdPhone } from "react-icons/md"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FastRide - Best Ride Reservation Service</title>
        <meta name="description" content="Best Ride Reservation Service Company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="home">
        <ShowCase />
        {/* <OrderCard /> */}

        <div className='grid grid-cols-3 sm:w-[80vw]  py-16 mx-auto'>
          <div className='flex justify-center flex-col items-center'>
            <AiFillTag className="w-[35px] h-[35px] sm:w-[60px] sm:h-[60px] text-blue-600" />
            <h3 className='font-bold text-sm sm:text-2xl'>15% off</h3>
            <p className='font-thin text-sm sm:text-lg'>First Reservatoin</p>
            <button className='sm:px-4 px-2 py-2 mt-3 text-sm bg-cyan-200 text-blue-400'>REDEEM</button>
          </div>
          <div className='flex justify-center flex-col items-center'>
            <MdPhone className="w-[35px] h-[35px] sm:w-[60px] sm:h-[60px] text-blue-600" />
            <h3 className='font-bold text-sm sm:text-2xl'>Reserve by Phone</h3>
            <p className='font-thin text-sm sm:text-lg'>Call Us 24/7</p>
            <a className='sm:px-4 px-2 py-2 mt-3 text-sm bg-cyan-200 text-blue-400' href="tel:+08023334444">CLICK TO CALL</a>
          </div>
          <div className='flex justify-center flex-col items-center'>
            <MdComputer className="w-[35px] h-[35px] sm:w-[60px] sm:h-[60px] text-blue-600" />
            <h3 className='font-bold sm:text-2xl'>Reserve Online</h3>
            <p className='font-thin text-sm sm:text-lg'>Just in a Click</p>
            <button className='sm:px-4 px-2 py-2 mt-3 text-sm bg-cyan-200 text-blue-400'>GET STARTED</button>
          </div>
        </div>

        <div className='py-8 '>
          <div className='sm:grid grid-cols-3 sm:w-[90%] mx-auto'>
            {Array(3).fill().map((el, i) => (
              <OrderCard key={i} />
            ))}
          </div>
        </div>

        <div className='services px-5 grid sm:w-[90vw] pt-7 pb-12 mx-auto gap-10  sm:grid-cols-[70%,30%]'>
          <div>
            <h2 className="text-3xl font-semibold mb-3">Services Category</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis ducimus voluptatum sunt. Illo qui harum reiciendis magnam ipsam perspiciatis, natus sed aliquid voluptate non similique labore nesciunt recusandae repellat architecto, suscipit ducimus velit. Consequuntur, tempore!
            </p>

            <div className='type grid mt-6 gap-4 sm:grid-cols-2'>
              <div className='flex items'>
                <AiFillTag className='w-[60px] h-[60px] text-blue-400 mt-0' />
                <div className='ml-2 mt-3'>
                  <h3 className="font-semibold text-purple-300 text-xl">Company Drive</h3>
                  <p className='text-sm '>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis ducimus voluptatum sunt. Illo qui harum reiciendis magnam ipsam.
                  </p>
                </div>
              </div>
              <div className='flex items'>
                <AiFillTag className='w-[60px] h-[60px] text-blue-400 mt-0' />
                <div className='ml-2 mt-3'>
                  <h3 className="font-semibold text-purple-300 text-xl">Personal Drive</h3>
                  <p className='text-sm '>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis ducimus voluptatum sunt. Illo qui harum reiciendis magnam ipsam.
                  </p>
                </div>
              </div>
              <div className='flex items'>
                <AiFillTag className='w-[60px] h-[60px] text-blue-400 mt-0' />
                <div className='ml-2 mt-3'>
                  <h3 className="font-semibold text-purple-300 text-xl">Tour Drive</h3>
                  <p className='text-sm'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis ducimus voluptatum sunt. Illo qui harum reiciendis magnam ipsam.
                  </p>
                </div>
              </div>
              <div className='flex items'>
                <AiFillTag className='w-[60px] h-[60px] text-blue-400 mt-0' />
                <div className='ml-2 mt-3'>
                  <h3 className="font-semibold text-purple-300 text-xl">Learning Drive</h3>
                  <p className='text-sm '>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis ducimus voluptatum sunt. Illo qui harum reiciendis magnam ipsam.
                  </p>
                </div>
              </div>

            </div>

          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-3">Offers</h2>
            <div className='flex items-start bg-white px-2 py-4'>
              <AiFillTag className='text-green-500 w-8 h-8' />
              <div className='ml-2'>
                <h3 className='font-semibold text-xl'>15% Off</h3>
                <p>First Time Reservation</p>
              </div>
            </div>
            <div className='flex items-start my-6 bg-white px-2 py-4'>
              <AiFillTag className='text-green-500 w-8 h-8' />
              <div className='ml-2'>
                <h3 className='font-semibold text-xl'>8% Off</h3>
                <p>4+ Day Reservation</p>
              </div>
            </div>
            <div className='flex items-start bg-white px-2 py-4'>
              <AiFillTag className='text-green-500 w-8 h-8' />
              <div className='ml-2'>
                <h3 className='font-semibold text-xl'>10% Off</h3>
                <p>Passenger Van Rentals</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
