"use client";
import { HelpContent, helpsidebar } from '@/app/data'
import Player from '@/utils/Player';
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';
import {usePathname} from 'next/navigation'

const MainSection = () => {
    const [isMounted, setIsMounted] = useState(false)
    const currentpath = usePathname()
    useEffect(() => {
        setIsMounted(true)
    }, [])
    if (!isMounted) {
        return <div className="flex items-center justify-center border border-gray-200 rounded-lg bg-gray-50 ">
            <div role="status">
                <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                <span className="sr-only">Loading...</span>
            </div>
        </div>

    }
    return (
        <React.Fragment>

            <div className='flex flex-col space-y-4 w-full'>
                {HelpContent.sort((a, b) => a.position - b.position).map((item) => (
                    <div key={item.id}>
                        {item.content.text && (
                            <h2 className='text-lg sm:text-2xl  md:text-3xl  font-semibold'>
                                {item.content.text}
                            </h2>
                        )}
                        <ul className='flex flex-col space-y-1 -mt-1'>
                            {item.content.list &&
                                item.content.list.map((item, index) => {
                                    return (
                                        <li className='text-gray-800  list-decimal  mx-10' key={index}>
                                            {item}
                                        </li>
                                    )
                                })}
                        </ul>
                        <div className='my-2'>
                            {item.content.video && (
                                <Player url={item.content.video.videoUrl} />
                            )}
                        </div>
                        <div className='my-4'>
                            {item.content.button && (
                                <Link style={{ padding: "20px 40px 20px 40px" }} href={item.content.button.link} className={item.content.button.styles}>
                                    {item.content.button.text}
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex flex-col space-y-4 my-10'>
                {helpsidebar.map((item) => {
                    return <div className='' key={item.id}>
                        <div className='mb-4 text-lg sm:text-xl md:text-2xl font-semibold'>
                            {item.name}
                        </div>
                        <div className='border border-gray rounded-md '>
                            {item.navigationTab.map((item) => {
                                return <Link className={`flex justify-between p-2 text-blue-600 items-center  border  border-gray-200 hover:underline  ${item.link===currentpath?"text-blue-900 font-bold text-2xl":"font-light text-lg "}`} href={item.link} key={item.id}>
                                    {item.name}
                                    <MdKeyboardArrowRight className='text-lg' />
                                </Link>
                            })}
                        </div>
                    </div>
                })}
            </div>
        </React.Fragment>
    )

}

export default MainSection