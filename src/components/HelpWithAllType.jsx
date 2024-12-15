import React from 'react'
import Button from './Button';

const content = [
    {
        id: 1,
        title: "Quizzes",
        description: "Quick assessments designed to gauge your understanding of specific topics or concepts. Our experts offer guidance to help you stay on top of class materials."
    },
    {
        id: 2,
        title: "Proctored Exams",
        description: "Secure, monitored exams taken under strict conditions. We provide trusted support and strategies to help you confidently navigate these supervised environments."
    },
    {
        id: 3,
        title: "Entrance Exams",
        description: "From SATs to graduate-level assessments like the GRE, GMAT, or MCAT, we offer expert guidance and preparation resources to boost your confidence and performance."
    },
    {
        id: 4,
        title: "Lockdown Exams",
        description: "Receive specialized advice for exams featuring advanced security protocols, such as lockdown browsers and remote proctoring, ensuring you're fully prepared."
    },
    {
        id: 5,
        title: "Midterms & Finals",
        description: "Critical assessments that shape your overall performance. We're here to reinforce your understanding, fine-tune your exam strategies, and help you excel."
    },
    {
        id: 6,
        title: "Certification Exams",
        description: "Earn professional certifications with greater ease. Our dedicated experts assist you in honing your skills, so you're ready to achieve the qualifications you need for career advancement."
    }
];



const HelpWithAllType = () => {
    return (
        <>
            <section className='mt-10 py-10 sm:py-20 bg-gray-50'>
                <div className="max-w-7xl mx-auto px-4 xl:px-0">

                    <div className="mb-14 header">
                        <h2 className="font-bold text-2xl md:text-4xl w-[95%] max-w-5xl mx-auto text-[#272727] text-start sm:text-center">
                            Comprehensive Support for All Types of Online Exams - We've Got You Covered!
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
