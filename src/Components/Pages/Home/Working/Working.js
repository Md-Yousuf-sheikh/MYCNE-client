import React from 'react';
const working = [
    {
        "id": 1,
        "img": "/icon/location.png",
        "name": "Find a Local Physiotherapist",
        "title": "This helps us determine which Taskers are best for your job"
    },
    {
        "id": 2,
        "img": "/icon/cleandr.png",
        "name": "Choose Your Schedule",
        "title": "This helps us determine which Taskers are best for your job"
    },
    {
        "id": 3,
        "img": "/icon/Payment.png",
        "name": "Make a Payment",
        "title": "This helps us determine which Taskers are best for your job"
    },
]
const Working = () => {
    return (
        <div className='py-20'>
            <div className='container mx-auto space-y-3 text-center '>
                <h3 className='text-lg text-orange-400 tracking-widest'>WORKING</h3>
                <h1 className='text-4xl font-semibold'>How Mfine Works</h1>
                <p className='w-full lg:w-2/4 mx-auto px-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since the when an printer took.</p>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 py-10'>
                        {
                            working.map(item => <div>
                                <div className='space-y-2 px-5 group '>
                                    <div className='p-5 mx-auto pb-5 w-44 border-t-4 shadow-md border-orange-400 rounded-md bg-white'>
                                        <img className='mx-auto group-hover:-translate-y-3  transition ' src={item.img} alt="" />
                                    </div>
                                    <h2 className='font-semibold text-lg'>{item.name}</h2>
                                    <h5 className='w-full md:w-10/12 mx-auto'>{item.title}</h5>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Working;