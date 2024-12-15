import React from 'react'

const HomeProcess = () => {

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
                                        Step 1: Submit Your Requirements
                                    </h2>

                                    <span className="ml-auto bg-blue-500 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                                        01
                                    </span>
                                </summary>

                                {/* TEXT */}
                                <p className="mt-1 px-4 pb-4 leading-relaxed text-gray-700">
                                    Share the details of your assignment—topic, academic level, deadline, formatting guidelines, and any specific instructions. The more we know, the better we can tailor our service.
                                </p>
                            </details>

                            <details className="group rounded-2xl bg-white border border-blue-500 [&_summary::-webkit-details-marker]:hidden">
                                {/* HEADER */}
                                <summary className="flex px-3 py-3 cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                                    <h2 className="text-lg font-medium flex items-center pl-3">
                                        <span><img className='size-10 mr-3' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/file_1.png?v=1713358897" alt="" /></span>
                                        Step 2: Receive a Personalized Quote
                                    </h2>

                                    <span className="ml-auto bg-blue-500 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                                        02
                                    </span>
                                </summary>

                                {/* TEXT */}
                                <p className="mt-1 px-4 pb-4 leading-relaxed text-gray-700">
                                    We'll analyze your requirements and present a fair, no-obligation quote. Once you're satisfied, proceed with a secure payment method of your choice.
                                </p>
                            </details>

                            <details className="group rounded-2xl bg-white border border-blue-500 [&_summary::-webkit-details-marker]:hidden">
                                {/* HEADER */}
                                <summary className="flex px-3 py-3 cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                                    <h2 className="text-lg font-medium flex items-center pl-3">
                                        <span><img className='size-10 mr-3' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/file_3.png?v=1713358898" alt="" /></span>
                                        Step 3: Expert in Action
                                    </h2>

                                    <span className="ml-auto bg-blue-500 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                                        03
                                    </span>
                                </summary>

                                {/* TEXT */}
                                <p className="mt-1 px-4 pb-4 leading-relaxed text-gray-700">
                                    We match your assignment with the ideal subject expert. They'll craft a high-quality, original piece that aligns perfectly with your professor's expectations and academic standards.
                                </p>
                            </details>

                            <details className="group rounded-2xl bg-white border border-blue-500 [&_summary::-webkit-details-marker]:hidden">
                                {/* HEADER */}
                                <summary className="flex px-3 py-3 cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                                    <h2 className="text-lg font-medium flex items-center pl-3">
                                        <span><img className='size-10 mr-3' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/file_1_1.png?v=1713358897" alt="" /></span>
                                        Step 4: Review & Request Revisions
                                    </h2>

                                    <span className="ml-auto bg-blue-500 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                                        04
                                    </span>
                                </summary>

                                {/* TEXT */}
                                <p className="mt-1 px-4 pb-4 leading-relaxed text-gray-700">
                                    Receive your completed assignment before the deadline. Review it carefully and request revisions if needed—we offer unlimited edits until you're completely satisfied.
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

export default HomeProcess
