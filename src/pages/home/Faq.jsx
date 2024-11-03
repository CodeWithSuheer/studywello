import React from 'react'

const Faq = () => {
    return (
        <>
            <div className="max-w-4xl mx-auto py-20 px-4 sm:px-6 xl:px-0">
                <h2 className="mb-3 font-bold text-3xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">Frequently Asked Question</h2>


                <div className="space-y-6 mt-10">
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 border border-[#1A73E8] rounded-lg bg-white p-4 text-gray-900">
                            <h2 className="font-medium">Is it safe to pay someone to take my online class?</h2>

                            <svg
                                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180 text-[#1A73E8]"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>

                        </summary>

                        <p className="mt-4 px-4 leading-relaxed text-gray-700">
                            Yes, it is safe when you choose a trusted and reputable service like StudyWello. We prioritize client confidentiality, use secure payment methods, and ensure that your identity and data remain protected. Our services comply with strict privacy standards to give you peace of mind.
                        </p>
                    </details>

                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 border border-[#1A73E8] rounded-lg bg-white p-4 text-gray-900">
                            <h2 className="font-medium">How do you guarantee the quality of work?</h2>

                            <svg
                                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180 text-[#1A73E8]"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>

                        </summary>

                        <p className="mt-4 px-4 leading-relaxed text-gray-700">
                            Our team consists of over 50+ top-rated, degreed professionals with expertise in various subjects. We ensure high-quality, plagiarism-free submissions that meet academic standards. Our track record of 98% A/B grades speaks for our commitment to excellence.
                        </p>
                    </details>

                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 border border-[#1A73E8] rounded-lg bg-white p-4 text-gray-900">
                            <h2 className="font-medium">What subjects and courses do you cover?</h2>

                            <svg
                                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180 text-[#1A73E8]"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>

                        </summary>

                        <p className="mt-4 px-4 leading-relaxed text-gray-700">
                            We offer assistance across a wide range of subjects, including but not limited to business, law, nursing, engineering, and computer science. No matter how complex or specialized your course is, we have experts who can handle it.
                        </p>
                    </details>

                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 border border-[#1A73E8] rounded-lg bg-white p-4 text-gray-900">
                            <h2 className="font-medium">How does the process work after I place an order?</h2>

                            <svg
                                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180 text-[#1A73E8]"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>

                        </summary>

                        <p className="mt-4 px-4 leading-relaxed text-gray-700">
                            Once you place an order, we match you with a subject expert who will handle your class. You receive regular updates, and we ensure timely submissions. Our team is available 24/7 to address any questions and keep you informed about your progress.
                        </p>
                    </details>

                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 border border-[#1A73E8] rounded-lg bg-white p-4 text-gray-900">
                            <h2 className="font-medium">What happens if I don't get the grade I expected?</h2>

                            <svg
                                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180 text-[#1A73E8]"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>

                        </summary>

                        <p className="mt-4 px-4 leading-relaxed text-gray-700">
                            We stand by our quality guarantee. If the agreed-upon grade is't achieved, we offer a refund as per our policy. This ensures your investment is protected, and you can rely on us with confidence.
                        </p>
                    </details>

                </div>
            </div>
        </>
    )
}

export default Faq
