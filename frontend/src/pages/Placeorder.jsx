import React from "react"
import { CartTotal } from "../components/CartTotal"
import Title from "../components/Title" // assumed missing import
import { assets } from "../assets/assets.js" // assumed missing import
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/Shopcontext";


export const Placeorder = () => {
   
   const [method, setMethod] = useState('cod'); // State to manage payment method

   const {navigate} = useContext(ShopContext) ;

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="First Name"
          />
          <input
            type="text"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="Last Name"
          />
        </div>

        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="email address"
        />
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="street"
        />

        <div className="flex gap-3">
          <input
            type="text"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="city"
          />
          <input
            type="text"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="state"
          />
        </div>

        <div className="flex gap-3">
          <input
            type="number"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="zipcode"
          />
          <input
            type="text"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="country"
          />
        </div>

        <input
          type="number"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          placeholder="phone"
        />
      </div>

      {/* Right Section: Order Summary */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/** --------PAYMENT METHOD SELECTION */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div  onClick={()=>setMethod('stripe')}className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={` min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400': ''}`}> </p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
            </div>

            <div onClick={()=>setMethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={` min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400': ''}`}> </p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
            </div>

            <div onClick={()=>setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400': ''}`} ></p>
              <p className="text-gray-500 text-sm front- medium mx-4">CASH ON DELIVERY</p>
            </div>
          </div>

           <div className=" w-full text-end mt-8">
           <button
      onClick={() => navigate('/orders')}
      className="bg-black text-white px-16 py-3 text-sm"
    >
      PLACE ORDER
    </button>
           </div>

        </div>
      </div>
    </div>
  )
}
