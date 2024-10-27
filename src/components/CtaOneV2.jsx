import React from 'react'
import { FaPhone } from "react-icons/fa6";

const CtaOneV2 = () => {
  return (
    <>
      <section className="body-font bg-gray-50">
        <div className="max-w-6xl mx-auto flex px-5 py-20 md:flex-row flex-col items-center">

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-8">

            <div className="lg:col-span-3 lg:flex-grow pr-8 flex flex-col text-start">

              <h1 className="mb-1 pb-3 font-bold max-w-xl text-3xl md:text-5xl bg-gradient-to-tr from-blue-600  to-blue-300 bg-clip-text text-transparent">Say goodbye to the struggle with Grades, Hire now and lock your grades</h1>

              <p className="mb-6 max-w-md text-gray-700 leading-relaxed text-lg">Hiring us to take your online class for you is a small investment for good grades</p>

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

              <p className="mt-3 max-w-md text-gray-700 leading-relaxed text-xs">We need your number to provide our services as it is the fastest form of communication. We do not spam.</p>

            </div>

            <div className="lg:col-span-2 lg:max-w-lg lg:w-full mb-10 md:mb-0">
              <img className="object-cover object-center rounded" alt="hero" src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_72080.png?v=1712918877" />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default CtaOneV2
