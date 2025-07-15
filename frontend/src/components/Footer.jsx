import React from 'react'
import { assets } from '../assets/assets.js'

export const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm'>

            <div>
                <img src={assets.logo}className='mb-5 w-32' alt="" />
                <p className='w-full md:2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, natus repellendus. Minus numquam voluptatum excepturi ipsum culpa! Hic officia necessitatibus veniam repellat laborum eligendi harum inventore ipsam! Libero voluptatibus alias perferendis laudantium vel doloremque consequatur adipisci fugiat minima tenetur dignissimos autem illum et, sequi necessitatibus. Rerum repudiandae quis sapiente esse beatae atque ipsum quas? Saepe.</p>
            </div>

              <div> 
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li> privacy policy</li>
                </ul>
              </div>
              <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-212-345-9876</li>
                    <li>contact@forever.com</li>
                </ul>
              </div>
        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com - All Right Reserved</p>
        </div>
    </div>
  )
}
