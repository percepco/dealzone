import React from 'react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { categories } from '@/app/data';
import Link from 'next/link';
import Search from "@/app/components/Header/Search"

const Filter = () => {

    return (
        <React.Fragment>
            <section className=' bg-gray-100 flex justify-between p-2 my-2 rounded-md' id="filter">
                <DropdownMenu>
                    <DropdownMenuTrigger className='cursor-pointer'>
                        <button className='flex  items-center space-x-1'>
                            <p className='text-sm  font-medium text-gray-700'>
                                Browse Categories
                            </p>
                            <MdOutlineKeyboardArrowDown className='text-sm font-medium text-gray-500' />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className=' w-[200px]'>
                        <Link href={`/search?cat=` + categories[0].tag}>
                            <DropdownMenuLabel className=' font-normal'>
                                {categories[0].name}
                            </DropdownMenuLabel>
                        </Link>
                        <DropdownMenuSeparator />
                        {categories.slice(1,).map((item) => {
                            return <Link href={`/search?cat=` + item.tag} key={item.id}>
                                <DropdownMenuItem className=" cursor-pointer" >
                                    {item.name}
                                </DropdownMenuItem>
                            </Link>
                        })}

                    </DropdownMenuContent>
                </DropdownMenu>
                <Search />
            </section>
        </React.Fragment>
    )
}

export default Filter