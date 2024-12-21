import React, { useState } from 'react'
import toast from 'react-hot-toast';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { FaPhone } from "react-icons/fa6";


const PhoneNumberForm = () => {
    const [loading, setLoading] = useState(false);

    const [formdata, setFormdata] = useState({
        phone: "",
    });


    const handleSubmit = async (e) => {
        e.preventDefault();

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
            phone: "",
        });
    }


    return (
        <>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <FaPhone className='text-blue-600' size={20} />
                </div>
                <input
                    type="number"
                    id="default-search"
                    value={formdata.phone}
                    onChange={(e) => setFormdata({ ...formdata, phone: e.target.value })}
                    className="block w-full p-3 ps-10 text-md text-gray-900 border focus:border-transparent border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Phone Number*"
                    required=""
                />
                <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={loading}
                    className="text-white absolute end-2.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2"
                >
                    {loading ? (<>Submitting...</>) : (<>Text Me</>)}
                </button>
            </div>
        </>
    )
}

export default PhoneNumberForm
