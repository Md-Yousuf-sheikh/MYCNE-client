import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
// links 
const links = [
    {
        id: 1,
        name: 'Home',
        url: "/"
    },
    {
        id: 2,
        name: 'About us',
        url: "about"
    },
    {
        id: 3,
        name: 'Shop',
        url: "shop"
    },
    {
        id: 4,
        name: 'Blog',
        url: "blog"
    },
    {
        id: 5,
        name: 'Search',
        url: "search"
    },
    {
        id: 6,
        name: 'Contact',
        url: "contact"
    },
]

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false)

    // handel change header
    const headerChange = () => {
        if (window.scrollY > 10) {
            setHeaderFixed(true)

        } else {
            setHeaderFixed(false)
        }
    }
    window.addEventListener('scroll', headerChange);

    return (
        <div>
            <div className={`${headerFixed ? 'fixed  py-4 z-30 bg-white text-black  mt-0 shadow-lg' : 'green-bg py-4 pt-5 '} w-full  transition-all delay-75 ease-in-out  `}>
                <div className="relative">
                    {/* For large screens */}
                    <div className="px-2">
                        <div className="container mx-auto  flex justify-between px-4 items-center">
                            {/* logo */}
                            <div className=' flex  items-center'>
                                <div className='text-2xl font-bold flex items-center uppercase'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-orange-400 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                                    </svg>
                                    <div className=''>
                                        MYCNE
                                        <span className='animate-ping  text-blue-500'>.</span>
                                    </div>
                                </div>
                            </div>
                            {/* L:inks */}
                            <div className='hidden md:flex'>
                                <ul className='flex space-x-8'>
                                    {
                                        links.map(link => (
                                            <Link to={link.url} key={link.id} className={`${headerFixed ? "text-black cursor-pointer hover:text-gray-400 transform hover:translate-x-2  font-semibold uppercase hover:scale-110 ease-in-out duration-300" : "text-white cursor-pointer hover:text-gray-400 transform hover:translate-x-2  font-semibold uppercase hover:scale-110 ease-in-out duration-300"}`}>{link.name}</Link>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className='flex'>
                                {/* Login  */}
                                <div className='flex justify-end items-center space-x-3'>
                                    <div>
                                        <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                        </svg>
                                    </div>
                                    <img className='w-8 rounded-full' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" alt="" />
                                    <div className=''>
                                        {/* <NavLink to={'/suingUp'} className={`${headerFixed ? 'text-black flex' : 'text-white flex'}flex items-center px-5`} >
                                            <span className='flex '>
                                                <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                                Sing Up
                                            </span>
                                        </NavLink> */}
                                        <button className='bg-orange-400 hidden md:flex p-1 rounded-sm text-white' title='Log Out Your Account ??'>
                                            Log out
                                        </button>

                                    </div>
                                </div>
                                {/* menu icon */}
                                <div className='flex items-center space-x-3'>
                                    <button aria-label="open menu" onClick={() => setShowMenu(true)} className={`${!headerFixed && 'text-black'}  ml-3 focus:outline-none focus:ring-2 md:hidden rounded focus:ring-gray-600`}>
                                        <svg className="fill-stroke" width={30} height={30} viewBox="0 0 24 24" fill="none" >
                                            <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Screen */}
                    <div className={`${showMenu ? "flex ease-in-out duration-300 " : "hidden"}  absolute -top-5 left-0  z-50 w-full backdrop-blur-sm bg-opacity-80 bg-black h-screen`}>
                        <div className="py-3 px-5 container mx-auto">
                            <div className='py-10'>
                                <button onClick={() => setShowMenu(false)} aria-label="close menu" className="focus:outline-none float-right focus:ring-2 rounded focus:ring-gray-600">
                                    <svg className="fill-stroke text-gray-100" width={40} height={40} viewBox="0 0 16 16" fill="none" >
                                        <path d="M12 4L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4 4L12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div data-aos="fade-down" className='grid justify-center justify-items-center pt-16 '>

                                <ul className=" grid gap-5 text-lg md:text-xl  ">
                                    {
                                        links.map(link => (
                                            <a href={link.url} key={link.id} onClick={() => setShowMenu(false)} className='cursor-pointer hover:text-gray-400 transform hover:translate-x-2 text-white font-semibold uppercase hover:scale-110 ease-in-out duration-300'>{link.name}</a>
                                        ))
                                    }
                                </ul>
                                <button className='bg-orange-400 mt-5 flex p-1 px-4 rounded-sm text-white' title='Log Out Your Account ??'>
                                    Log out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;