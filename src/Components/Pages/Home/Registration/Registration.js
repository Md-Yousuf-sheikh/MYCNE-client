import React from 'react';

const Registration = () => {
    return (
        <div className='py-10 relative' style={{ "backgroundImage": "url('/background/bg2.jpg')" }} >
            <div className='container mx-auto flex items-center py-20'>
                <div className='mx-auto text-center space-y-8 px-4' >
                    <h3 className='text-lg text-orange-400 tracking-widest'>REGISTRATION</h3>
                    <h1 className='text-4xl w-full lg:w-2/3  mx-auto font-semibold text-white'>Want to Make an Appointment Easily</h1>
                    <p className='text-white w-full  xl:w-8/12 mx-auto'>Regain your health and mobility. Leave your pain behind. Do the things you love. Our team of health professionals is dedicated to providing you with the best medical solutions for your injury or condition. Our specialists collaborate to find pain treatments</p>
                    <button className='border-2 rounded-lg group '>
                        <div className='bg-red-500 text-white px-12 py-3 rounded-lg group-hover:translate-x-0  group-hover:translate-y-0 translate-x-4 translate-y-2 transition-transform ease-in-out duration-300'>
                            Book Now
                        </div>
                    </button>
                </div>
            </div>
            <img className='absolute bottom-0 right-0 w-3/12  animate-bounce ' src="/icon/heart.png" alt="" />
        </div>
    );
};

export default Registration;