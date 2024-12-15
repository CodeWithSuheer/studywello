import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { FaDollarSign, FaHandshake } from 'react-icons/fa6';
import { MdEditNote, MdSchool } from 'react-icons/md'
import Button from './Button';

const data = [
    {
        title: "Quality Writing—No AI",
        description: "Receive entirely human-generated, carefully researched, and meticulously written content. Our experts hold advanced academic qualifications and bring genuine insights to your assignments.",
        icon: <MdEditNote size={46} />
    },
    {
        title: "Timely Assistance",
        description: "Facing a tight deadline? We're here to help ensure your work is completed on schedule. Rely on our team for rapid turnaround and timely submissions, even under pressing timelines.",
        icon: <AiOutlineClockCircle size={46} />
    },
    {
        title: "Learner-Friendly Policies",
        description: "Our student-centered approach includes fair, transparent policies and a money-back guarantee. Your satisfaction and peace of mind matter to us.",
        icon: <FaHandshake size={46} />
    },
    {
        title: "Reliable Academic Experts",
        description: "Every specialist on our platform holds a Master's or Doctorate degree. This ensures you receive informed guidance, accurate research, and well-structured materials tailored to your academic needs.",
        icon: <MdSchool size={46} />
    },
    {
        title: "Budget-Conscious Services",
        description: "Our flexible pricing system is designed to fit a student's budget. Take advantage of available discounts and promotions, so you can access top-tier support without overspending.",
        icon: <FaDollarSign size={46} />
    },
    {
        title: "24/7 Availability",
        description: "Have a question at midnight or need clarification early in the morning? We're here around the clock. Reach out anytime, and our responsive team will be ready to assist you.",
        icon: <BsFillChatDotsFill size={46} />
    },
];


export default function AssignmentServices() {
    return (
        <>
            <section className="bg-[#F4F8FE]">
                <div className="max-w-6xl mx-auto py-14">
                    {/* --------------- HEADER TEXT ---------------  */}
                    <h2 className="mb-3 font-bold pl-2 text-3xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">
                        SudyWello: Top Features for Quality Academic Support
                    </h2>
                    <p className="w-[90%] sm:w-[80%] lg:w-[80%] mx-auto text-black text-center">
                        Discover why students worldwide trust us for expert, custom-crafted academic guidance and writing assistance. Our commitment to authenticity, timely delivery, and learner-focused policies sets us apart.
                    </p>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-8 my-10 sm:my-12">
                        {data?.map((data) => (
                            <div className="w-full p-4 flex justify-start gap-x-3">
                                <div className="icon text-[#1A73E8]">
                                    {data?.icon}
                                </div>
                                <div className="content">
                                    <h3 className="text-xl font-medium">
                                        {data?.title}
                                    </h3>
                                    <p className="mt-2 text-gray-700 text-sm leading-normal">
                                        {data?.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* <div className="flex justify-center items-center">
                        <Button text="Order Now" />
                    </div> */}
                </div>
            </section>
        </>
    )
}
