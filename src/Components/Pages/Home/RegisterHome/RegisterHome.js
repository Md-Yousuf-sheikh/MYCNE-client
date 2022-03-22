import React from 'react';

const RegisterHome = () => {
    return (
        <div>
            <div className='bg-green-50'>
                <div className='container mx-auto py-24 grid grid-cols-1 md:grid-cols-2 items-center '>
                    {/*  */}
                    <div className='px-4 space-y-8 '>
                        <h5 className='text-orange-400 tracking-widest'>REGISTER</h5>
                        <h1 className='text-4xl font-semibold'>Are You a Provider <span className='text-orange-400'>Inerrested</span> in Reaching New Patients?</h1>
                        <ul>
                            <li className='flex items-center'><svg className="h-6 w-6 mr-2 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>Lorem Ipsum has been the industry's standard dummy</li>
                            <li className='flex items-center'><svg className="h-6 w-6 mr-2 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>Text ever since the when an unknown printer took a galley</li>
                            <li className='flex items-center'><svg className="h-6 w-6 mr-2 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>Doctor type and scrambled it to make specimen been the</li>
                        </ul>
                        <button className='bg-orange-400 shadow-md p-4 rounded-md text-white'>List Your Practice on Mfine</button>
                    </div>
                    {/* image */}
                    <div className='p-5 '>
                        <div className='relative ml-10'>
                            <div className='py-5'>
                                <img className=' hover:scale-105 transition-transform ease-in-out duration-300  rounded-lg w-full md:w-4/6 ' src="image/Dentists.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default RegisterHome;