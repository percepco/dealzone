"use client";

import { categories } from '@/app/data';
import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import { IoMdSearch } from "react-icons/io";

function AuctionSearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleSearchClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setIsDropdownOpen(true); // Open dropdown as the user types
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const filteredCategories = categories.filter(category =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex items-center space-x-0 relative" ref={dropdownRef}>
            <div className="relative">
                <input
                    type="search"
                    name="auctions"
                    placeholder="Search Auctions..."
                    className="placeholder:text-gray-900 rounded-l-md border-2 border-gray-200 outline-none px-4 p-1"
                    id="auctions"
                    value={searchTerm}
                    onChange={handleInputChange}
                />
            </div>
            <div
                onClick={handleSearchClick}
                className="bg-gray-800 p-1 rounded-r-md text-white cursor-pointer"
            >
                <div className="flex items-center space-x-1">
                    <div>
                        <IoMdSearch />
                    </div>
                    <div>
                        Search Auctions
                    </div>
                </div>
            </div>

            {isDropdownOpen && filteredCategories.length > 0 && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    {filteredCategories.map((item) => (
                        <Link href={`/search?cat=` + item.tag} key={item.id}>
                            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                {item.name}
                            </div>
                        </Link>
                    ))}
                </div>
            )}
            {isDropdownOpen && filteredCategories.length === 0 && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10 px-4 py-2 text-gray-500">
                    No results found
                </div>
            )}
        </div>
    );
}

export default AuctionSearch;
