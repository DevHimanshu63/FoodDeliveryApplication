import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function List() {
  const [ data, setData ] = useState([]);
  console.log('Data List of food--------->>>>>>', data);
  
  useEffect(()=>{
    const fetchList = async() =>{
      try {
        const response = await axios.get('http://localhost:4000/api/food/list');
        console.log(response);
        if(response.status=== 200){
          setData(response.data.data);
        }else{
          alert('data error: ' + response.status)
        }
      } catch (error) {
        console.log(error);
      }
    } 

  fetchList();
  },[])


  const removeItem= async(id)=>{
    console.log('item id-------->>>>>>', id);
    
    try{
      const response = await  axios.delete(`http://localhost:4000/api/food/remove?id=${id}`)
      console.log("delete response",response);
      if(response.status === 200){
        toast.success('Product removed successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setData(data.filter((item)=> item._id!== id));
      }
    }catch(error){
      console.log(error);
    }
  }
  return (
    <div className='w-full'>
      <ToastContainer/>
    {data.length > 0 ? (
      data.map((item, index) => (
        <ul
        className="flex flex-col md:flex-row justify-between items-center p-4 border border-gray-200 my-2"
        key={index}
      >
        <li className="flex-1 text-center md:text-left font-semibold">{item.name}</li>
        <li className="flex-1 text-center md:text-left">${item.price.toFixed(2)}</li>
        <li className="flex-1 text-center md:text-left">{item.description}</li>
        <li className="flex-1 text-center md:text-left">
          <img src={`http://localhost:4000/images/${item.image}`} alt="" />
        </li>
        <li className="flex-1 text-center md:text-left">{item.category}</li>
        <li onClick={()=>removeItem(item._id)} className='cursor-pointer text-red-500 '>Remove</li>
      </ul>
      ))
    ) : (
      <h1>No data found</h1>
    )}
  </div>
  )
}

export default List