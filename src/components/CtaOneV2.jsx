import React from 'react'
import { FaPhone } from "react-icons/fa6";
import PhoneNumberForm from './PhoneNumberForm';

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
                  <PhoneNumberForm />
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
