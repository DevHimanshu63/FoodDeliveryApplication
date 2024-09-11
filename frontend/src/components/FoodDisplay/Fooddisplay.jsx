import React, { useContext, useState } from 'react'
import { storeContext } from '../../context/StoreContext'
import { assets } from '../../assets/frontend_assets/assets';
function Fooddisplay({ category }) {
  const { food_list } = useContext(storeContext)
  // console.log(food_list);

  const { cartItems, addtoCart, removefromCart, setcartItems } = useContext(storeContext)



  // const handleCountChange = (itemId, delta) => {
  //   console.log("called");
  //   setItemCounts(prevCounts => {
  //     const currentCount = prevCounts[itemId] || 0;
  //     const newCount = Math.max(currentCount + delta, 0);
  //     return {
  //       ...prevCounts,
  //       [itemId]: newCount
  //     };
  //   });
  // };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Top Dishes Near You</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {food_list.map((item) => {
          if (category === 'All' || category === item.category) {
            const ItemInCart = cartItems[item._id] || 0 ;
            return (
              <div
                key={item._id}
                className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                {ItemInCart === 0 ? 
                <img
                  className='cursor-pointer flex m-auto '
                  onClick={() => addtoCart(item._id)}
                  src={assets.add_icon_white}
                  alt="Add"
                /> :
                  <div className='flex justify-between items-center p-4 ' >
                    <img
                      className='cursor-pointer '
                      onClick={() => removefromCart(item._id)}
                      src={assets.remove_icon_red}
                      alt="Remove"
                    />
                    <p>{cartItems[item._id]}</p>
                    <img
                      className='cursor-pointer'
                      onClick={() => addtoCart(item._id)}
                      src={assets.add_icon_green}
                      alt="Add"
                    />
                  </div>
                }

                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                  <img
                    src={assets.rating_starts}
                    alt="Rating Stars"
                    className="mx-auto my-2"
                  />
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <p className="font-bold">Price: ${item.price}</p>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  )
}

export default Fooddisplay