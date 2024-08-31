import { auctions } from '@/app/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const index = () => {
    return (
        <React.Fragment>
            <div className='grid grid-cols-6 gap-10 gap-x-4 mb-10'>
                {auctions.map((item) => {
                    return <Link href={"/auctions/"+item.id} key={item.id} className='  border-[1px] border-black'>
                        <p className='text-xs p-1'>
                            {item.name}
                        </p>
                        <Image src={item.featured_img} width={300} height={300} alt={item.name} />
                        <div className='bg-gray-200 py-2  flex flex-col items-center'>
                            <div className='text-2xl text-green-800 font-bold'>
                                ${item.final_price.toFixed(2)}
                            </div>
                            <div className='font-semibold -mt-2 text-gray-800'>
                                {item.last_bidder}
                            </div>
                            <div className='text-red-800   text-2xl my-1 font-bold'>
                                00: 00: {item.timer}
                            </div>
                            <button className=' bg-yellow-400 border-y-[1px] border-black p-1  w-full font-semibold text-2xl text-center'>
                                Bid  Now
                            </button>
                            <Link href={"/join"} className='text-xs  mt-2' >
                                Buy it now for ${item.original_price}
                            </Link>
                        </div>
                    </Link>
                })}
            </div>
            <nav className='flex my-10 justify-center'>
                <ul className="flex items-center -space-x-px h-8 text-sm">
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ">
                            <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span className="mx-1">Previous</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 dark:hover:text-white">1</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page" className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border bg-white border-gray-300 ">3</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page" className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border bg-white border-gray-300 ">4</a>
                    </li>
                  
                    <li>
                        <a href="#" aria-current="page" className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-yellow-600 border bg-white border-gray-300  hover:text-yellow-700 ">5</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">...</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">100</a>
                    </li>
                    <li >

                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">
                            <span className=" mx-2">Next</span>
                            <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default index