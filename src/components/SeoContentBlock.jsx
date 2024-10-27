import { data } from 'autoprefixer'
import React from 'react'
const tick = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.75 8.75l3.5 3.5l7-7.5" /></svg>
)

const firstTableData = [
    "Pay someone to do my online class for me",
    "Every 3rd client in the USA refer us for online class help to peers",
    "Why taking online classes is beneficial for students in the US?",
    "Who should consider taking online class help?",
    "How TakemyOnlineClassesForme can help in doing your online class for you?",
    "Why should pay someone to take an online class for you?",
    "What are the benefits of hiring online class helpers on our website?",
    "We are comfortable with Major Learning management systems - Find out what we offer",
]


const SeoContentBlock = () => {
    return (
        <>
            <section className="bg-white px-4 md:px-0">
                <div className="max-w-6xl mx-auto py-10">
                    <div className="first_block">
                        <h2 className='mb-7 text-center text-3xl sm:text-4xl font-semibold'>Pay Someone To Take My Online Class</h2>


                        <div className="content border border-gray-400 bg-gray-50 rounded-lg px-4 py-5 text-black space-y-2">
                            {firstTableData?.map((data) => (
                                <div className="row flex justisfy-start items-center gap-x-2"><span className='text-green-600'>{tick}</span> {data}</div>
                            ))}
                        </div>
                    </div>

                    {/* SECOND SECTION */}
                    <div className="secondSection mt-10">
                        <h2 className='mb-3 text-start text-2xl sm:text-3xl font-semibold'>Every 3rd client in the USA refer us for online class help to peers</h2>

                        <p className='text-md'>
                            When you are looking to hire someone to take an online class for you, we know how it feels to keep jumping from one website to another with no luck. Your search for an online class helper ends with Takemyonlineclassesforme.com. We are a pioneer of online class assistance in the United States. We know you have paid a hefty amount for your online classes and you do not want to ruin your outlook of a promotion or a great job due to a poor grade on your online class. Hence, we are here to <span className='font-semibold'>do your online class for you</span>. Read further to find out various reasons you should take our online assistance. You can ask us to take my online exam, online class, coursework, online essay submission, and much more.
                        </p>
                    </div>

                    {/* THIRD SECTION */}
                    <div className="secondSection mt-10">
                        <h2 className='mb-3 text-start text-2xl sm:text-3xl font-semibold'>Why taking online classes is beneficial for students in the US?</h2>

                        <p className='text-md'>
                            Online classes have been popular among working professionals for a long time already, but not it has been picking up among the students looking for graduate programs only.
                        </p>

                        <ul className='pl-5'>
                            <li className='list-disc my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit similique nostrum quas eaque libero unde optio. Voluptate.</li>

                            <li className='list-disc my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit similique nostrum quas eaque libero unde optio. Voluptate.</li>

                            <li className='list-disc my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit similique nostrum quas eaque libero unde optio. Voluptate.</li>

                            <li className='list-disc my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit similique nostrum quas eaque libero unde optio. Voluptate.</li>

                            <li className='list-disc my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit similique nostrum quas eaque libero unde optio. Voluptate.</li>

                            <li className='list-disc my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit similique nostrum quas eaque libero unde optio. Voluptate.</li>
                        </ul>
                    </div>


                    {/* FORTH SECTION */}
                    <div className="secondSection mt-10">
                        <h2 className='mb-3 text-start text-2xl sm:text-3xl font-semibold'>Every 3rd client in the USA refer us for online class help to peers</h2>

                        <p className='text-md'>
                            When you are looking to hire someone to take an online class for you, we know how it feels to keep jumping from one website to another with no luck. Your search for an online class helper ends with Takemyonlineclassesforme.com. We are a pioneer of online class assistance in the United States. We know you have paid a hefty amount for your online classes and you do not want to ruin your outlook of a promotion or a great job due to a poor grade on your online class. Hence, we are here to <span className='font-semibold'>do your online class for you</span>. Read further to find out various reasons you should take our online assistance. You can ask us to take my online exam, online class, coursework, online essay submission, and much more.
                        </p>
                    </div>

















                </div>
            </section>
        </>
    )
}

export default SeoContentBlock
