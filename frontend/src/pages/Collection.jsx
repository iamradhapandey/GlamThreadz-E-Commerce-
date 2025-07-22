import React, { useContext, useState, useEffect } from 'react';
import { assets } from '../assets/assets.js';
import { ShopContext } from '../context/Shopcontext.jsx';
import Title from '../components/Title.jsx';
import { Productitems } from '../components/Productitems.jsx';


export const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext); // ✅ Correct casing
  const [showFilter, setshowFilter] = useState(true);
  const [Category, setCategory] = useState([]);
  const [subcategory, setsubCategory] = useState([]);
  const [filterProducts, setfilterProducts] = useState([]);
  const [sortType, setsortType] = useState("relevant"); // ✅ Fixed here

  // ✅ Toggle category checkbox (add/remove)
  const toggleCategory = (e) => {
    if (Category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value)); // remove
    } else {
      setCategory(prev => [...prev, e.target.value]); // add
    }
  };

  // ✅ Toggle subcategory checkbox (add/remove)
  const toggleSubCategory = (e) => {
    if (subcategory.includes(e.target.value)) {
      setsubCategory(prev => prev.filter(item => item !== e.target.value)); // remove
    } else {
      setsubCategory(prev => [...prev, e.target.value]); // add
    }
  };

  // ✅ Filter products based on category, subcategory, and search
  const applyFilter = () => {
    let productscopy = products.slice(); // clone original products

    // ✅ Search filter (if searchbar is shown & not empty)
    if (search.trim() !== "") {
      productscopy = productscopy.filter(item =>
        item.name?.toLowerCase().includes(search.toLowerCase())
      );
    }
    

    // ✅ Category filter
    if (Category.length > 0) {
      productscopy = productscopy.filter(item => Category.includes(item.category));
    }

    // ✅ Subcategory filter
    if (subcategory.length > 0) {
      productscopy = productscopy.filter(item =>
        subcategory.includes(item.subCategory)
      );
    }

    setfilterProducts(productscopy); // ✅ Final filtered list
  };

  // ✅ Sort products based on selected sort type
  const sortProduct = () => {
    let fpCopy = filterProducts.slice(); // clone current filtered list
    switch (sortType.toLowerCase()) {
      case 'low-high':
        setfilterProducts(fpCopy.sort((a, b) => a.price - b.price)); // ascending
        break;
      case 'high-low':
        setfilterProducts(fpCopy.sort((a, b) => b.price - a.price)); // descending
        break;
      default:
        applyFilter(); // 'relevant' or unknown
        break;
    }
  };

  // ✅ Whenever filters or search change → apply filters
  useEffect(() => {
    applyFilter();
  }, [Category, subcategory, products, search, showSearch]);

  // ✅ Whenever sort type changes → sort filtered list
  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t w-full'>
      
      {/* ================= Left Side: Filter Panel ================= */}
      <div className='w-full sm:w-[250px] bg-gray-50 px-4 sm:px-0'>
        
        {/* ✅ Filter Toggle (for mobile) */}
        <p onClick={() => setshowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTER
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="Dropdown Icon" />
        </p>

        {/* ✅ Category Filter Options */}
        <div className={`border border-gray-300 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:px-5`}>
          <p className='mb-3 text-sm font-medium'>CATEGORY</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'><input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory} /> Men</p>
            <p className='flex gap-2'><input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory} /> Women</p>
            <p className='flex gap-2'><input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory} /> Kids</p>
          </div>
        </div>

        {/* ✅ Subcategory Filter Options */}
        <div className={`border border-gray-300 py-3 mt-5 ${showFilter ? '' : 'hidden'} sm:px-5`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'><input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory} /> Topwear</p>
            <p className='flex gap-2'><input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} /> Bottomwear</p>
            <p className='flex gap-2'><input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} /> Winterwear</p>
          </div>
        </div>
      </div>

      {/* ================= Right Side: Product Grid ================= */}
      <div className='flex-1'>
        
        {/* ✅ Title and Sort Dropdown */}
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTION'} />
          <select
            onChange={(e) => setsortType(e.target.value)}
            className="border-2 border-gray-300 text-sm"
          >
            <option value="relevant">Sort by relevant</option>
            <option value="high-low">Sort by high to low</option>
            <option value="low-high">Sort by low to high</option>
          </select>
        </div>

        {/* ✅ Product Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map((item, index) => (
            <Productitems
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
