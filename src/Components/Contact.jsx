import React from 'react'
import { motion } from "motion/react"
const Contact = () => {
  return (
    <motion.div 
        initial={{opacity:0,y:100}}
        transition={{duration:1}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
        <h1 className='text-3xl sm:text-4xl font-bold mb-2 text-center'>Contact <span className='underline underline-offset-4 decoration-1 under font-light'>AskDarj</span></h1>
        <p className='text-gray-500 max-w-80 mx-auto text-center mb-12 font-semibold'>If you are a local, want to contribute the details feel free to contact —  </p>
        <form 
        action="https://formsubmit.co/kashyapadhikari09@gmail.com"
        method="POST"
        className='max-w-2xl mx-auto text-gray-600 pt-8'>
                <div className='flex flex-wrap'>
                        <div className='w-full md:w-1/2 text-left'>
                                Your Name
                                <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" placeholder='Your Name' name="Name" required/>
                        </div>
                        <div className='w-full md:w-1/2 text-left md:pl-4'>
                                Your eamil
                                <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="Email" placeholder='Your Email' name="email" required/>
                        </div>
                </div>
                <div className='my-6 text-left'>
                        Message
                        <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'
                        name="Message" placeholder='Message' required></textarea>
                </div>
                <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded cursor-pointer'>Send message</button>
        </form>
    </motion.div>
  )
}

export default Contact