import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { MenuButton } from './MenuButton';

const Sidebar = () => {

    const [sidebarToggle, setSidebarToggle] = useState(false);

    const sidebarLinks = [
        {
            id: 0,
            name: "Home",
            path: "/",
        },
        {
            id: 1,
            name: "Product",
            path: "/categories",
        },
        {
            id: 2,
            name: "Gallery",
            path: "/gallery",
        },
        {
            id: 3,
            name: "Blogs",
            path: "/blogs",
        },
        {
            id: 4,
            name: "About",
            path: "/about",
        },
        {
            id: 5,
            name: "Contact",
            path: "/",
        },
    ];

    return (
        <>
            <div className='md:hidden w-fit z-[310] fixed top-8 right-10' onClick={() => setSidebarToggle(!sidebarToggle)}>
                <MenuButton isMenuOpen={sidebarToggle} setIsMenuOpen={setSidebarToggle} />
            </div>
            <div className={`md:hidden h-screen w-full transition-all duration-200 ease-out ${sidebarToggle ? 'max-w-[80vw]' : 'max-w-0'} bg-[#F6F4EC] fixed top-0 right-0 z-[300]`}>
                <div className='w-full pt-24 px-10'>
                    <div className='w-full flex flex-col'>
                        {
                            sidebarLinks?.map((data) => (
                                <Link onClick={() => setSidebarToggle(false)} key={data?.id} className=' py-2 text-[14px]' to={data?.path} >{data?.name}</Link>
                            ))
                        }
                        <Link></Link>
                    </div>
                </div>
            </div>
            <div className={`fixed inset-0 bg-black bg-opacity-40 z-[280] transition-all duration-200 ${sidebarToggle ? 'ease-in block' : 'hidden ease-out'}`} onClick={() => setSidebarToggle(false)}>

            </div>
        </>
    )
}

export default Sidebar