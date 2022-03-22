import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SuingUp = () => {

    const [formChange, setFormChange] = useState(false)

    const handelLogin = e => {
        e.preventDefault();
    }
    const handelRegister = e => {
        e.preventDefault();
    }
    console.log(formChange);
    return (
        <div className='bg-transparent'>
            <div className='container mx-auto flex justify-center items-center min-h-screen  '>
                <div className=''>
                    <div className=' py-5'>
                        <NavLink to="/" className='float-right flex items-center justify-center h-10 w-10 mr-5 shadow-lg border-2 hover:scale-110 transition-all font-bold text-xl text-red-500 bg-gray-50  rounded-full'>X</NavLink>
                    </div>
                    {/* login */}
                    <form onSubmit={handelLogin} className={`${formChange ? "hidden" : 'w-full py-10  shadow-lg rounded-md md:w-4/4 space-y-5  bg-slate-50 p-4 bg-blend-darken'}`}>
                        <h1 className='text-2xl'>
                            Welcome Back !
                        </h1>
                        <input className='login-input' name='email' type="email" placeholder='Your email' />
                        <input className='login-input' name='password' type="password" placeholder='Your password' /><br />
                        <p className='text-black flex'>Create a new Account? <p onClick={() => { setFormChange(true) }} className='text-blue-700'>Register</p></p>
                        <button type='submit' className='bg-orange-400 w-full p-2 rounded-md'>Submit</button>
                    </form>
                    {/* Register*/}
                    <form onSubmit={handelRegister} className={`${formChange ? "w-full py-10  shadow-lg rounded-md md:w-4/4 space-y-5  bg-slate-50 p-4 bg-blend-darken" : "hidden "}`}>
                        <h1 className='text-2xl text-center '>
                            Register Now
                        </h1>
                        <input className='login-input' name='name' type="text" placeholder='Your Full Name' />
                        <input className='login-input' name='email' type="email" placeholder='Your email' />
                        <input className='login-input' name='password' type="password" placeholder='Your password' /><br />
                        <p onClick={() => { setFormChange(false) }} className='text-black flex space-x-2'>Alredy have a Account? <p className='text-blue-700'>Login</p></p>
                        <button type='submit' className='bg-orange-400 w-full p-2 rounded-md'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SuingUp;