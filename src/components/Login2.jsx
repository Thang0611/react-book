import React from 'react'
import loginImg from '../assets/login.jpg';
import { AiFillFacebook} from 'react-icons/ai';

import { FcGoogle} from 'react-icons/fc';
import { Link } from 'react-router-dom';
export default function Login2() {
  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
        <img className='absolute w-full h-full object-cover mix-blend-overlay'src={loginImg} alt="Img" />
        <div className=' flex justify-center items-center h-full '>
            <form className='bg-white w-full max-w-[400px] mx-auto p-8 relative' >
                <h2 className='text-3xl font-bold flex justify-center items-center py-5'>Login</h2>
                <div className='flex justify-around'>
                    <button className='flex items-center bg-gray-100 px-6 py-2 hover:bg-gray-200 '><AiFillFacebook className='mr-2'/>Facebook</button>
                    <button className='flex items-center bg-gray-100 px-6 py-2 hover:bg-gray-200'><FcGoogle className='mr-2'/>Google</button> 
                </div>
                <div className='flex flex-col py-2 px-2'>
                    <label>Username</label>
                    <input className='px-2' type="text"/>
                </div>
                <div className='flex flex-col py-2 px-2'>
                    <label>Password</label>
                    <input type="password" className='px-2'/>
                </div>
                <div className=''>
                    <button className='bg-indigo-600  w-full flex justify-center py-2 my-5 text-white'>Login</button>
                </div>
                <div className='flex justify-between'>
                    <p><input type="checkbox" name="" id="" />Remember Me</p>
                    <Link to={'/register'}>Create Account</Link>
                </div>
            </form>
        </div>
    </div>
  )
}
