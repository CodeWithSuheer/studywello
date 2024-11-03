import React from 'react'


const tick = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="M4 7.5L7 10l4-5m-3.5 9.5a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z" /></svg>
)

const cross = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M.877 7.5a6.623 6.623 0 1 1 13.246 0a6.623 6.623 0 0 1-13.246 0M7.5 1.827a5.673 5.673 0 1 0 0 11.346a5.673 5.673 0 0 0 0-11.346m2.354 3.32a.5.5 0 0 1 0 .707L8.207 7.5l1.647 1.646a.5.5 0 0 1-.708.708L7.5 8.207L5.854 9.854a.5.5 0 0 1-.708-.708L6.793 7.5L5.146 5.854a.5.5 0 0 1 .708-.708L7.5 6.793l1.646-1.647a.5.5 0 0 1 .708 0" clipRule="evenodd" /></svg>
)

const studyWelloData = [
    "98% Client Success Rate",
    "Multiple Payment Options",
    "24/7 Support Availability",
    "100% Refund Guarantee ",
]

const othersData = [
    "No Guaranteed Grade",
    "Limited Payment Methods",
    "Poor Support After Payment is Completed.",
    "No Refund Policy",
]

const Comparison = () => {
    return (
        <>
            <section className='py-20'>
                <div className="max-w-5xl mx-auto px-3 xl:px-0">

                    <div className="header">
                        <h2 className="mb-3 font-bold pl-2 text-3xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-start sm:text-center">
                            Why Should You Hire Us To Take Your Online Class
                        </h2>
                        <p className='w-[90%] sm:w-[80%] lg:w-[65%] mx-auto text-black text-start sm:text-center'>
                            We can Fulfil the Standards of All Universities & Schools.
                        </p>
                    </div>

                    <div className="relative mt-10 content flex justify-center items-center gap-x-10 gap-y-10 flex-col md:flex-row flex-wrap">
                        <div className="studywello_perks sm:w-[30rem] ">
                            <div className="comparisonBoxShadow h-[20rem] px-5 sm:px-7 py-6 space-y-6 rounded-xl bg-white border border-gray-200">
                                <div className="mb-2 text-2xl sm:text-3xl font-semibold text-start bg-gradient-to-tr from-blue-600  to-blue-300 bg-clip-text text-transparent">Studywello</div>
                                {studyWelloData?.map((data, index) => (
                                    <div key={index} className="flex gap-x-2 sm:gap-x-3 justify-start items-center">
                                        <span className="icon text-green-500">
                                            {tick}
                                        </span>
                                        <p className='text-sm sm:text-lg font-normal'>{data}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="absolute z-20 vs bg-gradient-to-br from-sky-300 to-blue-600 text-white p-5 sm:p-6 rounded-full text-xl sm:text-2xl font-bold">
                            VS
                        </div>

                        <div className="other sm:w-[30rem] ">
                            <div className="comparisonBoxShadow h-[20rem] px-5 sm:px-7 py-6 space-y-6 rounded-xl bg-white border border-gray-200">
                                <div className="mb-2 text-2xl sm:text-3xl font-semibold text-start bg-gradient-to-tr from-red-600  to-yellow-400 bg-clip-text text-transparent  ">Others</div>
                                {othersData?.map((data, index) => (
                                    <div key={index} className="flex gap-x-2 sm:gap-x-3 justify-start items-center">
                                        <span className="icon text-red-500">
                                            {cross}
                                        </span>
                                        <p className='text-sm sm:text-lg font-normal'>{data}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Comparison
