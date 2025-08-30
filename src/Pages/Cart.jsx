/*import React, { useEffect,  useState } from 'react'
import CartItem from '../Components/CartItem'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"

const Cart = () => {

  const { Cart} = useSelector((state) => state);
  console.log("printing Cart")
  console.log(Cart)
  const {totalAmount, setTotalAmount} = useState(0);

  useEffect ( () => {
    setTotalAmount(Cart.reduce( (acc, curr) => acc+ curr.price,0));
  },[Cart])
  return (
    <div>
      {
        Cart.length > 0 ?
        (<div> 
       <div>
        {
          Cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          })
        }
       </div>

       <div>
        <div> 
          <div>Your Cart </div>
          <div>Summary </div>
          <p>
            <span>Total items: {Cart.length}</span>
          </p>
        </div>
        <div>
          <p>Total Amount: ${totalAmount}</p>
          <button>
            CheckOut Now
          </button>
        </div>
        </div>

        </div>) :
        (<div> 
          <h1>Cart Empty</h1>
          <Link to={"/"}>
          <button>
            Shop Now
          </button>
          </Link>
        </div>)
      }
    </div>
  )
}

export default Cart */

import React, { useEffect, useState } from 'react';
import CartItem from '../Components/CartItem';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const Cart = () => {
  const Cart = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(Cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [Cart]);

  return (
    <div lassName="min-h-screen bg-gray-50 flex items-center justify-center py-8 px-2">
      {
        Cart.length > 0 ? (
          <div>
            <div className="flex-1 min-w-[380px] max-w-xl bg-white rounded-xl p-8 shadow-md">
              {
                Cart.map((item, index) => (
                  <CartItem key={item.id} item={item} itemIndex={index} />
                ))
              }
            </div>

            <div>
              <div>
                <div className='text-gray-600 mb-2'>Your Cart</div>
                <div className="flex-1 max-w-xs min-w-[300px] bg-gray-100 rounded-xl px-7 py-6 h-max mt-8 
                md:mt-0 shadow-lg">Summary</div>
                <p><span>Total items: {Cart.length}</span></p>
              </div>
              <div>
                <p className='text-lg font-bold text-gray-800 my-5'> Total Amount: ${totalAmount}</p>
                <button className="w-full bg-green-600 hover:bg-green-800 text-white py-3 
                rounded-lg text-lg font-semibold transition">CheckOut Now</button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl text-center text-gray-500 font-medium">Cart Empty</h1>
            <Link to={"/"}>
              <button className='flex-1 max-w-xs min-w-[300px] bg-gray-100 rounded-xl px-7 py-6 h-max mt-8 
                md:mt-0 shadow-lg"'>Shop Now</button>
            </Link>
          </div>
        )
      }
    </div>
  );
};

export default Cart; 

