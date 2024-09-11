import React, { useState } from 'react'
import { menu_list } from '../../assets/frontend_assets/assets'
function ExploreMenu({category , setCategory}) {
    
  return (
    <div className='text-start flex flex-col gap-[20px]'>
        <h1>Explore Our Menu</h1>
        <p className='max-w-[60%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nesciunt vel neque, rem tempore ducimus architecto voluptatem tempora quaerat aliquam, cum asperiores ab sit illo suscipit quod iusto voluptate voluptates.</p>
        <div className='flex justify-center items-center gap-[30px] text-center overflow-x-scroll m-[20px]'>
        {menu_list.map((items , index) =>
            <div onClick={()=>setCategory(prev => prev===items.menu_name ? "All" : items.menu_name)} key={index}>
                <img  className={` ${category === items.menu_name ? 'border-4 border-red-500 rounded-[50%] p-[2px]' : ''} cursor-pointer w-[7.5vw] min-w-[80px]`} src={items.menu_image} alt={items.menu_name} />
                <p className='mt-[10px] text-[#747474] text-[1.4vw]'>{items.menu_name}</p>
            </div>
        )}
        </div>
        <hr className='m-[10px] h-[2px] bg-[#e2e2e2]' />
    </div>
  )
}

export default ExploreMenu