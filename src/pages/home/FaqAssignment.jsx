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

const FaqAssignment = () => {
    const faqs = [
        {
            question: "Can You Assist Me with My Assignment?",
            answer: "Absolutely! Our team of skilled writers at StudyWello is ready to help you with your assignments. Simply place an order with us, and we'll deliver high-quality, well-researched work tailored to your specific needs."
        },
        {
            question: "Can You Help Me with My Assignment Confidentially?",
            answer: "Certainly! At StudyWello, your privacy is our top priority. We ensure that all your personal information and assignment details are kept strictly confidential, providing you with a secure and discreet service."
        },
        {
            question: "How Can I Get Assistance with My Assignment?",
            answer: "Getting help is easy. Visit StudyWello's website, fill out our order form with your assignment details, and our team will promptly connect with you to provide the support you need to succeed."
        },
        {
            question: "What Guarantees Do You Provide for Assignment Assistance?",
            answer: "We guarantee timely delivery, original and high-quality content, and strict adherence to your specific requirements. If you're not completely satisfied, we offer revisions to ensure the final result meets your expectations."
        },
        {
            question: "How Can I Pay for Assignment Assistance?",
            answer: "Paying for your assignment support is hassle-free with StudyWello. After placing your order, you can securely make the payment using our trusted and safe payment methods, including credit cards, PayPal, and more."
        },
        {
            question: "Do You Offer Online Assignment Help for All Subjects?",
            answer: "Yes! StudyWello has experts in a wide range of subjects. No matter your field of study, our specialists are equipped to assist you with your assignments, ensuring comprehensive and accurate support across disciplines like business, nursing, engineering, humanities, and more."
        },
        {
            question: "What If I'm Not Satisfied with the Assignment Help?",
            answer: "Your satisfaction is our priority. If you're not fully satisfied with the assignment we provide, we offer free revisions to address any concerns. Additionally, our money-back guarantee ensures that your investment is protected, giving you peace of mind."
        },
        {
            question: "Can I communicate with the expert working on my assignment?",
            answer: "Yes! At StudyWello, we encourage open communication. You can connect with your assigned expert through our secure messaging system to discuss specific requirements, share additional resources, or ask for clarifications—all in real time."
        },
        {
            question: "How does StudyWello handle plagiarism in assignments?",
            answer: "Originality is a top priority at StudyWello. Our rigorous quality control process includes thorough research, careful referencing, and advanced plagiarism detection tools to guarantee that every submission is unique and adheres to strict academic standards."
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

export default FaqAssignment;
