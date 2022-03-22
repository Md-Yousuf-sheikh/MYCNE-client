import React from 'react';
import CountUp from 'react-countup';
const totalCount = [
    {
        "id": 1,
        "img": "/icon/Doctor.png",
        "title": "Doctor",
        "total": 432
    },
    {
        "id": 2,
        "img": "/icon/Customers.png",
        "title": "Customers",
        "total": 432
    },
    {
        "id": 3,
        "img": "/icon/Hospital.png",
        "title": "Hospital",
        "total": 432
    },
    {
        "id": 4,
        "img": "/icon/Labs.png",
        "title": "Labs",
        "total": 432
    },
]
const AskQuestions = () => {
    return (
        <div>
            <div className='container mx-auto mt-5 md:-mt-12 px-8'>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-10 '>
                    {
                        totalCount.map(item => (
                            <div className='text-center bg-white border-t-2 rounded-md py-6 space-y-4 shadow-md '>
                                <img className='mx-auto' src={item.img} alt="" />
                                <h1 className='text-3xl text-orange-400 ' >
                                    <CountUp end={`${item.total}`} duration={5} />
                                    +</h1>
                                <h1 className='text-lg text-green-900 font-semibold ' >{item.title}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='container mx-auto px-4 '>

            </div>
        </div>
    );
};

export default AskQuestions;