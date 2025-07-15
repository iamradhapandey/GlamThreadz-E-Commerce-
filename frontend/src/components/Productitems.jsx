import React, { useContext } from 'react';
import { ShopContext } from '../context/Shopcontext';
import { Link } from 'react-router-dom';

export const Productitems = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer block'>
      <div className='overflow-hidden rounded-md'>
        <img
          className='hover:scale-110 transition-transform duration-300 ease-in-out w-full'
          src={Array.isArray(image) ? image[0] : image} // ✅ safe check
          alt={name}
        />
      </div>
      <p className='pt-3 pb-1 text-sm truncate'>{name}</p>
      <p className='text-sm font-medium'>
        {currency}
        {price}
      </p>
    </Link>
  );
};
