import React, { useState } from 'react'
import toast from 'react-hot-toast';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { IoArrowForward } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoChatbubbleSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";


const EmailForm = () => {
    const [loading, setLoading] = useState(false);

    const [formdata, setFormdata] = useState({
        name: "",
        phone: "",
    });


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formdata.name) {
            toast.error('Please enter your name');
            return;
        }
        if (!formdata.phone) {
            toast.error('Please enter your phone number');
            return;
        }

        setLoading(true)
        try {
            await emailjs.send(
                'service_oj7o6s8',
                'template_rono4pa',
                {
                    name: formdata.name,
                    phone: formdata.phone,
                },
                {
                    publicKey: 'AMubOSywU-D9bjMSb',
                },
            );

            reset();
            setLoading(false)
            toast.success("Query sent! We'll reach out shortly.");
            console.log('SUCCESS!');

        } catch (err) {
            if (err instanceof EmailJSResponseStatus) {
                console.log('EMAILJS FAILED...', err);
                return;
            }
            setLoading(false)
            console.log('ERROR', err);
        }
    };

    const reset = () => {
        setFormdata({
            name: "",
            phone: "",
        });
    }

    return (
        <>
            <div className="w-full px-3 sm:px-6 py-6 sm:py-10 text-center bg-[#F2EFFF] text-black rounded-xl shadow-xl">
                <h2 className="mb-4 text-black text-2xl font-semibold">Hire someone to take your online class?<span className="text-[#1A73E8]"> Chat Now</span></h2>

                <p className="mb-4 text-sm sm:text-md max-w-sm mx-auto">Get Top Grades Without the Stress - Hire an Expert for Your Online Classes!</p>

                <p className="mb-4 font-medium text-sm sm:text-md">24/7 Support, and Trusted Class Help.</p>


                {/* FIELDS */}
                <div className="mb-4 fields grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-2">
                    <div class="mb-2">
                        <input
                            id="name"
                            type="name"
                            onChange={(e) => setFormdata({ ...formdata, name: e.target.value })}
                            value={formdata.name}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Full Name*" required />
                    </div>
                    <div class="mb-2">
                        <input
                            id="phone"
                            type="number"
                            value={formdata.phone}
                            onChange={(e) => setFormdata({ ...formdata, phone: e.target.value })}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Phone Number*" required />
                    </div>
                </div>

                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className={`${loading ? "cursor-not-allowed" : ""} flex justify-center gap-x-1 items-center bg-[#1A73E8] text-white font-medium rounded-md w-full text-sm px-5 py-2.5`}
                >
                    {loading ? (<>Submitting...</>) : (<>Text Me <IoArrowForward /></>)}
                </button>

                <span className="my-4 relative flex justify-center">
                    <div
                        className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                    ></div>

                    <span className="relative z-10 bg-white p-2 text-sm shadow-sm rounded-full">OR</span>
                </span>

                <div className="buttons flex justify-center items-center flex-wrap gap-2">
                    <a
                        href="https://api.whatsapp.com/send?phone=17163749747"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex text-nowrap w-32 justify-center shadow-sm border border-gray-300 gap-x-1 items-center bg-white text-black font-medium rounded-md text-sm px-5 py-2.5"><IoLogoWhatsapp className='text-green-500' size={22} /> Whatsapp</a>

                    <button
                        onClick={() => {
                            Tawk_API.toggle();
                        }}
                        className="flex text-nowrap w-32 justify-center shadow-sm border border-gray-300 gap-x-1 items-center bg-white text-black font-medium rounded-md text-sm px-5 py-2.5"><IoChatbubbleSharp className='text-blue-500' size={22} /> Chat Now</button>

                    <a
                        href="mailto:support@Studywello.com"
                        target="_blank"
                        className="flex text-nowrap w-32 justify-center shadow-sm border border-gray-300 gap-x-1 items-center bg-white text-black font-medium rounded-md text-sm px-5 py-2.5"><MdEmail className='text-red-500' size={22} /> Email Us</a>
                </div>



            </div>
        </>
    )
}

export default EmailForm
