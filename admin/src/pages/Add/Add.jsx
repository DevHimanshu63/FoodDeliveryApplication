import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function Add() {
  const [data , setData] = useState({
    name : '',
    description : '',
    price:'',
    category : '',
    image: ''
  })

  console.log("product data ", data);
  

  const handleChange=(e)=>{
    const {name , value} = e.target ;
    setData({
      ...data,
      [name] : value
    })

  }

  // const[image , setImage] = useState(null);

  const handleFileChange=(e)=>{
    const file = e.target.files[0];
    setData({
      ...data,
      image : file
    })
  }

  const formdata = new FormData();
  formdata.append('name', data.name);
  formdata.append('description', data.description);
  formdata.append('price', data.price);
  formdata.append('category', data.category);
  formdata.append('image', data.image);

  console.log('formdata------->>>>>>>>',formdata);
  

const handleSubmit= async (e)=>{
  console.log("handlesubmit called");
  e.preventDefault();
  try {
    const response = await axios.post('http://localhost:4000/api/food/add', formdata) ;
    console.log(response);
    if(response.status === 200){
      toast.success('Product added successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setData({
        name : '',
        description : '',
        price:'',
        category : '',
        image: ''
      })
    }else{
      toast.error('Failed to add product!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  } catch (error) {
    console.log(error);
  }
}


  return (
    <div className="w-1/2 mx-auto p-4">
      <ToastContainer/>
    <h1 className="text-2xl mb-6">Upload Image</h1>
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex flex-col">
        <input 
          type="file" 
          id="file" 
          name="image" 
          accept=".jpg,.png,.jpeg" 
          className="border border-gray-300  p-2"
          onChange={handleFileChange}
        />
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="product-name" className="block text-lg font-medium mb-2">Product Name</label>
          <input 
          onChange={handleChange}
            type="text" 
            id="product-name" 
            name="name" 
            className="border border-gray-300 p-2 w-full"
          />
        </div>

        <div>
          <label htmlFor="product-description" className="block text-lg font-medium mb-2">Product Description</label>
          <textarea 
          onChange={handleChange}
            id="product-description" 
            name="description" 
            cols="30" 
            rows="10" 
            className="border border-gray-300 p-2 w-full"
          ></textarea>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label htmlFor="category" className="block text-lg font-medium mb-2">Category</label>
            <select 
              id="category" 
              name="category" 
              className="border border-gray-300  p-2 w-full"
              onChange={handleChange}
            >
              <option value="salad">Salad</option>
              <option value="veg">Veg</option>
              <option value="non-veg">Non Veg</option>
            </select>
          </div>

          <div className="flex-1">
            <label htmlFor="product-price" className="block text-lg font-medium mb-2">Product Price</label>
            <input 
              onChange={handleChange}
              type="text" 
              id="product-price" 
              name="price" 
              className="border border-gray-300 p-2 w-full"
            />
          </div>
        </div>
        <button className='bg-black text-white p-2 px-7' type='submit'>ADD</button>
      </div>
    </form>
  </div>
  )
}

export default Add