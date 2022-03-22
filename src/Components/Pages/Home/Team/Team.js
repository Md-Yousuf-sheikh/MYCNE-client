import React from 'react';

const team = [
    {
        "id": 1,
        "name": "Dr. Marya Smith",
        "img": "/image/top1.jpg",
        "title": "MDS - Periodontology and Oral Implantology",
        "category": "Dental",
        "location": "Georgia, USA",
        "ratting": 5,
        "totalRatting": 124
    },
    {
        "id": 2,
        "name": "Dr. Marya Smith",
        "img": "/image/top-2.jpg",
        "title": "MDS - Periodontology and Oral Implantology",
        "category": "Dental",
        "location": "Georgia, USA",
        "ratting": 5,
        "totalRatting": 124
    },
    {
        "id": 3,
        "name": "Dr. Marya Smith",
        "img": "/image/top-3.jpg",
        "title": "MDS - Periodontology and Oral Implantology",
        "category": "Dental",
        "location": "Georgia, USA",
        "ratting": 5,
        "totalRatting": 124
    },
    {
        "id": 4,
        "name": "Dr. Marya Smith",
        "img": "/image/top-4.jpg",
        "title": "MDS - Periodontology and Oral Implantology",
        "category": "Dental",
        "location": "Georgia, USA",
        "ratting": 5,
        "totalRatting": 124
    },
]

const Team = () => {
    return (
        <div className='py-24 bg-green-50'>
            <div className='container mx-auto space-y-3 text-center '>
                <h3 className='text-lg text-orange-400  tracking-widest'>TEAM</h3>
                <h1 className='text-4xl font-semibold'>Top Rated Doctors</h1>
                <p className='w-full lg:w-2/4 mx-auto px-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since the when an printer took.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 pt-5 px-4'>
                    {
                        team.map(item => (
                            <div className='bg-gray-200 rounded-lg'>
                                <div className='group shadow-md hover:shadow ml-3 mt-3 py-4 border rounded-lg bg-white text-left'>
                                    <div className='block lg:flex px-6  space-x-3 space-y-3 '>
                                        {/* <img className='rounded-full border-r-4 border-l-4 border-orange-500 w-12/12 md:w-3/4 lg:w-4/12 transition delay-300 ease-in mx-auto md:m-0' src={`${item.img}`} alt="" /> */}
                                        <div className='relative group-hover:rounded-full  overflow-hidden'>
                                            <img className='h-full w-full' src={`${item.img}`} alt="" />
                                            <div className='group-hover:absolute  top-0 left-0 h-full  group-hover:animate-spin  w-full border-l-4 rounded-full  border-r-4 border-orange-400 '></div>
                                        </div>
                                        <div className='lg:space-y-4 '>
                                            <h4 className='text-lg font-semibold' >{item.name}</h4>
                                            <h3 className='text-base text-gray-500' >{item.title}</h3>
                                            <h3 className='text-md text-orange-500 uppercase' >{item.category}</h3>
                                            <h5 className='text-gray-500 flex items-center' >
                                                <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span>{item.location}</span>
                                            </h5>
                                            <div>
                                                ratting
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='flex justify-center py-10'>
                    <div className='flex space-x-4 items-center group ease-in-out duration-300'>
                        <div className='h-0.5 w-16 group-hover:w-10 bg-orange-400 ease-in-out duration-300 '></div>
                        <div className='rounded-md border-2 border-orange-400 p-2 text-orange-400 '>
                            <svg className="h-6 w-6 group-hover:text-red-400 group-hover:animate-spin rotate-45 transform group-hover:rotate-180 ease-in-out duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                            </svg>
                        </div>
                        <div className='h-0.5 w-16 group-hover:w-10 bg-orange-400 ease-in-out duration-300 '></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;