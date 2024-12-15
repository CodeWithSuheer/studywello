import React from 'react';
import { FaDotCircle } from "react-icons/fa";
import Button from './Button';

const Subject = ({ heading = "Subject We Work On", text = "Let's Talk" }) => {
    const subjectName = [
        "English", "Math", "Statistics", "HRM Class", "Anatomy and Physiology",
        "Accounting", "Computer Science", "History", "Operation Management",
        "Marketing", "Psychology", "Philosophy", "Law", "Engineering",
        "Physics", "Biology", "Chemistry", "Finance", "Organizational Behavior",
        "Nursing", "Bible", "Ethics", "Sociology", "Environmental Science",
        "Economics", "Nutrition", "Linguistics", "Art", "Pharmacology",
        "Aviation", "Geography", "Architecture"
    ];

    const backgroundColors = [
        'bg-[#2196f3]', 'bg-[#9575cd]', 'bg-[#4db6ac]', 'bg-[#9F77F4]', 'bg-[#29b6f6]', 'bg-[#3E7FFF]', 'bg-[#00b8d4]', 'bg-[#f06292]', 'bg-[#9575cd]', 'bg-[#4db6ac]',
    ];

    return (
        <>
            <section className='bg-white'>
                <div className="max-w-7xl mx-auto pt-16 pb-3 sm:pb-6 px-3 lg:px-0">
                    {/* --------------- HEADER TEXT ---------------  */}
                    <h2 className="mb-3 font-bold text-3xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">{heading}</h2>

                    <div className="mt-10 flex justify-center items-center flex-wrap gap-x-3 sm:gap-x-5 gap-y-3 sm:gap-y-5">
                        {subjectName?.map((data, index) => (
                            <div key={index} className='h-10 flex items-center'>
                                <button className={`text-sm sm:text-md font-medium border px-6 py-2.5 rounded-xl text-white ${backgroundColors[index % backgroundColors.length]}`}>
                                    {data}
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 flex justify-center items-center">
                        <Button text={text} />
                    </div>

                </div>
            </section>
        </>
    );
}

export default Subject;
