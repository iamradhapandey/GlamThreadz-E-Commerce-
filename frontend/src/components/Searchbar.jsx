import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/Shopcontext';
import { assets } from '../assets/assets.js';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


// export const Searchbar = () => {
//   const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
//  const location = useLocation() ;
//  const [visible, setvisible] = useState(false)

export const Searchbar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();


 const handleSearch = (e) => {
  e.preventDefault();
  if (query.trim() !== '') {
    setSearch(query); // store in context if needed elsewhere
    navigate(`/collection?search=${encodeURIComponent(query)}`);
    setShowSearch(false); // optional: hide bar after search
    setQuery('');
  }
};

//  useEffect(()=>{
//    if(location.pathname.includes('collection')){
//      setvisible(true);
//     }
//     else{
//         setvisible(false) 
//     }
//  },[location])
  // return showSearch && visible ? (
  //   <div className="w-full px-4 py-4 bg-gray-50 border-b flex justify-center">
  //     <div className="relative w-full max-w-[600px]">
  //       <input
  //         type="text"
  //         value={search}
  //         onChange={(e) => setSearch(e.target.value)}
  //         placeholder="Search"
  //         className="w-full border border-gray-300 pl-4 pr-10 py-2 rounded-full text-sm focus:outline-none shadow-sm bg-white"
  //       />
  //       <img
  //         src={assets.search_icon}
  //         alt="search"
  //         className="absolute right-8 top-1/2 -translate-y-1/2 w-4 h-4"
  //       />
  //       <img
  //         onClick={() => setShowSearch(false)}
  //         src={assets.cross_icon}
  //         alt="close"
  //         className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 cursor-pointer"
  //       />
  //     </div>
  //   </div>
  // ) : null;
  return showSearch ? (
    <div className="w-full px-4 py-4 bg-gray-50 border-b flex justify-center">
      <form onSubmit={handleSearch} className="relative w-full max-w-[600px]">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
          className="w-full border border-gray-300 pl-4 pr-10 py-2 rounded-full text-sm focus:outline-none shadow-sm bg-white"
        />
        <img
          onClick={handleSearch}
          src={assets.search_icon}
          alt="search"
          className="absolute right-8 top-1/2 -translate-y-1/2 w-4 h-4 cursor-pointer"
        />
        <img
          onClick={() => setShowSearch(false)}
          src={assets.cross_icon}
          alt="close"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 cursor-pointer"
        />
      </form>
    </div>
  ) : null;
};
