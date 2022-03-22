import React from 'react';

const FindDoctor = () => {
    return (
        <div className='bg-green-50'>
            <div className='container mx-auto py-24 grid grid-cols-1 md:grid-cols-2 items-center  justify-center '>
                {/* image */}
                <div className='p-5 '>
                    <div className='relative ml-10'>
                        <div className=''>
                            <img className=' hover:scale-105 transition-transform ease-in-out duration-300  rounded-lg w-4/6 ' src="image/Dentists.png" alt="" />
                        </div>
                        <div className='absolute -bottom-8 -left-5 -z-10 border-orange-400 animate-bounce  triangle mt-10 triangle-1 '>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className='px-4 space-y-8 '>
                    <h1 className='text-4xl font-semibold'>We Can Help You Find <span className='text-orange-400'>Doctor</span> And <span className='text-orange-400'>Dentists</span> by City</h1>
                    <p className=''>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make specimen been the industry's standard.</p>
                    <div className='relative'>
                        <input className='border-2 w-full p-2.5 rounded-md outline-none focus:shadow-md' type="text" placeholder='Find Doctors & Dentist' />
                        <button className='absolute hover:scale-105 top-0 right-0 bg-orange-400 p-3 rounded-r-md'>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default FindDoctor;