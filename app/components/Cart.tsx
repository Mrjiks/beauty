import React from "react";
import Image from "next/image";
import useStore, { Product } from "@/app/store";
import CartIcon from "./CartIcon";

const Cart: React.FC = () => {
  const cart: Product[] = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const clearCart = useStore((state) => state.clearCart);
  const cartItemCount = useStore((state) => state.cartItemCount);
  const cartTotalPrice = useStore((state) => state.cartTotalPrice);

  return (
    <div className='container py-10 min-h-screen'>
      <div className='flex items-center justify-between mb-3 px-2'>
        <h2 className='font-bold text-2xl'>Shopping Cart</h2>
        <p className='hidden md:block '>Number of items in the cart:</p>
        {cart.length > 0 && <CartIcon cart={cart.length} />}
      </div>

      <ul className='flex gap-2 flex-col '>
        {cart?.map((product) => {
          return (
            <ul className='flex gap-2' key={product.id}>
              <li className='flex gap-2 py-2 justify-between border w-full px-2'>
                <div className='aspect-square relative '>
                  <Image
                    height={50}
                    width={100}
                    src={product?.src}
                    alt={product?.name}
                    className='object-fit bg-gray-200 '
                  />
                </div>
                <div className='flex  justify-between gap-2 flex-col w-1/2'>
                  <p className=' font-bold '>{product.name}</p>
                  <p>Price : ${product.price}</p>
                  <p>{product.description}</p>
                </div>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className='bg-red-600 h-8 mr-3 my-10 rounded-lg p-2 text-justify'>
                  Remove
                </button>
              </li>
            </ul>
          );
        })}
      </ul>
      <button onClick={clearCart} className='bg-red-500 w-32 my-6'>
        Empty Cart
      </button>
    </div>
  );
};

export default Cart;
