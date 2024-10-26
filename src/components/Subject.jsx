import React from 'react'
import { FaDotCircle } from "react-icons/fa";


const Subject = () => {

    const subjectName = [
        "English",
        "Math",
        "Statistics",
        "HRM Class",
        "Anatomy and Physiology",
        "Accounting",
        "Computer Science",
        "History",
        "Operation Management",
        "Marketing",
        "Psychology",
        "Philosophy",
        "Law",
        "Engineering",
        "Physics",
        "Biology",
        "Chemistry",
        "Finance",
        "Organizational Behavior",
        "Nursing",
        "Bible",
        "Ethics",
        "Sociology",
        "Environmental Science",
        "Economics",
        "Nutrition",
        "Linguistics",
        "Art",
        "Pharmacology",
        "Aviation",
        "Geography",
        "Architecture"
    ];

    return (
        <>
            <section className='bg-white'>
                <div className="max-w-6xl mx-auto py-20 px-6 lg:px-0">
                    {/* --------------- HEADER TEXT ---------------  */}
                    <h2 className="mb-3 font-bold text-3xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">Subject We Work On</h2>

                    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-4">
                        {subjectName.map((data, index) => (
                            <div key={index} className='h-10 bg-white flex items-center'>
                                <FaDotCircle className='text-[#1A73E8] mr-2' size={13} />
                                <p className='text-md font-medium'>{data}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}

export default Subject
