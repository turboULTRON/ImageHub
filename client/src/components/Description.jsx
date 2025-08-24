import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'

const Description = () => {
  return (
    <motion.div
    initial={{opacity:0.2,y:100}}
    animate={{opacity:1}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    
    className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
      <h1 className='text-3xl text-blue-400 sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
      <p className='text-gray-500 mb-8'>From Words to Wonders — Create Anything with AI</p>
      <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center '> 
        <img src={assets.sample_img_1} alt="" className='w-80 cl:w-96 rounded-lg'/>
        <div>
          <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI-Powered Text to Image Generator </h2>
          <p className='text-gray-600'>Turn your imagination into breathtaking visuals with our cutting-edge AI Text-to-Image Generator!
Just type your idea, and watch as our powerful AI transforms your words into stunning, high-quality images in seconds. Perfect for artists, designers, storytellers, and dreamers, this tool makes creativity effortless. From bold concepts to subtle details — if you can describe it, our AI can create it.</p>
          
          <p className='text-gray-600'>Simplify type in a text prompt,and our cutting-edge AI will generate high-Quality images in seconds.From product visuals to character designs and portraits, even conceptss that don't yet exits can be visualized effortlessly. Powered by advanced AI technology , the creative possibilities are limitless! </p>
        </div>
      </div>

    </motion.div>
  )
}

export default Description