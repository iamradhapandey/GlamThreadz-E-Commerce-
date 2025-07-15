import React, { useContext, useState, useEffect } from 'react';
import { assets } from '../assets/assets.js';
import { ShopContext } from '../context/Shopcontext.jsx';
import Title from '../components/Title.jsx';
import { Productitems } from '../components/Productitems.jsx';

export const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setshowFilter] = useState(true);
  const [Category, setCategory] = useState([]);
  const [subcategory, setsubCategory] = useState([]);

const toggleCategory = (e) =>{
  if(Category.includes(e.target.value)){
    setCategory(prev => prev.filter(item => item !== e.target.value))
  }
  else{
    setCategory(prev => [...prev,e.target.value])
  }
}

const toggleSubCategory = (e) =>{
  if(subCategory.includes(e.target.value)){
    setsubCategory(prev => prev.filter(item => item !== e.target.value))
  }
  else{
    setsubCategory(prev => [...prev,e.target.value])
  }
}

  useEffect(() => {
    setfilterProducts(products);
  }, []);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t w-full'>
      
      {/* filter option */}
      <div className='w-full sm:w-[250px] bg-gray-50 px-4 sm:px-0'>
        <p
          onClick={() => setshowFilter(!showFilter)}
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
        >
          FILTER
          <img
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt="Dropdown Icon"
          />
        </p>

        {/* category filter */}
        <div className={`border border-gray-300 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:px-5`}>
          <p className='mb-3 text-sm font-medium'>CATEGORY</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'}onChange={toggleCategory} /> Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'}onChange={toggleCategory}  /> Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'}onChange={toggleCategory}  /> Kids
            </p>
          </div>
        </div>

        {/* subcategory filter */}
        <div className={`border border-gray-300 py-3 mt-5 ${showFilter ? '' : 'hidden'} sm:px-5`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory } /> Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bottomwear'}onChange={toggleSubCategory }  /> Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Winterwear'}onChange={toggleSubCategory }  /> Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTION'} />

          {/* product sort */}
          <select className="border-2 border-gray-300 text-sm">
            <option value="Relvant">sort by relevant</option>
            <option value="Hight-Low">sort by high to low</option>
            <option value="Low-High">sort by low to high</option>
          </select>
        </div>

        {/* product grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item, index) => (
              <Productitems
                key={index}
                name={item.name}
                id={item.id}
                price={item.price}
                image={item.image}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};
