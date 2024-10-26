import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Dummy = () => {

    // HANDLESCROLL
    const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: "instant" })
    }

    return (
        <>
            <footer className="bg-[#1A73E8]">
                <div className="upperFooter bg-[#ECECFB]">

                    <div className="px-5 sm:px-10 pt-10 pb-14 mx-auto">
                        {/* DETAILS */}
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-y-10 lg:grid-cols-6">

                            {/* LOGO & TEXT */}
                            <div className="sm:col-span-2">
                                <h1 onClick={handleScroll} className="max-w-lg text-3xl cursor-pointer font-semibold tracking-wider text-gray-900">Study Wello</h1>
                                <p className='mt-5 text-sm w-[100%] sm:w-[70%] text-gray-900'>
                                    Study Wello is providing help to students as academic consultants, to resolve their queries, helping them by providing sufficient help in assignments and exams. There are a vast variety of subjects offered by Study Wello through experts.
                                </p>
                            </div>

                            {/* CONTACT */}
                            <div className='mt-4 sm:mt-2 sm:col-span-2'>
                                <p className="font-semibold text-2xl text-gray-900 tracking-normal">
                                    Contact
                                </p>
                                <div className="flex flex-col items-start mt-3 space-y-2">
                                    <a href="tel:+1-716-374-9747" className="text-gray-900 transition-colors duration-300 cursor-pointer hover:underline hover:text-blue-500">
                                        Phone: +1 (716) 374-9747
                                    </a>
                                    <a className="text-gray-900 transition-colors duration-300 cursor-pointer hover:underline hover:text-blue-500">
                                        Mail: support@Studywello.com
                                    </a>
                                    <a className="text-gray-900 transition-colors duration-300 cursor-pointer hover:underline hover:text-blue-500">
                                        Location: 405 Elaine Valley Dr Katy TX 77493
                                    </a>
                                    <a className="text-gray-900 transition-colors duration-300 cursor-pointer hover:underline hover:text-blue-500">
                                        Whatsapp: +1 (716) 374-9747
                                    </a>
                                </div>
                            </div>

                            {/* OUR SERVICES */}
                            <div className='mt-4 sm:mt-2'>
                                <p className="font-semibold text-2xl text-gray-900 tracking-normal">
                                    Our Services
                                </p>
                                <div className="flex flex-col items-start mt-3 space-y-2">
                                    <Link to="/online-classes" onClick={handleScroll} className="text-gray-900 transition-colors duration-300 cursor-pointer hover:underline hover:text-blue-500">
                                        Online Class
                                    </Link>
                                    <Link to="/exams" onClick={handleScroll} className="text-gray-900 transition-colors duration-300 cursor-pointer hover:underline hover:text-blue-500">
                                        Exams
                                    </Link>
                                    <Link to="/assignments" onClick={handleScroll} className="text-gray-900 transition-colors duration-300 cursor-pointer hover:underline hover:text-blue-500">
                                        Assignment
                                    </Link>
                                    <Link to="/contact" onClick={handleScroll} className="text-gray-900 transition-colors duration-300 cursor-pointer hover:underline hover:text-blue-500">
                                        Contact Us
                                    </Link>
                                    <Link to="/privacy-policy" onClick={handleScroll} className="text-gray-900 transition-colors duration-300 cursor-pointer hover:underline hover:text-blue-500">
                                        Privacy Policy
                                    </Link>
                                </div>
                            </div>

                            {/* SOCIAL LINKS */}
                            <div className='mt-4 sm:mt-4'>
                                <div className="flex flex-wrap flex-row lg:flex-col gap-2 sm:gap-5 mx-auto mt-6">
                                    <a href='#'>
                                        <FaLinkedin size={24} className='mr-5 cursor-pointer text-[#0073AF]' />
                                    </a>
                                    <a href='#'>
                                        <BsInstagram size={24} className='mr-5 cursor-pointer text-[#E83274]' />
                                    </a>
                                    <a href='#'>
                                        <FaFacebookF size={24} className='mr-5 cursor-pointer text-[#1C9CEA]' />
                                    </a>
                                    <a href='#'>
                                        <IoLogoYoutube size={24} className='mr-5 cursor-pointer text-[#FF0000]' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-sm py-5 border-t text-center text-white">
                    <p>Copyrights © 2024 All Rights Reserved by Study Wello</p>
                </div>
            </footer>
        </>
    )
}

export default Dummy;