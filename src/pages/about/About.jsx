import React from 'react'
import { TbTargetArrow } from "react-icons/tb";
import { MdRemoveRedEye } from "react-icons/md";
import Services from "../home/Services";
import './About.css';

const About = () => {
    return (
        <>
            <section className='about pt-20'>
                <div className="py-12 sm:py-20 about_cont px-2.5 flex justify-center items-center flex-col">
                    <h2 className='mb-2 text-white text-2xl sm:text-4xl font-semibold text-center max-w-xl'>About Us</h2>
                    <h2 className='mb-5 text-white text-md sm:text-md font-light text-center max-w-xl'>Home / About Us</h2>
                </div>
            </section>

            {/* ----------- IMAGE & TEXT SECTION -----------  */}
            <section className="body-font">
                <div className="max-w-6xl mx-auto flex px-5 py-20 md:flex-row flex-col items-center">

                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_72080.png?v=1712918877" />
                    </div>


                    <div className="lg:flex-grow md:w-1/2 xl:pl-16 lg:pl-20 md:pl-16 flex flex-col text-left">

                        <h1 className="mb-5 font-bold max-w-md text-3xl md:text-4xl text-[#272727]">About Studywello</h1>
                        <p className="mb-6 leading-relaxed">Welcome to Studywello, your dependable resource for help with academic writing. We take great pride in being a dependable supplier of superior academic services. You will receive professional advice and help from our team of seasoned professionals with advanced degrees in a range of disciplines.</p>
                        <p className="mb-6 leading-relaxed">We at Studywello are aware of the difficulties students have while pursuing their academic goals. Because of this, we provide thorough and reasonably priced academic support that is catered to your needs. Our main objective is to provide outstanding results and support your academic progress.</p>

                    </div>
                </div>
            </section>

            {/* ----------- OUR MISSION & VISSION -----------  */}
            <section className='bg-[#1A73E8] text-white'>
                <div className="py-5 sm:py-14 max-w-6xl mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">

                    {/* LEFT BOX */}
                    <div className="left_box text-center px-4 sm:px-10 py-12 border-0 md:border-r">
                        <TbTargetArrow className='mx-auto' size={50} />
                        <h2 className='mt-3 text-4xl font-semibold '>Our Mission</h2>
                        <p className='mt-3 font-light'>
                            Our goal at Studywello is to empower students by offering them dependable, convenient, and excellent academic support. In order to help students achieve academic success and overcome obstacles in their educational journey, we work hard to earn their trust as a partner. Our goal is to provide a welcoming environment where people can work together to advance learning, excellence, and growth.
                        </p>
                    </div>

                    {/* RIGHT BOX */}
                    <div className="right_box text-center px-4 sm:px-10 py-12 border-t md:border-0">
                        <MdRemoveRedEye className='mx-auto' size={50} />
                        <h2 className='mt-3 text-4xl font-semibold'>Our Vision</h2>
                        <p className='mt-3 font-light'>
                            At Studywello, our mission is to be the premier academic help company, known for our dedication to student success and unmatched level of customer care. We picture a day when students from all backgrounds may get dependable, inexpensive academic support, enabling them to fulfil their educational aspirations. We hope to have a beneficial influence on students’ lives all around the world by assisting them in realizing their full potential and succeeding in their academic endeavors.
                        </p>
                    </div>

                </div>
            </section>


            {/* ----------- OUR SERVICES -----------  */}
            {/* <section className='bg-white'>
                <div className="max-w-6xl mx-auto pt-8 pb-20">
                    <h3 className="mb-1 font-medium text-md text-[#1A73E8] text-center">Services</h3>
                    <h2 className="mb-3 font-bold text-3xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">Our Top Services</h2>


                    <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-8 sm:px-10 px-4">

                        <div className="service_card group box_shadow px-6 py-8 rounded-2xl bg-white hover:bg-[#1A73E8]">

                            <div className="mb-3 logo w-16 h-16 p-1.5 rounded-xl bg-[#E8F1FD]">
                                <img src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/question_1.png?v=1713360866" alt="" />
                            </div>

                            <h3 className="mb-2 font-medium text-xl text-[#1A73E8] group-hover:text-white">Online Class Help</h3>
                            <p className="mb-3 sm:mb-4 text-sm leading-6 font-normal text-black group-hover:text-white">Our online class help service is designed to provide you with the support you need to succeed in your coursework. Whether you're struggling to keep up with your online classes, or simply need some extra help to....</p>

                            <button className='flex items-center gap-2 text-md font-medium text-[#1A73E8] group-hover:text-white'>READ MORE <FaArrowRightLong size={14} /></button>
                        </div>

                        <div className="service_card group box_shadow px-6 py-8 rounded-2xl bg-white hover:bg-[#1A73E8]">

                            <div className="mb-3 logo w-16 h-16 p-1.5 rounded-xl bg-[#E8F1FD]">
                                <img src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/question_1.png?v=1713360866" alt="" />
                            </div>

                            <h3 className="mb-2 font-medium text-xl text-[#1A73E8] group-hover:text-white">Online Class Help</h3>
                            <p className="mb-3 sm:mb-4 text-sm leading-6 font-normal text-black group-hover:text-white">Our online class help service is designed to provide you with the support you need to succeed in your coursework. Whether you're struggling to keep up with your online classes, or simply need some extra help to....</p>

                            <button className='flex items-center gap-2 text-md font-medium text-[#1A73E8] group-hover:text-white'>READ MORE <FaArrowRightLong size={14} /></button>
                        </div>

                        <div className="service_card group box_shadow px-6 py-8 rounded-2xl bg-white hover:bg-[#1A73E8]">

                            <div className="mb-3 logo w-16 h-16 p-1.5 rounded-xl bg-[#E8F1FD]">
                                <img src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/question_1.png?v=1713360866" alt="" />
                            </div>

                            <h3 className="mb-2 font-medium text-xl text-[#1A73E8] group-hover:text-white">Online Class Help</h3>
                            <p className="mb-3 sm:mb-4 text-sm leading-6 font-normal text-black group-hover:text-white">Our online class help service is designed to provide you with the support you need to succeed in your coursework. Whether you're struggling to keep up with your online classes, or simply need some extra help to....</p>

                            <button className='flex items-center gap-2 text-md font-medium text-[#1A73E8] group-hover:text-white'>READ MORE <FaArrowRightLong size={14} /></button>
                        </div>

                    </div>
                </div>
            </section> */}

            {/* --------------- SERVICES ---------------  */}
            <Services />
        </>
    )
}

export default About