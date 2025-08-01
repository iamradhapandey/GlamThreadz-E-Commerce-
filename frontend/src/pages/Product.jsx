import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/Shopcontext";
import { products, assets } from "../assets/assets.js"; // ✅ Single line for both
import RelatedProducts from "../components/RelatedProducts.jsx"; // ✅ Default export assumed
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export const Product = () => {
  const { productId } = useParams() // <-- use lowercase 'p'
  const { products, currency , addToCart } = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [isAdded, setIsAdded] = useState(false);
  const navigate = useNavigate();
  const [image, setImage] = useState("")
  const [size, setSize] = useState("")
  const fetchProductData = async () => {
    products.map((item) => {
      const found = products.find((item) => item._id === productId)
      if (found) {
        setProductData(found)
        setImage(found.image[0])
      } else {
        console.log("❌ No product found")
      }
    })
  }

  useEffect(() => {
    fetchProductData()
  }, [productId])

  return productData ? (
    <div className=" border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/** product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/**product image */}
        <div className="flex-1 flex flex-col-reverse sm:flex-row gap-3">
          {/* Thumbnail images list */}
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                onClick={() => setImage(item)} // ✅ add this
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>
          <div className="w-full  sm:w-[80%]">
            <img className="w-full h-auto " src={image} alt="" />
          </div>
        </div>
        {/* -------- Product Info -------- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="text-gray-500 mt-5 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500 text-orange-500" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button  onClick={()=> {
            if(!isAdded){
              if(!size){
                toast.error("Select the size!");
                return ;
              }
              addToCart(productData._id, size);
              toast.success("Product added to cart!");
              setIsAdded(true);
            }else{
              navigate('/cart');
            }
          }} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
            {isAdded ? "Go to Cart" : "Add to Cart"}
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Cash on delivery is available on the product</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      {/** description */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm"> Description</b>
          <p className="border px-5 py-3 text-sm">Review (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-ray-500">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>

          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>
      {/**  display realated product */}

       <RelatedProducts category = {productData.category} subCategory = {productData.subCategory}/> 
    </div>
  ) : (
    <div className="opacity-0"></div>
  )
}

export default Product
