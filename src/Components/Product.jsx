/*import  {toast } from "react-hot-toast"
import { useDispatch, useSelector } from 'react-redux';
import { add, remove} from "../redux/Slice/CartSlice"
import { useState } from "react";

const Product = ({posts}) => {

  const {Cart} = useState ((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(posts));
    toast.success("item added to Cart");
  }
  const removeFromCart = () => {
    dispatch(remove(posts.id));
    toast.success("item removed to Cart")

  }
  return (
    <div>
      <div>
        <p>{posts.title}</p>
      </div>
      <div>
         <p>{posts.description}</p>
      </div>
      <div>
        <img src={posts.image}/>
        </div>
        <div>
          <p>{posts.price}</p>
        </div>
       {
        Cart.some((p) => p.id == posts.id) ? 
        (<button onClick={removeFromCart}>
          Remove Item
        </button>) :
        (<button onClick={addToCart}>
          Add to cart
        </button>)
       }
       </div>
  ) 
}

export default Product */
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from "../redux/Slice/CartSlice";

const Product = ({ posts }) => {
  const cart = useSelector((state) => state.cart); // ✅ Correct Redux state access
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(posts));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(posts.id));
    toast.success("Item removed from Cart");
  };

  return (
    <div className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline">
      
      <div className="text-gray-700 font-semibold text-lg text-left  truncate w-40 mt-1">
        <p>{posts.title}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left"
        >{posts.description.split(" ").slice(0,10).join(" ")+"..."}</p>
      </div>
      <div className="h-[180px]">
        <img src={posts.image} alt="product" className="h-full w-full" />
      </div>
      <div className="flex justify-between gap-12">

         <div>
        <p className="text-green-600 font-semibold ">${posts.price}</p>
      </div>
      {
        cart?.some((p) => p.id === posts.id) ? (
          <button 
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] 
          p-1 px-3 uppercase hover:bg-gray-700
          hover:text-white"
          onClick={removeFromCart}>Remove Item</button>
        ) : (
          <button onClick={addToCart}>Add to cart</button>
        )
      }
      </div>
      
    </div>
  );
};

export default Product;
