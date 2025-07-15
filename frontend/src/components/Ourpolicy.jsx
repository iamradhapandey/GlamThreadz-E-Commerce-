import React from 'react';
import { assets } from '../assets/assets.js';

export const Ourpolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div className='flex flex-col items-center text-center'>
        <img src={assets.exchange_icon} className='w-12 mb-5' alt="Exchange Icon" />
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-400'>We offer hassle free exchange policy</p>
      </div>

      <div className='flex flex-col items-center text-center'>
        <img src={assets.quality_icon} className='w-12 mb-5' alt="Quality Icon" />
        <p className='font-semibold'>7 Days Policy</p>
        <p className='text-gray-400'>We provide 7 days free return policy</p>
      </div>

      <div className='flex flex-col items-center text-center'>
        <img src={assets.support_img} className='w-12 mb-5' alt="Support Icon" />
        <p className='font-semibold'>Best Customer Support</p>
        <p className='text-gray-400'>We provide 24/7 customer support</p>
      </div>
    </div>
  );
};
