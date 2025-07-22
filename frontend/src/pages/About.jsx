import React from 'react'
import { assets } from '../assets/assets.js'
import Title from '../components/Title.jsx'
import { NewsletterBox } from '../components/NewsletterBox.jsx'

export const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1= {'ABOUT '} text2 = {'US'}></Title>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>At GlamThreadz, the journey began with a simple belief: clothing should be an extension of a unique story. Each piece is meticulously crafted, blending timeless style with modern flair, to create garments that look and feel as if they were made just for you. Passion goes into every stitch, ensuring that when GlamThreadz is worn, the wearer embraces effortless confidence and genuine self-expression.</p>
        <p>GlamThreadz was founded on the principle that fashion should not come at the expense of the planet or people. The brand is committed to ethical and sustainable practices, from sourcing eco-friendly materials to ensuring fair labor conditions throughout the supply chain. When GlamThreadz is chosen, you join a community dedicated to a more conscious and sustainable future for fashion</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Our mission is to empower individuals to confidently express their unique style through high-quality, thoughtfully designed clothing that blends comfort and the latest trends</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1 = {'WHY '} text2 = {'CHOOSE US'}></Title>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p  className='text-gray-600'>Quality assurance (QA) is the systematic process of ensuring that your clothing products consistently meet defined standards of quality </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>In today's fast-paced world, convenience is no longer a luxury but a fundamental expectation for consumers, especially in the thriving e-commerce landscape.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Exceptional customer service is a crucial differentiator and a powerful tool for building brand loyalty and advocacy in the fiercely competitive fashion industry.</p>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}
