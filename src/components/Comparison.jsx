import React from 'react'
import Button from './Button'

const Icon = ({ name }) => {
    const icons = {
        success: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
        ),
        Security: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>
        ),
        support: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-percent"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><path d="m15 9-6 6" /><path d="M9 9h.01" /><path d="M15 15h.01" /></svg>
        ),
        refund: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-check-2"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="m3 15 2 2 4-4" /></svg>
        )
    }
    return icons[name]
}

const studyWelloData = [
    { text: "Original, Plagiarism-Free Work", icon: "success" },
    { text: "Confidentiality & Security", icon: "Security" },
    { text: "Quality Assurance", icon: "support" },
    { text: "Satisfaction Guarantee", icon: "refund" },
]

const Comparison = ({
    mainHeading = "Why Should You Hire Us To Take Your Online Class",
    subHeading = "We can Fulfil the Standards of All Universities & Schools.",
    buttonText = "Help Me With Class"
}) => {
    return (
        <section className="py-10 sm:py-20 bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
                        {mainHeading}
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                        {subHeading}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {studyWelloData.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <div className="bg-blue-100 rounded-full p-3">
                                    <Icon name={item.icon} className="w-6 h-6 text-blue-600" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-900">{item.text}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* <div className="mt-16 text-center">
                    <button className="bg-blue-600 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
                        {buttonText}
                    </button>
                </div> */}

                <div className="mt-10 flex justify-center items-center">
                    <Button text={buttonText} />
                </div>
            </div>
        </section>
    )
}

export default Comparison

