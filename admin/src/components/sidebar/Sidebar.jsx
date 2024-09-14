import React from 'react'
import { IoAddCircleOutline } from "react-icons/io5";
import { GoChecklist } from "react-icons/go";
import { NavLink } from 'react-router-dom';

function sidebar() {
    return (
        <div className='w-1/6 bg-slate-400 border h-[100vh]'>
            <NavLink to="/add" className='flex cursor-pointer justify-center border text-center mt-4'>
                <div className='flex items-center gap-5'>
                <IoAddCircleOutline size={'50px'}/>
                <p>Add Items</p>
                </div>
            </NavLink>
            <NavLink to="/list" className='flex cursor-pointer justify-center border text-center mt-4'>
                <div className='flex items-center gap-5'>
                <GoChecklist size={'50px'} />
                <p>List items</p>
                </div>
            </NavLink>
            <NavLink to="/order" className='flex cursor-pointer justify-center border text-center mt-4 '>
            <div className='flex items-center gap-5 mr-7'>
                <GoChecklist size={'50px'} />
                <p>Order</p>
                </div>
            </NavLink>

        </div>
    )
}

export default sidebar