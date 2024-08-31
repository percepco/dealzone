"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { IoMdLock } from "react-icons/io";
import Link from 'next/link';
import { navigationTab } from '@/app/data';

const Navbar = () => {
    const [isLoginPopup, setLoginPopup] = useState<boolean>(false)
    const handleLoginPopup = () => {
        setLoginPopup(!isLoginPopup)
    }
  

    return (
        <section id="primary-menu">
            <div className='  flex justify-between p-2 items-center'>
                <Image src={"/logo.webp"} alt='logo' width={200} height={200} />
                <Image src={"/seal.png"} alt='trust' width={80} height={80} />
            </div>
            <div className="flex justify-end -mt-2">
                <button className=' cursor-pointer px-6 flex space-x-2 items-center bg-gray-100 p-1  border-2 border-gray-200 rounded-sm mx-10 '>
                    <IoMdLock className='text-sm' />
                    <p className='  text-lg'>
                        Log in
                    </p>
                </button>
            </div>
            <section className=' flex  justify-between   my-4 border-[1px] border-black'>
                {navigationTab.map((item) => {
                    return <Link href={item.link} key={item.id} className={` border-r-2 border-gray-300 bg-gray-100  flex justify-center w-full  hover:bg-white  p-2 ${item.id===4&&"border-none"}`}>
                        {item.name}
                    </Link>
                })}
            </section>
        </section>
    )
}

export default Navbar