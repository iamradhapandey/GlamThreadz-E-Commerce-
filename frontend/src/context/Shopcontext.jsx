import { createContext, useState } from "react";
import { products } from "../assets/assets.js"; // Make sure `products` is exported properly from here

export const ShopContext = createContext(); 

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;

  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false); // ✅ FIXED: should be boolean, not string 'true'

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
