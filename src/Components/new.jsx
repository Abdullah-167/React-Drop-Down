import React, { useState } from 'react';
import Logo from '../assets/logo.svg';
import { IoIosArrowDown } from 'react-icons/io';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Navbar = () => {
     const [selectedLink, setSelectedLink] = useState(null);

  const handleMouseEnter = (link) => {
    setSelectedLink(link);
  };

  const handleMouseLeave = () => {
    setSelectedLink(null);
  };

  const handleInnerLinkMouseEnter = (link) => {
    setSelectedLink('Flatroof');
  };

  const handleInnerLinkMouseLeave = () => {
    setSelectedLink(null);
  };
    return (
        <nav className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex gap-20 items-center">
                    <div>
                        <img className="h-28 w-full" src={Logo} alt="Logo" />
                    </div>
                    <div className="hidden md:block">
                        <div className="flex gap-10">
                            {links.map((link, index) => (
                                <div
                                    key={index}
                                    className="relative"
                                    onMouseEnter={() => handleMouseEnter(link.title)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <button className="flex items-center gap-1 hover:text-gray-700">
                                        {link.title}
                                        <IoIosArrowDown
                                            className={selectedLink === link.title ? 'rotate' : ''}
                                        />
                                    </button>
                                    {selectedLink === link.title && (
                                        <div
                                            className="opacity-100 absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-lg shadow-xl transition-all duration-300"
                                            onMouseEnter={() => handleMouseEnter(link.title)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <ul className="py-2">
                                                {link.dropLinks.map((dropLink, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex justify-between px-4 py-2 hover:bg-gray-100"
                                                    >
                                                        <a href="#">{dropLink.link}</a>
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


                            {links2.map((link, index) => (
                                <div
                                    key={index}
                                    className="relative"
                                    onMouseEnter={() => handleMouseEnter(link.title)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <button className="flex items-center gap-1 hover:text-gray-700">
                                        {link.title}
                                        <IoIosArrowDown
                                            className={
                                                selectedLink === link.title ? 'rotate' : ''
                                            }
                                        />
                                    </button>
                                    {selectedLink === link.title && (
                                        <div
                                            className="opacity-100 absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-lg shadow-xl transition-all duration-300"
                                            onMouseEnter={() => handleMouseEnter(link.title)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <ul className="py-2">
                                                {link.dropLinks.map((dropLink, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex justify-between px-4 py-2 hover:bg-gray-100"
                                                    >
                                                        <a href="#">{dropLink.link}</a>
                                                        <span><AiOutlineArrowRight /></span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}

                            {links3.map((link, index) => (
                                <div
                                    key={index}
                                    className="relative"
                                    onMouseEnter={() => handleMouseEnter(link.title)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <button className="flex items-center gap-1 hover:text-gray-700">
                                        {link.title}
                                        <IoIosArrowDown
                                            className={
                                                selectedLink === link.title ? 'rotate' : ''
                                            }
                                        />
                                    </button>
                                    {selectedLink === link.title && (
                                        <div
                                            className="opacity-100 absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-lg shadow-xl transition-all duration-300"
                                            onMouseEnter={() => handleMouseEnter(link.title)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <ul className="py-2">
                                                {link.dropLinks.map((dropLink, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex justify-between px-4 py-2 hover:bg-gray-100"
                                                    >
                                                        <a href="#">{dropLink.link}</a>
                                                        <span><AiOutlineArrowRight /></span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}

                            {links4.map((link, index) => (
                                <div
                                    key={index}
                                    className="relative"
                                    onMouseEnter={() => handleMouseEnter(link.title)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <button className="flex items-center gap-1 hover:text-gray-700">
                                        {link.title}
                                        <IoIosArrowDown
                                            className={
                                                selectedLink === link.title ? 'rotate' : ''
                                            }
                                        />
                                    </button>
                                    {selectedLink === link.title && (
                                        <div
                                            className="opacity-100 absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-lg shadow-xl transition-all duration-300"
                                            onMouseEnter={() => handleMouseEnter(link.title)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <ul className="py-2">
                                                {link.dropLinks.map((dropLink, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex justify-between px-4 py-2 hover:bg-gray-100"
                                                    >
                                                        <a href="#">{dropLink.link}</a>
                                                        <span><AiOutlineArrowRight /></span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}

                            {links5.map((link, index) => (
                                <div
                                    key={index}
                                    className="relative"
                                    onMouseEnter={() => handleMouseEnter(link.title)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <button className="flex items-center gap-1 hover:text-gray-700">
                                        {link.title}
                                        <IoIosArrowDown
                                            className={
                                                selectedLink === link.title ? 'rotate' : ''
                                            }
                                        />
                                    </button>
                                    {selectedLink === link.title && (
                                        <div
                                            className="opacity-100 absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-lg shadow-xl transition-all duration-300"
                                            onMouseEnter={() => handleMouseEnter(link.title)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <ul className="py-2">
                                                {link.dropLinks.map((dropLink, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex justify-between px-4 py-2 hover:bg-gray-100"
                                                    >
                                                        <a href="#">{dropLink.link}</a>
                                                        <span><AiOutlineArrowRight /></span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}

                            {links6.map((link, index) => (
                                <div
                                    key={index}
                                    className="relative"
                                    onMouseEnter={() => handleMouseEnter(link.title)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <button className="flex items-center gap-1 hover:text-gray-700">
                                        {link.title}
                                        <IoIosArrowDown
                                            className={
                                                selectedLink === link.title ? 'rotate' : ''
                                            }
                                        />
                                    </button>
                                    {selectedLink === link.title && (
                                        <div
                                            className="opacity-100 absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-lg shadow-xl transition-all duration-300"
                                            onMouseEnter={() => handleMouseEnter(link.title)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <ul className="py-2">
                                                {link.dropLinks.map((dropLink, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex justify-between px-4 py-2 hover:bg-gray-100"
                                                    >
                                                        <a href="#">{dropLink.link}</a>
                                                        <span><AiOutlineArrowRight /></span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

const links = [
    {
        title: 'Our Solutions',
        dropLinks: [
            {
                link: 'Our Solution'
            },
            {
                link: 'Flatroof',
                innerLink: [
                    'Roofing',
                    'Flat Refurbishment',
                    'Commercial/Industrial',
                    'Carport',
                    'Sustainable Roofing',
                    'Flat Roof Drainage',
                    'Fall Protection Flat Roof',
                ],
            },
            {
                link: 'Facade Waterproofing',
            },
            {
                link: 'Structural Waterproofing',
            },
        ],
    },
];


const links2 = [
    {
        title: 'Products And Brand',
        dropLinks: [
            {
                link: 'Our Solution'
            },
            {
                link: 'Flatroof',
                innerLink: [
                    'Roofing',
                    'Flat Refurbishment',
                    'Commercial/Industrial',
                    'Carport',
                    'Sustainable Roofing',
                    'Flat Roof Drainage',
                    'Fall Protection Flat Roof',
                ],
            },
            {
                link: 'Facade Waterproofing',
            },
            {
                link: 'Structural Waterproofing',
            },
        ],
    },
];


const links3 = [
    {
        title: 'Case Studies',
        dropLinks: [
            {
                link: 'Our Solution'
            },
            {
                link: 'Flatroof',
                innerLink: [
                    'Roofing',
                    'Flat Refurbishment',
                    'Commercial/Industrial',
                    'Carport',
                    'Sustainable Roofing',
                    'Flat Roof Drainage',
                    'Fall Protection Flat Roof',
                ],
            },
            {
                link: 'Facade Waterproofing',
            },
            {
                link: 'Structural Waterproofing',
            },
        ],
    },
];


const links4 = [
    {
        title: 'Service Portal',
        dropLinks: [
            {
                link: 'Our Solution'
            },
            {
                link: 'Flatroof',
                innerLink: [
                    'Roofing',
                    'Flat Refurbishment',
                    'Commercial/Industrial',
                    'Carport',
                    'Sustainable Roofing',
                    'Flat Roof Drainage',
                    'Fall Protection Flat Roof',
                ],
            },
            {
                link: 'Facade Waterproofing',
            },
            {
                link: 'Structural Waterproofing',
            },
        ],
    },
];



const links5 = [
    {
        title: 'Acedamy',
        dropLinks: [
            {
                link: 'Our Solution'
            },
            {
                link: 'Flatroof',
                innerLink: [
                    'Roofing',
                    'Flat Refurbishment',
                    'Commercial/Industrial',
                    'Carport',
                    'Sustainable Roofing',
                    'Flat Roof Drainage',
                    'Fall Protection Flat Roof',
                ],
            },
            {
                link: 'Facade Waterproofing',
            },
            {
                link: 'Structural Waterproofing',
            },
        ],
    },
];



const links6 = [
    {
        title: 'About Us',
        dropLinks: [
            {
                link: 'Our Solution'
            },
            {
                link: 'Flatroof',
                innerLink: [
                    'Roofing',
                    'Flat Refurbishment',
                    'Commercial/Industrial',
                    'Carport',
                    'Sustainable Roofing',
                    'Flat Roof Drainage',
                    'Fall Protection Flat Roof',
                ],
            },
            {
                link: 'Facade Waterproofing',
            },
            {
                link: 'Structural Waterproofing',
            },
        ],
    },
];

