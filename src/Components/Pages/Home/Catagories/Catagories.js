import React from 'react';
const catagories = [
    {
        "id": 1,
        "name": "Primary Care",
        "img": "/icon/Cardiology.png",
        "listing": 22
    },
    {
        "id": 2,
        "name": "Cardiology",
        "img": "/icon/Cardiology.png",
        "listing": 27
    },
    {
        "id": 3,
        "name": "MRI Resonance",
        "img": "/icon/MRI Resonance.png",
        "listing": 47
    },
    {
        "id": 4,
        "name": "Blood Test",
        "img": "/icon/Blood Test.png",
        "listing": 32
    },
    {
        "id": 5,
        "name": "Laboratory",
        "img": "/icon/Laboratory.png",
        "listing": 45
    },
    {
        "id": 6,
        "name": "Dentistry",
        "img": "/icon/Dentistry.png",
        "listing": 78
    },
    {
        "id": 7,
        "name": "X-Ray",
        "img": "/icon/X-Ray.png",
        "listing": 45
    },
    {
        "id": 8,
        "name": "Piscologist",
        "img": "/icon/Piscologist.png",
        "listing": 35
    },
    {
        "id": 9,
        "name": "Chiropractor",
        "img": "/icon/Chiropractor.png",
        "listing": 78
    },
    {
        "id": 10,
        "name": "Pediatrician",
        "img": "/icon/Pediatrician.png",
        "listing": 41
    },
]
const Catagories = () => {
    return (
        <div className='py-20 '>
            <div className='container mx-auto space-y-3 text-center '>
                <h3 className='text-lg text-orange-400  tracking-widest'>CATEGORIES</h3>
                <h1 className='text-4xl font-semibold'>Top Searched Specialties</h1>
                <p className='w-full lg:w-2/4 mx-auto px-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since the when an printer took.</p>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-5 px-4 '>
                    {
                        catagories.map(item => (
                            <div key={item.id} className='border group hover:bg-gray-400 transition duration-700 ease-in-out'>
                                <div className='space-y-5 hover:bg-orange-400 mr-2 mb-2 transition duration-300 ease-in-out  p-10'>
                                    <div className='group-hover:bg-white  rounded-full p-5 w-24 h-24 mx-auto transition duration-300 ease-in-out '>
                                        <img className='mx-auto h-12 ' src={item.img} alt={item.name} />
                                    </div>
                                    <h3>{item.name}</h3>
                                    <h6>{item.listing} listing</h6>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='flex justify-center py-10'>
                    <div className='flex space-x-4 items-center group ease-in-out duration-300'>
                        <div className='h-0.5 w-16 group-hover:w-10 bg-orange-400 ease-in-out duration-300 '></div>
                        <div className='rounded-md border-2 border-orange-400 p-2 text-orange-400 '>
                            <svg className="h-6 w-6 group-hover:text-red-400 group-hover:animate-spin  transform group-hover:rotate-180 ease-in-out duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
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

export default Catagories;