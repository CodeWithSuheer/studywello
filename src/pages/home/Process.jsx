import React from 'react'

const Process = () => {

    const steps = [
        { id: 2, text: 'Get a Price Quote', icon: 'file-text' },
        { id: 3, text: 'Make Payment', icon: 'dollar-sign' },
        { id: 4, text: 'Get Your Work Done', icon: 'check' }
    ];


    return (
        <>
            <section className='bg-[#F4F8FE]'>
                <div className="max-w-7xl mx-auto py-14">
                    {/* --------------- HEADER TEXT ---------------  */}
                    <h2 className="mb-3 font-bold text-3xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">The Process We Follow</h2>
                    <p className='w-[90%] sm:w-[80%] lg:w-[50%] mx-auto text-black text-center'>In order to avail of our academic writing services, you have to follow the simplest procedure mentioned below:</p>

                    {/* --------------- CONTENT ---------------  */}
                    <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10 sm:px-8 px-4">

                        {/* DETAIL BOXES */}
                        <div className="space-y-4">

                            <details className="group rounded-2xl bg-white border border-blue-500 [&_summary::-webkit-details-marker]:hidden" open>
                                {/* HEADER */}
                                <summary className="flex px-3 py-3 cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                                    <h2 className="text-lg font-medium flex items-center pl-3">
                                        <span><img className='size-10 mr-3' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/file_1_2.png?v=1713359000" alt="" /></span>
                                        Provide Order Details
                                    </h2>

                                    <span className="ml-auto bg-blue-500 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                                        01
                                    </span>
                                </summary>

                                {/* TEXT */}
                                <p className="mt-1 px-4 pb-4 leading-relaxed text-gray-700">
                                    The first step in our process is to provide us with your order details. Whether you need help with an assignment, exam, or online class, we'll need some basic information about the task at hand. This includes the subject, topic, academic level, deadline, and any specific instructions or requirements you may have.
                                </p>
                            </details>

                            <details className="group rounded-2xl bg-white border border-blue-500 [&_summary::-webkit-details-marker]:hidden">
                                {/* HEADER */}
                                <summary className="flex px-3 py-3 cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                                    <h2 className="text-lg font-medium flex items-center pl-3">
                                        <span><img className='size-10 mr-3' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/file_1.png?v=1713358897" alt="" /></span>
                                        Get a Price Quote
                                    </h2>

                                    <span className="ml-auto bg-blue-500 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                                        02
                                    </span>
                                </summary>

                                {/* TEXT */}
                                <p className="mt-1 px-4 pb-4 leading-relaxed text-gray-700">
                                    Once we have all the necessary details about your order, we'll provide you with a price quote for our services. Our pricing is transparent and straightforward, with no hidden fees or surprise charges.
                                </p>
                            </details>

                            <details className="group rounded-2xl bg-white border border-blue-500 [&_summary::-webkit-details-marker]:hidden">
                                {/* HEADER */}
                                <summary className="flex px-3 py-3 cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                                    <h2 className="text-lg font-medium flex items-center pl-3">
                                        <span><img className='size-10 mr-3' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/file_3.png?v=1713358898" alt="" /></span>
                                        Make Payment
                                    </h2>

                                    <span className="ml-auto bg-blue-500 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                                        03
                                    </span>
                                </summary>

                                {/* TEXT */}
                                <p className="mt-1 px-4 pb-4 leading-relaxed text-gray-700">
                                    After you've received your price quote and are ready to proceed, the final step is to make payment. We offer a variety of payment options to make the process as convenient as possible, including credit card, PayPal, and other secure online payment methods.
                                </p>
                            </details>

                            <details className="group rounded-2xl bg-white border border-blue-500 [&_summary::-webkit-details-marker]:hidden">
                                {/* HEADER */}
                                <summary className="flex px-3 py-3 cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                                    <h2 className="text-lg font-medium flex items-center pl-3">
                                        <span><img className='size-10 mr-3' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/file_1_1.png?v=1713358897" alt="" /></span>
                                        Get Your Work Done
                                    </h2>

                                    <span className="ml-auto bg-blue-500 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                                        04
                                    </span>
                                </summary>

                                {/* TEXT */}
                                <p className="mt-1 px-4 pb-4 leading-relaxed text-gray-700">
                                    We prioritize meeting your needs, and our experts will begin working on your project accordingly. Once the task is complete, we'll provide you with the final draft, and you can request any changes you need.
                                </p>
                            </details>

                        </div>

                        {/* IMAGE */}
                        <div className="right_image mt-5 sm:mt-0 px-3 md:px-40 lg:px-10 xl:px-20 mx-auto">
                            <img className="object-cover object-center rounded" alt="hero" src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_72071.png?v=1712918884" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Process
