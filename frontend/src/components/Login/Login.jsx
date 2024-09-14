import React, { useContext, useState } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import axios from 'axios';
import StoreContextProvider from '../../context/StoreContext';
function Login({setshowLogin}) {
    const {setToken} = useContext(StoreContextProvider)
    const [currState, setcurrState] = useState('Sign in to your account')

    const [Data , setData] = useState({
        name:'',
        email:'',
        password:''
    })

    const handleChange=(e)=>{
        const {name , value} = e.target;
        setData({
           ...Data,
            [name] : value
        })
    }

    console.log(Data);

    

    const handleSubmit= async(e)=>{
        e.preventDefault();
         let url = 'http://localhost:4000';
         if(currState === 'Sign in to your account'){
            url = url + '/api/user/login' ;
         }else{
            url = url + '/api/user/signup' ;
         }
         console.log("url of the api",url);
         
         try {
            const response = await axios.post(url, Data);
            console.log(response);
            if(response.status === 200 && currState === 'Sign in to your account'){
                alert('Login Successful');
                setshowLogin(false);
                setToken(response.data.token);
                localStorage.setItem('token', response.data.token);
            } 
            else if(response.status === 200) {
                alert('Signup Successful')
            } 
            else{
                alert('Error: '+ response.data.message);
            }
         } catch (error) {
            console.log(error);
         }

    }

    return (
        <div>
            <div class="flex min-h-[50vh] w-[50%] ml-[200px] mt-[200px] flex-col justify-center px-6 py-12 lg:px-8 absolute z-10 bg-slate-400">
                <div class="">
                    <img onClick={()=>setshowLogin(false)} class="mx-auto cursor-pointer float-right h-10 w-auto" src={assets.cross_icon} alt="Your Company" />
                    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">{currState}</h2>
                </div>

                <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit} class="space-y-6" action="#" method="POST">

                        {currState === 'Sign in to your account' ? <></> :<div>
                            <div class="flex items-center justify-between">
                            <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                           </div>
                            <div class="mt-2">
                                <input onChange={handleChange} id="name" name="name" type="name" autocomplete="name" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div> }
                        


                        <div>
                            <div class="flex items-center justify-between">
                                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">email</label>
                                
                            </div>
                            <div class="mt-2">
                                <input onChange={handleChange} id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div class="flex items-center justify-between">
                                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <div class="text-sm">
                                    <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                </div>
                            </div>
                            <div class="mt-2">
                                <input onChange={handleChange} id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{currState === 'Sign in to your account' ? 'Sign in' : 'Sign up'}</button>
                        </div>
                    </form>

                    {currState === 'Sign in to your account' ? 
                     <p class="mt-10 text-center text-sm text-gray-500">
                        Not a member?
                        <a onClick={()=>setcurrState('Sign Up for your account')} href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Create your Account</a>
                    </p> :

                    <p class="mt-10 text-center text-sm text-gray-500">
                    <a onClick={()=>setcurrState('Sign in to your account')} href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login in to your Account</a>
                    </p>
                    
                    }

                   
                </div>
            </div>
        </div>
    )
}

export default Login