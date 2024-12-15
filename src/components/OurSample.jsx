import React from 'react'
import { IoMdEye } from 'react-icons/io'

const samples = [
    {
        icon: "pdf",
        iconColor: "#E74C3C",
        title: "Research Project",
        subject: "Biology",
        pages: 6,
        academicLevel: "Masters",
        documentType: "PDF",
        referenceStyle: "APA",
        rating: 5
    },
    {
        icon: "xls",
        iconColor: "#27AE60",
        title: "Numerical Project",
        subject: "Business",
        pages: 1,
        academicLevel: "Masters",
        documentType: "Excel File",
        referenceStyle: "None",
        rating: 5
    },
    {
        icon: "doc",
        iconColor: "#3498DB",
        title: "Case Study",
        subject: "Economics",
        pages: 6,
        academicLevel: "Masters",
        documentType: "Word File",
        referenceStyle: "MLA",
        rating: 5
    }
]

function SampleCard({ sample }) {
    const renderStars = (rating) => {
        return "★".repeat(rating) + "☆".repeat(5 - rating)
    }

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
                <div
                    className="w-10 h-10 flex items-center justify-center rounded"
                    style={{ backgroundColor: `${sample.iconColor}20` }}
                >
                    <span className="text-sm font-bold uppercase" style={{ color: sample.iconColor }}>
                        {sample.icon}
                    </span>
                </div>
                <h3 className="text-xl font-semibold">{sample.title}</h3>
            </div>

            <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                    <span className="font-semibold">Subject:</span>
                    <span>{sample.subject}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-semibold">Number of Pages:</span>
                    <span>{sample.pages}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-semibold">Academic Level:</span>
                    <span>{sample.academicLevel}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-semibold">Document Type:</span>
                    <span>{sample.documentType}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-semibold">Reference Style:</span>
                    <span>{sample.referenceStyle}</span>
                </div>
            </div>

            <button className="w-full bg-[#1A73E8] text-white py-2 rounded-md flex items-center justify-center gap-2 transition-colors mb-3">
                <IoMdEye size={20} />
                <span>View Full Sample</span>
            </button>

            <div className="text-center flex justify-center items-center gap-2">
                <div className="font-semibold mb-1">Rating <span className='text-yellow-400 text-xl'>{renderStars(sample.rating)}</span></div>
            </div>
        </div>
    )
}

export default function Samples() {
    return (
        <div className=" bg-[#F4F8FE] py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-black text-center mb-12">Our Samples</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {samples.map((sample, index) => (
                        <SampleCard key={index} sample={sample} />
                    ))}
                </div>
            </div>
        </div>
    )
}

