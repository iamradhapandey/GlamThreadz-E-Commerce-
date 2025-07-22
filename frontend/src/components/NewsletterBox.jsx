import React from 'react'

export const NewsletterBox = () => {

  const onSubmitHandler= (Event)=>{
    Event.preventDefault();
  }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'> Subscribe now & get 20% 0ff</p>
      <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <form  onSubmit={onSubmitHandler}className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 ' >
       <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter your email' required />
       <button type='submit' className='bg-black text-xs text-white py-4 px-10 cursor-pointer'> SUBSCRIBE</button>
      </form>
    </div>
  )
}
