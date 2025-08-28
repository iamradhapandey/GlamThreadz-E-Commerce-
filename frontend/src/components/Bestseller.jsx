import React, { useContext, useEffect, useState } from 'react';
import Title from './Title';
import { ShopContext } from '../context/Shopcontext';
import { Productitems } from './Productitems'; // ✅ must import this

export const Bestseller = () => {
  const { products } = useContext(ShopContext); // ✅ correct usage
  const [bestseller, setBestseller] = useState([]);

  useEffect(() => {
    const bestproduct = products.filter((item) => item.bestSeller); // ✅ case-sensitive
    setBestseller( bestproduct.slice(0, 5));
  }, [products]);

  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'BEST'} text2={'SELLER'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Discover our most popular products from trusted brands!
        </p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {bestseller.map((item, index) => (
          <Productitems
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Bestseller;
