import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import './components.css'

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropDownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


    const toggleDropdown = () => {
        setIsDropDownOpen(!isDropDownOpen);
    };

    // TOGGLE MENU
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // CLOSE MENU WHEN LINK IS CLICKED
    const handleLinkClick = () => {
        setIsOpen(false);
        window.scroll(0, 0);
    };

    const handleToTop = () => {
        window.scroll(0, 0)
    }

    return (
        <>
            <nav className={`bg-white dark:bg-gray-700 py-4 transition-all fixed top-0 left-0 right-0 z-60`}>
                <div className="container px-6 mx-auto">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <div className="flex items-center justify-between">
                            {/* -------------- BRAND LOGO -------------- */}
                            <Link onClick={handleLinkClick} to="/" className='flex items-center gap-2'>
                                {/* <img className="w-auto h-6 sm:h-7" src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/profile-pic_6.png?v=1710185888" alt="" /> */}
                                <h2 className='text-gray-800 dark:text-gray-200 text-2xl font-semibold tracking-wide'>Study Wello</h2>
                            </Link>

                            {/* -------------- HAMBURGER BUTTON FOR MOBILE VIEW -------------- */}
                            <div className="flex lg:hidden">
                                <button onClick={toggleMenu} type="button" className="text-gray-500  hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                                    {isOpen ?
                                        (
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path></svg>
                                        )}
                                </button>
                            </div>
                        </div>

                        {/* -------------- MENU FOR LARGE VIEW -------------- */}
                        <div className="hidden lg:flex lg:items-center" ref={dropdownRef}>

                            <div className="dropdown relative">
                                <button onClick={toggleDropdown} className="poppin px-0 pt-2 pb-0.5 mx-6 text-md font-medium tracking-wide text-gray-700 rounded-xl">
                                    <span className='flex items-center gap-1'>
                                        Services
                                        {isDropDownOpen ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-up"><path d="m18 15-6-6-6 6" /></svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                                        )}
                                    </span>
                                </button>

                                {isDropDownOpen && (
                                    <div className="absolute right-0 z-20 w-40 py-2 mt-7 overflow-hidden origin-top-right bg-white rounded-xl shadow-xl">
                                        <Link to='/online-classes' onClick={toggleDropdown} className="block px-4 py-3  w-full text-left text-sm text-gray-800 font-medium capitalize transition-colors duration-300 transform hover:bg-gray-100 ">
                                            Online Classes
                                        </Link>

                                        <hr className="border-gray-200" />

                                        <Link to="/exams" onClick={toggleDropdown} className="block px-4 py-3 w-full text-left text-sm text-gray-800 font-medium capitalize transition-colors duration-300 transform hover:bg-gray-100 ">
                                            Exams
                                        </Link>

                                        <hr className="border-gray-200" />

                                        <Link to="/assignments" onClick={toggleDropdown} className="block px-4 py-3 w-full text-left text-sm text-gray-800 font-medium capitalize transition-colors duration-300 transform hover:bg-gray-100 ">
                                            Assignments
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <Link to="/samples" onClick={handleToTop} className="button_navbar poppin px-0 pt-2 pb-0.5 mx-4 xl:mx-6 text-md font-medium tracking-wide text-gray-700 dark:text-gray-200 rounded-xl">Sample</Link>
                            <Link to="/about" onClick={handleToTop} className="button_navbar poppin px-0 pt-2 pb-0.5 mx-4 xl:mx-6 text-md font-medium tracking-wide text-gray-700 dark:text-gray-200 rounded-xl">About Us</Link>
                            <Link to="/contact" onClick={handleToTop} className="button_navbar poppin px-0 pt-2 pb-0.5 mx-4 xl:mx-6 text-md font-medium tracking-wide text-gray-700 dark:text-gray-200 rounded-xl">Contact Us</Link>
                            <a href="tel:+1-716-374-9747" className="poppin px-0 pt-2 pb-0.5 mx-4 xl:mx-6 text-md flex items-center gap-2 font-medium text-gray-700 dark:text-gray-200 cursor-pointer">
                                <FaPhoneAlt className="text-blue-600 " /> <span>+1 (716) 374-9747</span>
                            </a>
                        </div>
                    </div>

                    {/* -------------- MENU FOR MOBILE VIEW -------------- */}
                    <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} absolute inset-x-0 w-full mt-2 px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}>
                        <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                            <Link to="/services" onClick={handleLinkClick} className="poppin px-0 py-3 mx-4 xl:mx-6 text-md font-medium tracking-wide text-gray-700 dark:text-gray-200 rounded-xl">Services</Link>
                            <Link to="/samples" onClick={handleLinkClick} className="poppin px-0 py-3 mx-4 xl:mx-6 text-md font-medium tracking-wide text-gray-700 dark:text-gray-200 rounded-xl">Samples</Link>
                            <Link to="/about" onClick={handleLinkClick} className="poppin px-0 py-3 mx-4 xl:mx-6 text-md font-medium tracking-wide text-gray-700 dark:text-gray-200 rounded-xl">About Us</Link>
                            <Link to="/contact" onClick={handleLinkClick} className="poppin px-0 py-3 mx-4 xl:mx-6 text-md font-medium tracking-wide text-gray-700 dark:text-gray-200 rounded-xl">Contact Us</Link>
                            <a href="tel:+1-716-374-9747" className="poppin px-0 pt-2 pb-0.5 mx-4 xl:mx-6 text-md flex items-center gap-2 font-medium text-gray-700 dark:text-gray-200 cursor-pointer">
                                <FaPhoneAlt className="text-blue-600 dark:text-gray-200" /> <span>+1 (716) 374-9747</span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Navbar;