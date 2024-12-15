import React from 'react';
import Button from '../../components/Button';

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

const FaqClass = () => {
    const faqs = [
        {
            question: "Is it safe to pay someone to assist with my online class?",
            answer: "Yes, it is safe when you choose a trusted and reputable service like StudyWello. We prioritize client confidentiality, utilize secure payment methods, and safeguard your identity and data. Our services adhere to strict privacy standards to ensure your peace of mind."
        },
        {
            question: "How do you guarantee the quality of work?",
            answer: "Our team is composed of over 50+ top-rated, degreed professionals with expertise in various subjects. We ensure high-quality, plagiarism-free submissions that meet academic standards. Our 98% A/B grade success rate reflects our commitment to delivering exceptional results."
        },
        {
            question: "What subjects and courses do you cover?",
            answer: "We offer support across a broad range of subjects, including but not limited to business, law, nursing, engineering, and computer science. No matter how specialized your course is, we have the right experts to assist you."
        },
        {
            question: "How does the process work after I place an order?",
            answer: "Once you’ve placed your order, we connect you with a subject expert who will guide and support you through your online class. You’ll receive regular updates, and we ensure all tasks are completed on time. Our team is available 24/7 to answer questions and keep you informed about your progress."
        },
        {
            question: "What happens if I don't get the grade I expected?",
            answer: "We stand by our quality work. If the agreed-upon grade isn’t achieved, we provide a refund according to our policy, ensuring your investment remains protected. You can rely on us with full confidence."
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
            <div className="mt-10 flex justify-center items-center">
                <Button text="Help Me With Class" />
            </div>

        </div>
    );
};

export default FaqClass;
