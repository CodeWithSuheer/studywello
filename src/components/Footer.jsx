import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
    const handleMoveToTop = () => {
        window.scroll(0, 0);
    };

    return (
        <>
            <footer className="w-full bg-[#ECECFB] text-black">
                <div className="max-w-7xl mx-auto">
                    {/* FOOTER UPPER PART  */}
                    <div className="pt-16 pb-14 px-4 md:px-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-5">
                        {/* LOGO & HEADING */}
                        <div className="sm:col-span-2">
                            <h1 className="max-w-lg flex items-center text-xl font-semibold tracking-tight text-black xl:text-2xl">
                                <img className='-ml-3 w-12' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/aaa.png?v=1713875658" alt="logo" />
                                Study Wello
                            </h1>
                            <p className="max-w-md text-[1rem] mt-3">
                                Study Wello is providing help to students as academic consultants, to resolve their queries, helping them by providing sufficient help in assignments and exams. There are a vast variety of subjects offered by Study Wello through experts.
                            </p>
                        </div>

                        {/* QUICK LINKS */}
                        <div>
                            <p className="text-xl font-semibold text-black">Quick Link</p>
                            <ul className="mt-3 space-y-2">
                                {[
                                    { label: "Home", to: "/" },
                                    { label: "About Us", to: "/about" },
                                    { label: "Contact Us", to: "/contact" },
                                    { label: "Privacy Policy", to: "/privacy-policy" }
                                ].map((link) => (
                                    <li key={link.to}>
                                        <Link
                                            to={link.to}
                                            onClick={handleMoveToTop}
                                            className="text-black hover:text-blue-600 transition-colors duration-300"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* PRODUCT & CATEGORIES */}
                        <div>
                            <p className="text-xl font-semibold text-black">
                                Services
                            </p>
                            <ul className="mt-3 space-y-2">
                                {[
                                    // { label: "Do My Class", to: "/do-my-class" },
                                    // { label: "Help With Class", to: "/help-with-class" },
                                    // { label: "Help With Exam", to: "/help-with-exam" },
                                    { label: "Online Classes", to: "/online-classes" },
                                    { label: "Exams Help", to: "/exams-help" },
                                    { label: "Assignments", to: "/assignments" },
                                    { label: "Samples", to: "/samples" },
                                ].map((link) => (
                                    <li key={link.to}>
                                        <Link
                                            to={link.to}
                                            className="text-black hover:text-blue-600 transition-colors duration-300"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* PRODUCT & CATEGORIES */}
                        <div>
                            <p className="text-xl font-semibold text-black">
                                Contact Info
                            </p>
                            <div className="flex flex-col items-start mt-3 space-y-2">
                                {/* PHONE NUMBER */}
                                <a href="tel:+1-716-374-9747" className="flex items-center gap-2">
                                    <FaPhone /> +1 (716) 374-9747
                                </a>

                                {/* SOCIAL LINKS */}
                                <div className="links pt-2 flex items-center justify-start gap-2.5">
                                    <a href="https://www.facebook.com/studywello" target="_blank" className=""><FaFacebookF className="text-white bg-blue-600 h-7 w-7 p-1.5 rounded-full" /></a>
                                    <a href="#" className=""><FaInstagram className="text-white bg-blue-600 h-7 w-7 p-1.5 rounded-full" /></a>
                                    <a href="#" className=""><FaLinkedinIn className="text-white bg-blue-600 h-7 w-7 p-1.5 rounded-full" /></a>
                                    <a href="#" className=""><FaTiktok className="text-white bg-blue-600 h-7 w-7 p-1.5 rounded-full" /></a>
                                </div>

                                {/* PAYMENT METHOLDS */}
                                <div className="paymentMethods pt-2 flex items-center justify-start gap-2">
                                    <img className="w-8" src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Paypal_logo.png?v=1713217299" alt="" />
                                    <img className="w-8" src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/MasterCard_Logo_svg.png?v=1713215530" alt="" />
                                    <img className="w-8" src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/visa.png?v=1713215529" alt="" />
                                    <img className="w-8" src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/American_Express.png?v=1713215529" alt="" />
                                </div>


                            </div>
                        </div>
                    </div>
                </div>


                {/* FOOTER BOTTOM PART  */}
                <div className="text-sm py-7 px-4 md:px-10 border-t bg-[#1A73E8] text-center text-white">
                    <p>Copyrights © 2024 All Rights Reserved by Study Wello</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
