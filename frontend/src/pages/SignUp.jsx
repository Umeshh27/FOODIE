import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function SignUp() {
  const primaryColor='#ff4d2d';
  const hoverColor='#e64323';
  const bgColor='#fff9f6';
  const borderColor='#ddd';
  const [showPassword,setShowPassword]=useState(false);
  return (
    <>
    <div className='min-h-screen w-full flex items-center justify-center p-4' style={{background:bgColor}}>
      <div className={`bg-white rounded-xl shadow-lg w-full max-w-md p-8 border-[1px] `} style={{border:`1px solid ${borderColor}`}}>

        <h1 className={`text-3xl font-bold mb-2`} style={{color:primaryColor}}>FOODIE</h1>
        <p className='text-gray-600 mb-8'>Create Your Account To Get Deliveries.</p>

        {/* fullName */}
        <div className='mb-4'>
          <label htmlFor="fullName" className='block text-gray-700 front-medium mb-1'>Full Name</label>
          <input type="text" name="" id="" className='w-full border rounded-lg px-3 py-2 focus:outline-none'  placeholder='Enter Your Full Name' style={{border:`1px solid ${borderColor}`}}/>
        </div>

        {/* Email  */}
        <div className='mb-4'>
          <label htmlFor="email" className='block text-gray-700 front-medium mb-1'>Email</label>
          <input type="email" name="" id="" className='w-full border rounded-lg px-3 py-2 focus:outline-none'  placeholder='Enter Your Email' style={{border:`1px solid ${borderColor}`}}/>
        </div>

           {/* Mobile  */}
        <div className='mb-4'>
          <label htmlFor="mobile" className='block text-gray-700 front-medium mb-1'>Mobile</label>
          <input type="email" name="" id="" className='w-full border rounded-lg px-3 py-2 focus:outline-none'  placeholder='Enter Your Mobile Number' style={{border:`1px solid ${borderColor}`}}/>
        </div>

           {/* Password  */}
        <div className='mb-4'>
          <label htmlFor="password" className='block text-gray-700 front-medium mb-1'>Password</label>
          <div className='relative'>
            <input type={`${showPassword?"text":"password"}`} name="" id="" className='w-full border rounded-lg px-3 py-2 focus:outline-none'  placeholder='Enter Your Password' style={{border:`1px solid ${borderColor}`}}/>

            <button className='absolute right-3 top-[14px] text-gray-500 right-3 cursor-pointer' onClick={()=>setShowPassword(prev=>!prev)}>{!showPassword?<FaEye />:<FaEyeSlash />}</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SignUp