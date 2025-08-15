import React from 'react'
import askdarj2 from '../assets/askdarj2.png'
function Footer() {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
                <div className='w-full md:w-1/3 mb-8 md:mb-0 '>
                        <img src={askdarj2} alt="" className='h-12 w-auto object-contain mx-5 rounded-full'/>
                        <p className='text-gray-400 mt-4'>AskDarj is your local AI travel guide, powered by real insights from real locals.</p>
                </div>
                <div className='w-full md:w-1/5 mb-8 md:mb-0 flex flex-col items-center'>
                        <h3 className='text-white text-lg font-bold mb-4'></h3>
                        <ul className='flex flex-col text-gray-400 space-y-2'>
                                <a href="#Header" className='hover:text-white'>Home</a>
                                <a href="#About" className='hover:text-white'>About</a>
                                <a href="#Projects" className='hover:text-white'>Project</a>
                                <a href="#" className='hover:text-white'>Privacy Policy</a>
                        </ul>
                </div>
                <div className='w-full md:w-1/3'>
                        <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter</h3>
                        <p className='text-gray-400 mb-4 max-w-80'>The latest news, articles and resources sent to youe inbox weekly</p>
                        <div className='flex gap-2'>
                                <input type="email" placeholder='enter your email' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto'/>
                                <button className='py-2 px-4 rounded bg-blue-500 text-white'>Subscribe</button>
                        </div>
                </div>
        </div>
        <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
                Copyright  2025  sandeep. All Right Reserverd
        </div>
    </div>
  )
}

export default Footer