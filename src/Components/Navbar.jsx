import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Logo from '../assets/logo.svg';

const Navbar = () => {
    const [selectedLink, setSelectedLink] = useState('');
    const [showDropDown, setShowDropDown] = useState(null);

    const handleDropDownClick = (item) => {
        setShowDropDown(showDropDown === item.title ? null : item.title);
    };

    return (
        <div>
            {links.map((item) => (
                <div key={item.title} className="relative">
                    <div
                        className="thomas-bg max-w-[200px] mx-auto flex justify-between items-center w-full gap-2 rounded-2xl py-2 px-3 cursor-pointer mt-72 text-[#445C6D]"
                        onClick={() => handleDropDownClick(item)}
                    >
                        <div>
                            <img src={Logo} alt="thomas" width={40} height={0} />
                        </div>
                        <div>
                            <h6 className="text-[16px] leading-3 pt-2 pb-1">Thomas M.</h6>
                            <span className="text-sm">@ thomas</span>
                        </div>
                        <span className="text-4xl">
                            <IoMdArrowDropdown className={`${showDropDown === item.title ? 'rotate' : ''}`} />
                        </span>
                    </div>
                    {showDropDown === item.title && (
                        <div
                            className="opacity-100 absolute top-[-100px] left-1/2 transform  mt-2 w-64 bg-white rounded-lg shadow-xl transition-all duration-1000"
                            style={{
                                position: 'absolute',
                                top: '100%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                            }}
                        >
                            <ul className="py-2">
                                {item.links.map((link) => (
                                    <li
                                        key={link}
                                        className={`flex justify-between px-4 py-2 hover:bg-gray-100 ${selectedLink === link ? 'text-gray-700' : ''
                                            }`}
                                        onClick={() => setSelectedLink(link)}
                                    >
                                        <a href="#">{link}</a>
                                        <span>
                                            <AiOutlineArrowRight />
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

const links = [
    {
        title: 'Our Solutions',
        links: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
    },
];

export default Navbar;
