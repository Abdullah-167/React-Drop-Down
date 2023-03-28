import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Logo from '../assets/logo.svg';

const Navbar = () => {
    const [selectedLink, setSelectedLink] = useState('');
    const [showDropDown, setShowDropDown] = useState(null);

    const handleDropDownClick = () => {
        setShowDropDown(!showDropDown);
    };

    return (
        <div>
            <div className="relative">
                <div
                    className={`thomas-bg max-w-[200px] mx-auto flex justify-between items-center w-full gap-2 py-2 px-3 cursor-pointer mt-72 text-[#445C6D] ${showDropDown ? 'rounded-b-2xl' : 'rounded-2xl'}`}
                    onClick={() => handleDropDownClick()}
                >
                    <div>
                        <img src={Logo} alt="thomas" width={40} height={0} />
                    </div>
                    <div>
                        <h6 className="text-[16px] leading-3 pt-2 pb-1">Thomas M.</h6>
                        <span className="text-sm">@ thomas</span>
                    </div>
                    <span className="text-4xl">
                        <IoMdArrowDropdown className={`${showDropDown ? 'rotate' : 'rotate2'}`} />
                    </span>
                </div>
                {showDropDown && (
                    <div
                        className="thomas-bg  absolute top-[-144px] left-1/2 transform -translate-x-1/2 mt-2 w-[200px] rounded-t-xl  transition-all duration-1000"

                    >
                        <ul className="py-2">
                            <li
                                className={`px-4 py-2 hover:bg-gray-100 ${showDropDown ? 'text-gray-700' : ''
                                    }`}

                            >
                                <a className='block' href="#">Profile</a>
                            </li>
                            <li
                                className={`px-4 py-2 hover:bg-gray-100 ${showDropDown ? 'text-gray-700' : ''
                                    }`}
                            >
                                <a className='block' href="#">Log In</a>
                            </li> <li
                                className={`px-4 py-2 hover:bg-gray-100 ${showDropDown ? 'text-gray-700' : ''
                                    }`}
                            >
                                <a className='block' href="#">Sign Up</a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
