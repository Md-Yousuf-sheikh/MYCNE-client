import React from 'react';

const service = [
    {
        "id": 1,
        "Title": "Doctor",
        "SubTitle": "Medicines & health products",
        "img": "/icon/doctor-b.png"
    },
    {
        "id": 2,
        "Title": "Consult",
        "SubTitle": "Consult with top doctors",
        "img": "/icon/Consult.png"
    },
    {
        "id": 3,
        "Title": "Pharmacy",
        "SubTitle": "Medicines & health products",
        "img": "/icon/Pharmacy.png"
    },
    {
        "id": 4,
        "Title": "Diagnostics",
        "SubTitle": "Book tests & checkups",
        "img": "/icon/Diagnostics.png"
    },
]

const Banner = () => {
    return (
        <div className='green-bg relative'>
            <div className='container mx-auto px-4 py-5 items-center grid grid-cols-1 gap-2 lg:grid-cols-2'>
                <div>
                    <img className='' src="/image/doctor.png" alt="" />
                </div>
                <div className='flex items-center '>
                    <div className='space-y-3'>
                        <h1 className='text-gray-50 pr-14 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold'>Your Trust is Our Greatest <span className='text-orange-400'>Incentive!</span></h1>
                        <h5 className='text-gray-50 text-lg'>There are many variations of passages of worem Ipsum available, but the majority have suffered alteration in some form</h5>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                            {
                                service.map(item => <div className='flex items-center space-x-2 my-2'>
                                    <img className='w-10 h-10' src={`${item.img}`} alt="" />
                                    <span>
                                        <h5 className='text-white text-lg font-semibold hsx' >{item.Title}</h5>
                                        <h5 className='text-white hsx' >{item.SubTitle}</h5>
                                    </span>
                                </div>)
                            }

                        </div>
                    </div>
                </div>
            </div>
            {/* filter ------------------------------------------------------------------------------------------------ */}
            <div className=' lg:absolute  lg:-bottom-10 left-0 w-full '>
                <div className='md:container mx-6 md:mx-auto px-4 py-8 bg-gray-50 z-20 shadow-md -mt-5 rounded-lg'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-5 justify-between items-center'>
                        {/* Action */}
                        <div className=' flex  items-center space-x-2'>
                            <span className='bg-green-800 text-white p-2 rounded-full'>
                                <svg className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                            </span>
                            <span>
                                <h1 className='font-semibold py-1 '>Action</h1>
                                <select className='border-b-2  border-black shadow-md  focus:outline-none px-5 py-2' name="cars" id="cars" placeholder='4' >
                                    <option value="volvo">Hospital</option>
                                    <option value="saab">Clinic</option>
                                    <option value="mercedes">Doctor</option>
                                    <option value="audi">Medical</option>
                                </select>
                            </span>
                        </div>
                        {/* date */}
                        <div className='flex  items-center space-x-2'>
                            <span className='bg-green-800 text-white p-2 rounded-full'>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </span>
                            <span>
                                <h1 className='font-semibold py-1 focus:outline-none border-none '>Date</h1>
                                <input className='p-2 border-b-2  border-black  focus:outline-none shadow-md' type="date" name="" id="" />
                            </span>
                        </div>
                        {/* Country */}
                        <div className='flex  items-center space-x-2'>
                            <span className='bg-green-800 text-white p-2 rounded-full'>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </span>
                            <span>
                                <h1 className='font-semibold py-1'>Country</h1>
                                <select className='border-b-2  border-black shadow-md  focus:outline-none px-5 py-2' name="cars" >
                                    <option value="saab">Bangladesh</option>
                                    <option value="mercedes">India</option>
                                    <option value="audi">Usa</option>
                                </select>
                            </span>
                        </div>
                        {/* City */}
                        <div className='flex  items-center space-x-2'>
                            <span className='bg-green-800 text-white p-2 rounded-full'>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </span>
                            <span>
                                <h1 className='font-semibold py-1'>City</h1>
                                <select className='border-b-2  border-black shadow-md  focus:outline-none px-5 py-2' name="cars" id="cars" placeholder='4' >
                                    <option value="volvo">Gopalgonj</option>
                                    <option value="saab">New Delhi</option>
                                    <option value="mercedes">New York</option>
                                </select>
                            </span>
                        </div>
                        {/* Search button */}
                        <div>
                            <button className='flex items-center text-white bg-orange-400 py-3 px-5 rounded-md '>
                                Search
                                <svg className="h-6 w-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/*  */}
                  
                </div>
            </div>
        </div>
    );
};

export default Banner;