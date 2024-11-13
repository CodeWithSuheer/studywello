import React from 'react'
import Button from './Button';

const content = [
    {
        id: 1,
        title: "Quizzes",
        description: "Quick assessments designed to gauge your grasp of specific topics or concepts. Perfect for staying on top of class materials."
    },
    {
        id: 2,
        title: "Proctored Exams",
        description: "Secure, monitored exams taken under supervision, ensuring compliance with strict testing standards. We provide trusted assistance for proctored environments."
    },
    {
        id: 3,
        title: "Entrance Exams",
        description: "Get support with exams required for entry into colleges, graduate programs, or professional schools—like the SAT, GRE, GMAT, or MCAT."
    },
    {
        id: 4,
        title: "Lockdown Exams",
        description: "Specialized help for exams with restricted access and advanced security protocols, such as lockdown browsers or remote proctoring."
    },
    {
        id: 5,
        title: "Midterms & Finals",
        description: "Critical assessments that determine your overall performance for the term. Let us help you ace these comprehensive exams."
    },
    {
        id: 6,
        title: "Certification Exams",
        description: "Professional certifications are vital for career growth. Our experts assist with exams for various certifications, ensuring you're fully prepared for success."
    }
];



const HelpWithAllType = () => {
    return (
        <>
            <section className='mt-10 py-10 sm:py-20 bg-gray-50'>
                <div className="max-w-7xl mx-auto px-4 xl:px-0">

                    <div className="mb-14 header">
                        <h2 className="font-bold text-2xl md:text-4xl w-[95%] max-w-5xl mx-auto text-[#272727] text-start sm:text-center">
                            Comprehensive Help with All Types of Online Exams - Whatever You Need, We've Got It Covered!
                        </h2>
                    </div>


                    <div className="content grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
                        {content?.map((data) => (
                            <div key={data?.id}>
                                <h2 className='text-lg font-semibold'>{data?.title}</h2>
                                <p className='text-[16px] font-normal text-gray-800'>{data?.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 flex justify-center items-center">
                        <Button text="Place an Order Now" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default HelpWithAllType
