import React from 'react'
import HeroImage from "../assets/hero-image.jpg"
const Hero = () => {
  return (
    <div className='bg-gray-950 text-white text-center py-16'>
        <img src={HeroImage} alt="Hero" 
        className='mx-auto mb-8 rounded-full w-48 h-48 object-cover transform transition-transform duration-300 hover:scale-105'
        />
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Ibigbami marvellous</span>
            ,Full-Stack Developer
        </h1>
        <p className='mt-4 text-lg text-gray'>
           I speciaize in building modern and responsive web applications
        </p>
        <div className='mt-8 space-x-4'>
             <button
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me</button>
            <button
            className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
        </div>
    </div>

  )
}

export default Hero