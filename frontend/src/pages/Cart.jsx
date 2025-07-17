import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/Shopcontext'
import Product from './Product';
import Title from "../components/Title";
import { assets } from '../assets/assets';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    // Loop through each productId in cartItems
    for (const productId in cartItems) {
      const sizes = cartItems[productId]; // get size-wise quantity object
      // Loop through each size
      for (const size in sizes) {
        if (sizes[size] > 0) {
          // Push valid cart items (quantity > 0) into tempData
          tempData.push({
            _id: productId,
            size: size,
            quantity: sizes[size]
          });
        }
      }
    }

    // Set the cartData to local state for rendering
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />  {/* Page heading */}
      </div>

      <div>
        {
          cartData.map((item, index) => {
            // Find full product data from products array using _id
            const productData = products.find((Product) => Product._id === item._id);
            return (
              <div
                key={index}
                className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'
              >
                {/* Left Section: Product image and info */}
                <div className='flex items-start gap-6'>
                  <img className='w-16 sm:w-20' src={productData?.image[0]} alt="" />
                  <div>
                    <p className='text-xs sm:text-lg font-medium'>
                      {productData?.name}  {/* Product name */}
                    </p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>{currency}{productData.price}</p> {/* Product price */}
                      <p className='px-2 sm: px-3 sm:py-1 border bg-slate-50'>{item.size}</p> {/* Selected size */}
                    </div>
                  </div>
                </div>

                {/* Middle Section: Quantity input */}
                <input 
                  onChange={(e) =>
                    e.target.value === '' || e.target.value === '0'
                      ? null
                      : updateQuantity(item._id, item.size, Number(e.target.value))
                  }
                  className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1'
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                />

                {/* Right Section: Delete icon */}
                <img
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  className='w-4 mr-4 sm:w-5 cursor-pointer'
                  src={assets.bin_icon}
                  alt=""
                />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Cart;
