import React from 'react'
import Navbar from '../Components/Navbar'
import darjeeling1 from '../assets/darjeeling1.jpg'
import { motion } from "motion/react"
function Header() {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage: `url(${darjeeling1})`}} id="Header">
        <Navbar/>
        <motion.div 
        initial={{opacity:0,y:100}}
        transition={{duration:1.5}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
                <h4 className='text-lg sm:text-xl md:text-3xl mb-2 text-gray-950'>A Local in your Pocket</h4>
                
                <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-15'>Explore  Darjeeling, Instantly.</h2>
                <h5 className='text-base sm:text-lg md:text-2xl mt-2 text-white'>AskDarj is your local AI travel guide, powered by real insights from real locals.</h5>
                <div className='space-x-6 mt-14'>
                        <a href="" className='border border-white px-8 py-3 rounded text-center'>Try now</a>
                        <a href="#Contact" className='bg-blue-500 px-8 py-3 rounded text-center'>Contact</a>
                </div>
        </motion.div>
    </div>
  )
}

export default Header