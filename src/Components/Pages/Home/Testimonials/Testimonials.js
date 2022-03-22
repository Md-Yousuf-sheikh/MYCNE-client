import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Testimonials = () => {
    return (
        <div className='py-20'>
            <div className='container mx-auto space-y-3 text-center '>
                <h3 className='text-lg text-orange-400  tracking-widest'>TESTIMONIALS</h3>
                <h1 className='text-4xl font-semibold'>What People Say</h1>
                <p className='w-full lg:w-2/4 mx-auto px-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since the when an printer took.</p>
                <div className='test-b-round '>
                    <div className='test-b-round '>
                        <div className='test-b-round z-20 '>
                            <div className='overflow-hidden xl:border-x-4 rounded-full border-white'>
                                <Swiper className="mySwiper -z-10  ">
                                    <SwiperSlide>
                                        <div className='py-20 px-4'>
                                            <div className='relative text-center  xl:w-5/6 mx-auto rounded-md md:rounded-full shadow-xl border bg-white py-8 px-9 '>
                                                <div className='space-y-3'>
                                                    <p className='px-5'>Best service are provide us. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make specimen</p>
                                                    <h4 className='text-xl uppercase text-green-900'>Darren Elder</h4>
                                                    <h5 className='text-orange-400'>Designer</h5>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 absolute top-0 right-1/2 -mt-10 -mr-7 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                                                </svg>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    {/* 2 */}
                                    <SwiperSlide>
                                        <div className='py-20 px-4'>
                                            <div className='relative text-center  xl:w-5/6 mx-auto rounded-md md:rounded-full shadow-xl border bg-white py-8 px-9 '>
                                                <div className='space-y-3'>
                                                    <p className='px-5'>Best service are provide us. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make specimen</p>
                                                    <h4 className='text-xl uppercase text-green-900'>Darren Elder</h4>
                                                    <h5 className='text-orange-400'>Designer</h5>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 absolute top-0 right-1/2 -mt-10 -mr-7 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                                                </svg>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='py-20 px-4'>
                                            <div className='relative text-center  xl:w-5/6 mx-auto rounded-md md:rounded-full shadow-xl border bg-white py-8 px-9 '>
                                                <div className='space-y-3'>
                                                    <p className='px-5'>Best service are provide us. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make specimen</p>
                                                    <h4 className='text-xl uppercase text-green-900'>Darren Elder</h4>
                                                    <h5 className='text-orange-400'>Designer</h5>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 absolute top-0 right-1/2 -mt-10 -mr-7 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                                                </svg>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='py-20 px-4'>
                                            <div className='relative text-center  xl:w-5/6 mx-auto rounded-md md:rounded-full shadow-xl border bg-white py-8 px-9 '>
                                                <div className='space-y-3'>
                                                    <p className='px-5'>Best service are provide us. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make specimen</p>
                                                    <h4 className='text-xl uppercase text-green-900'>Darren Elder</h4>
                                                    <h5 className='text-orange-400'>Designer</h5>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 absolute top-0 right-1/2 -mt-10 -mr-7 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                                                </svg>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                </Swiper>
                            </div>
                            {/* 3 */}
                            {/* 1 */}
                            <img className='test-img z-10 top-1/4 -left-3 w-12 animate-bounce' src="/image/top-2.jpg" alt="" />
                            <img className='test-img z-10 top-1/3 -right-4 w-10 animate-bounce' src="/image/top-2.jpg" alt="" />
                        </div>
                        {/* 2 */}
                        {/* 1 */}
                        <img className='test-img bottom-1/4 -left-3 rounded-full w-10 animate-bounce' src="/image/top-2.jpg" alt="" />
                        <img className='test-img top-2/3 -right-1 rounded-full w-8 animate-bounce' src="/image/top-2.jpg" alt="" />
                        <div className='test-img top-1/4 -right-0 rounded-full animate-bounce  w-8 h-8 bg-orange-500'></div>
                    </div>
                    {/* 1 */}
                    <img className='test-img bottom-2/4 -left-5  animate-bounce' src="/image/top-2.jpg" alt="" />
                    <img className='test-img top-1/4 -right-4 w-14 animate-bounce' src="/image/top-2.jpg" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Testimonials;