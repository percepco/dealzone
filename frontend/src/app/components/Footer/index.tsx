import { FooterNavigation } from '@/app/data'
import Link from 'next/link'
import React from 'react'
import { TiTick } from "react-icons/ti";
import { RiArrowRightSFill } from "react-icons/ri";
const index = () => {
    return (
        <React.Fragment>
            <div className='flex p-12 bg-gray-100 justify-between  '>
                {FooterNavigation.map((item) => {
                    return <div key={item.id}>
                        <div className='font-bold text-2xl'>
                            {item.title}
                        </div>
                        <div className='flex flex-col my-4 space-y-2'>
                            {item.navigation.map((item) => {
                                return <Link key={item.id} href={item.link}>
                                    {item.name}
                                </Link>
                            })}
                        </div>
                    </div>
                })}
                <div className='flex flex-col space-y-4'>
                    <div className="flex space-x-1 items-center">
                        <div>
                            <TiTick className='text-green-500' />
                        </div>
                        <div>
                            Free Shipping on ALL items!
                        </div>
                    </div>
                    <div className="flex space-x-1 items-center">
                        <div>
                            <TiTick className='text-green-500' />
                        </div>
                        <div>
                            Amazing deals 24/7!
                        </div>
                    </div>
                    <Link href={"/join"} className='bg-blue-700 text-white p-2 px-4 font-semibold rounded-md'>
                        <div className="flex items-center space-x-0">
                            <div className='text-2xl'>
                                Sign Up Free
                            </div>
                            <div>
                                <RiArrowRightSFill className='text-white text-4xl ' />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default index