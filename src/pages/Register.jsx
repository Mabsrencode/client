import React, { useState } from 'react'
import UsePageMetaData from '../meta/UsePageMetaData'
import "../styles/login.css"
import google from "../assets/google.webp"
import { Link } from 'react-router-dom'

const Register = () => {
    UsePageMetaData('Register');
    const [seePassword, setSeePassword] = useState(false);
    const handleClick = () => {
        setSeePassword(!seePassword)
    }
    return (
        <section className='register'>
            <form action="" className='flex flex-col gap-6 w-[500px] p-10 rounded-xl bg-primary'>
                <h1 className='text-5xl text-center mb-4 text-white'>Register</h1>
                <div className='w-full relative'>
                    <input type="text" placeholder='Full Name' className='py-3 w-full px-6 rounded-full bg-gray border outline-none border-white placeholder:text-white text-gray-100' />
                </div>
                <div className='w-full relative'>
                    <input type="text" placeholder='Email' className='py-3 w-full px-6 rounded-full bg-gray border outline-none border-white placeholder:text-white text-gray-100' />
                </div>
                <div className='w-full relative'>
                    <input type="text" placeholder='Phone Number' className='py-3 w-full px-6 rounded-full bg-gray border outline-none border-white placeholder:text-white text-gray-100' />
                </div>
                <div className='w-full relative'>
                    <input type={`${seePassword ? "password" : "text"}`} placeholder='Password' className='py-3 w-full px-6 rounded-full bg-gray border outline-none border-white placeholder:text-white text-gray-100' />
                    {seePassword ? (<i onClick={handleClick} class="fa-solid fa-eye-slash absolute top-3 right-4 text-xl text-black cursor-pointer"></i>) : (<i onClick={handleClick} class="fa-solid fa-eye absolute top-3 right-4 text-xl text-black"></i>)}
                </div>
                <div className='w-full relative'>
                    <input type={`${seePassword ? "password" : "text"}`} placeholder='Confirm Password' className='py-3 w-full px-6 rounded-full bg-gray border outline-none border-white placeholder:text-white text-gray-100' />
                </div>
                {/* <div className='flex justify-between text-white'>
                    <div><input type="checkbox" className='cursor-pointer' /> <span>Remember Me</span></div> <Link to={"/forgot"} className='font-semibold'>Forgot Password</Link>
                </div> */}
                <Link to={"/dashboard"} className='py-3 px-6 bg-white rounded-full font-semibold text-center'>Register</Link>
                {/* <button className='py-3 px-6 bg-white rounded-full font-semibold'>Register</button> */}
                <p className='text-center text-gray-100'>Already have an account? <Link to={"/"} className='font-semibold'>Login</Link></p>
                <div className='text-center text-white'>
                    <div className='flex justify-center items-center gap-2'>
                        <div className='w-full bg-gray-100 h-[1px]'></div><p className='text-gray-100 text-nowrap'>Or Sign Up with Google</p><div className='w-full bg-gray-100 h-[1px]'></div>
                    </div>
                    <div className='bg-white py-3 rounded-full mt-8 hover:cursor-pointer'>
                        <div className='flex justify-center items-center gap-4 font-semibold'>
                            <img className='w-[20px] h-[20px]' src={google} alt="google" /><h1 className='text-black'>Google</h1>
                        </div>
                    </div>
                </div>
            </form>

        </section>
    )
}

export default Register