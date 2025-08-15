import React from 'react'
import askdarj from '../assets/askdarj1.png'
import { motion } from "motion/react"
function About() {
  return (
    <motion.div 
        initial={{opacity:0,x:200}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}}
        className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
        <h1 className='text-3xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>AskDarj</span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8 font-semibold'>AskDarj AI connects travelers with authentic food, hidden trails, and real taxi rates —  </p>
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <img src={askdarj} alt="" className='w-full sm:w-1/2 max-w-lg'/>
        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600 text-center'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                        <div>
                                <p className='text-4xl font-medium text-gray-800'>1,100+</p>
                                <p>Questions Answered</p>
                        </div>
                        <div>
                                <p className='text-4xl font-medium text-gray-800'>270+</p>
                                <p>Test Users</p>
                        </div>
                        <div>
                                <p className='text-4xl font-medium text-gray-800'>50+</p>
                                <p>Local Food Spots</p>
                        </div>
                        <div>
                                <p className='text-4xl font-medium text-gray-800'>30+</p>
                                <p>Transport Info</p>
                        </div>
                </div>
                <p className='my-10 max-w-lg'>AskDarj: The hill's first WhatsApp-based AI chatbot that helps you to explore like a true local. Co-founded by Tenzee Lahawang Bhutiya and Saharsh Thapa and Sudama Chettri, this is a homeground AI project backed by the GTA(GorkhaLand Teritorial Administration) Department of Tourism & already in beta with 500+ Users.</p>
                <button 
                onClick={() => window.open("https://wa.me/14123078756?text=HiAskDarj!", "_blank")}
                className='bg-blue-600 text-white px-8 py-2 rounded cursor-pointer'>Try Now</button>
        </div>
        </div>
    </motion.div>
  )
}

export default About