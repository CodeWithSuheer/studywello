import React from 'react';

const AccordionItem = ({ question, answer }) => (
    <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary
            className="flex cursor-pointer items-center justify-between gap-1.5 border border-[#1A73E8] rounded-lg bg-white p-4 text-gray-900"
            aria-expanded="false"
        >
            <h3 className="font-medium">{question}</h3>
            <svg
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180 text-[#1A73E8]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
        </summary>
        <p className="mt-4 px-4 leading-relaxed text-gray-700">{answer}</p>
    </details>
);

const FaqExams = () => {
    const faqs = [
        {
            question: "Is it safe and confidential to hire experts to assist with my online exam?",
            answer: "Yes, absolutely. We prioritize your privacy and ensure complete confidentiality. Our platform uses secure methods to protect your data and identity. You can trust us to provide expert help without compromising your personal information."
        },
        {
            question: "How do you guarantee high grades on my exam?",
            answer: "We have a team of highly qualified experts across various subjects who specialize in online exams. Our professionals are selected based on their academic background and experience, allowing us to deliver top-notch results. We aim for A/B grades, and our success rate reflects our commitment to excellence."
        },
        {
            question: "What subjects or types of exams do you cover?",
            answer: "We offer help across a wide range of subjects, including but not limited to mathematics, science, business, engineering, nursing, and humanities. Whether it's a quiz, midterm, or final exam, our experts are equipped to handle exams at all academic levels."
        },
        {
            question: "How does the process work once I book an exam with you?",
            answer: "Once you place an order, we match you with a subject expert who will assist you during your exam. You'll receive updates, and we ensure your exam is handled on time with the best possible performance. Our support team is also available 24/7 for any questions or updates."
        },
        {
            question: "What happens if I don't achieve the desired grade?",
            answer: "We are committed to delivering quality results. If the agreed-upon grade is not achieved, we offer a partial or full refund depending on the situation, as part of our satisfaction guarantee. Our goal is to provide risk-free exam support."
        },
        {
            question: "Can I communicate with the expert assisting with my exam?",
            answer: "Yes, we allow direct communication with your assigned expert, if needed, to clarify any details or address specific concerns. This ensures a smooth experience and that all your requirements are fully understood."
        },
    ];

    return (
        <div className="max-w-4xl mx-auto py-20 px-4 sm:px-6 xl:px-0">
            <h2 className="mb-3 font-bold text-3xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">
                Frequently Asked Questions
            </h2>
            <div className="space-y-6 mt-10">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
    );
};

export default FaqExams;
