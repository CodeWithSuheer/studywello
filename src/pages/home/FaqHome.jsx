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

const FaqHome = () => {
    const faqs = [
        {
            question: "Will anyone know I'm using your services?",
            answer: "Your privacy is our top priority. We maintain strict confidentiality, never sharing your information with third parties. You can trust us to keep all details of our collaboration secure and discreet."
        },
        {
            question: "Will you match me with the right subject expert?",
            answer: "Absolutely! Simply provide your course details, and we'll connect you with a specialized academic professional who understands your subject matter. If you're unsure who's best, we'll find the perfect fit on your behalf."
        },
        {
            question: "How quickly can you complete my project?",
            answer: "We understand deadlines matter. Our team is equipped to handle urgent requests without compromising quality. Whether your due date is days away or right around the corner, count on us to deliver on time."
        },
        {
            question: "What if I'm not fully satisfied with the results?",
            answer: "Your satisfaction drives us. We offer revisions to refine and improve the work until it meets your expectations. In rare cases where the outcome falls short, we'll discuss a refund or alternative solutions as per our policy."
        },
        {
            question: "Can you support all my course assignments and quizzes while ensuring academic integrity?",
            answer: "We can provide guidance across various tasks—from assignments and quizzes to practice sessions for even the most secure exams. Everything we create is original, thoroughly researched, and checked with professional tools to ensure it's free from plagiarism."
        },
        {
            question: "How do I request assistance for my online exam?",
            answer: "Getting started is simple. Reach out via live chat or fill out our contact form with your exam details. Once we have the information, we'll connect you with a qualified expert who will guide you through the preparation process."
        },
        {
            question: "Can I communicate directly with the subject experts?",
            answer: "Yes! We encourage open communication. You can message your assigned specialist directly, clarify any questions, and share new instructions to ensure the work aligns perfectly with your academic goals."
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
                <Button text="Get a Free Quote Now" />
            </div>

        </div>
    );
};

export default FaqHome;
