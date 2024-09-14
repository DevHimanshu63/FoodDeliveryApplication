import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const storeContext = createContext(null);

export const StoreContextProvider = (props) => {

    const [cartItems , setcartItems] = useState('');
    const [token , setToken] = useState('')

    useEffect(()=>{
        console.log('cartItems',cartItems);
    },[cartItems])

    const addtoCart = (itemId)=>{
        console.log('addtoCart------>',itemId);
        if(!cartItems[itemId]){
            setcartItems((prev)=>({...prev , [itemId]:1}));
        }else{
            setcartItems((prev)=>({...prev , [itemId]:prev[itemId]+1}))
        }
    }

    const removefromCart = (itemId) =>{
        setcartItems((prev)=>({...prev , [itemId]:prev[itemId]-1}))
    }

    const getTotalAmount =()=>{
        let totalAmount = 0  ;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let iteminfo = food_list.find((product)=>product._id==item);
                totalAmount += iteminfo.price * cartItems[item] ;  
            }
        }
        return totalAmount ;
        
    }
    




    const contextValue = {
        food_list,
        cartItems ,
        setcartItems,
        addtoCart,
        removefromCart,
        getTotalAmount,
        token,
        setToken,
    }

    return (
        <storeContext.Provider value={contextValue}>
            {props.children}
        </storeContext.Provider>
    )
}

export default StoreContextProvider ;