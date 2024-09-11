import React, { useContext } from 'react'
import { storeContext } from '../../context/StoreContext'
import { Link } from 'react-router-dom';
function Cart() {
    const { cartItems, removefromCart, food_list  , getTotalAmount} = useContext(storeContext);

    return (
        <div className='cart-container'>
            <div className="cart-items mt-5">
                <ul className='flex justify-between font-bold'>
                    <li className='flex-1 text-center'>Items</li>
                    <li className='flex-1 text-center'>Title</li>
                    <li className='flex-1 text-center'>Price</li>
                    <li className='flex-1 text-center'>Quantity</li>
                    <li className='flex-1 text-center'>Total</li>
                    <li className='flex-1 text-center'>Remove</li>
                </ul>
            </div>

            <div className='cart-content'>
                {food_list.map((item) => {
                    if (cartItems[item._id] > 0) {


                        return (
                            <div className='flex justify-between items-center border-t py-2'>
                                <img className="w-[60px] ml-[5rem]" src={item.image} alt={item.name} />
                                <p className='flex-1 text-center ml-[4rem]'>{item.name}</p>
                                <p className='flex-1 text-center'>${item.price}</p>
                                <p className='flex-1 text-center'>{cartItems[item._id]}</p>
                                <p className='flex-1 text-center'>${item.price * cartItems[item._id]}</p>
                                <button onClick={() => removefromCart(item._id)} className='flex-1 text-center text-red-500'>Remove</button>
                            </div>
                        );
                    }

                })}
            </div>

            <div className='flex gap-5 justify-between w-full'>

            <div className='mt-[5rem] w-[50%] flex flex-col text-start'>

                <div>
                    <h1 className='text-4xl'>Cart Total</h1>
                </div>
                <div className='m-2 flex justify-between'>
                    <h3>Subtotal : </h3>
                    <p className='text-black'>${getTotalAmount()}</p>
                </div>
                <hr />
                <div className='m-2 flex justify-between'>
                    <h3>Delivery Fees :  </h3>
                    <p>${getTotalAmount() / 5 }</p>
                </div>
                <hr />
                <div className='m-2 flex  justify-between'>
                    <h3>Total : </h3>
                    <p>${getTotalAmount() + (getTotalAmount() / 5)}</p>
                </div>
                <hr />
                <div className='mt-5'>
               <Link to="/order">
               <button className='p-2 px-5 border bg-red-500 rounded-md'>Proceed to checkout</button>
               </Link>
                </div>
                
            </div>

            <div className='mt-[7rem] w-[30%]'>
                   <p className='text-[20px] '>if you a promocode , Enter it here</p>
                   <div className='flex mt-3'>
                   <input className='border w-full rounded-s-lg p-2 outline-none' placeholder='Promo code' type="text" />
                   <button className='bg-red-500 text-[20px] rounded-r-lg p-3 px-5'>submit</button>
                   </div>
            </div>
            </div>
        </div>

    )
}

export default Cart;