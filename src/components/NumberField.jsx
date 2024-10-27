import React from 'react'
import { FaPhone } from "react-icons/fa6";

const NumberField = () => {
    return (
        <>
            <div className="button">
                <div className="max-w-md">
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <FaPhone className='text-blue-600' size={20} />
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full p-3 ps-10 text-md text-gray-900 border focus:border-transparent border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Phone Number*"
                            required=""
                        />
                        <button
                            type="submit"
                            className="text-white absolute end-2.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2"
                        >
                            Text Me
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NumberField
