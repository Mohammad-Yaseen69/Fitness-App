import React from 'react'
import banner from '../../assets/images/banner.png'

const Hero = () => {
    return (
        <div className='w-full h-[95vh] max-md:h-[50vh] flex md:items-center justify-center px-14 '>

            <div className='flex flex-col md:w-full max-md:mt-11 max-sm:gap-3 max-sm:mt-24 max-md:items-center items-start gap-6'>
                <h1
                    className='text-red-800 font-semibold text-[2vw] max-ss:text-[4.5vw] max-md:text-[3vw]'>Fitness App</h1>
                <h2
                    className=' font-bold text-[4vw] max-md:hidden  leading-[60px]'>Sweat, Lift, <br /> Repeat:</h2>
                <h2
                    className=' font-bold max-md:text-[5vw] max-ss:text-[6.5vw] max-md:block hidden leading-[60px]'>Sweat, Lift, Repeat:</h2>
                <p
                    className='text-gray-700 max-md:text-[2.5vw] whitespace-nowrap max-ss:text-[3.5vw] text-[1.5vw]'>CheckOut The most Effective Exercises personalized you</p>
                <button className='btn'>Explore Exercises</button>
            </div>

            <img src={banner} alt="" className='hero-banner-img' />
        </div>
    )
}

export default Hero