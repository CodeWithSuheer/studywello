import { Helmet } from "react-helmet";
import "../home/Home.css";
import Faq from "../home/Faq";
import Process from "../home/Process";
import LogoGrid from "../home/LogoGrid";
import Button from "../../components/Button";
import Testimonial from "../home/Testimonial";
import { FaArrowRightLong } from "react-icons/fa6";
import Subject from "../../components/Subject";
import WhyChooseUs from "../../components/WhyChooseUs";
import CtaOne from "../home/CtaOne";
import CtaTwo from "../home/CtaTwo";
import TrustSec from "../../components/TrustSec";
import CtaOneV2 from "../../components/CtaOneV2";

import { IoLogoWhatsapp } from "react-icons/io5";
import { IoChatbubbleSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

import SeoContentBlock from "../../components/SeoContentBlock";
import PhoneNumberForm from "../../components/PhoneNumberForm";
import Comparison from "../../components/Comparison";
import EmailFormExamsHelp from "../../components/EmailFormForExamsHelp";


const DoMyClass = () => {
  const images = [
    {
      img: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/ss1.png?v=1713880333",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/ss2.png?v=1713880339",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/ss3.png?v=1713880339",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/ss4.png?v=1713880338",
    },
  ];

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Do My Class</title>
      </Helmet>

      {/* --------------- HERO SECTION ---------------  */}
      <section className="text-white onlineClass_backgroundImage mb-0 lg:mb-0">
        <div className="max-w-7xl mx-auto md:px-10 pt-28 pb-10 flex justify-center items-center min-h-[95vh] relative z-10">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            {/* CONTENT */}
            <div className="px-4 sm:px-5 lg:flex-grow lg:w-1/2 xl:pr-20 lg:pr-12 md:pr-16 flex flex-col md:items-start md:text-left items-start">

              <h2 className="mb-3 sm:mb-3 text-2xl sm:text-3xl font-semibold tracking-wide w-full lg:max-w-xl md:text-3xl lg:text-4xl">
                Struggling To Keep Up With Your Online Classes?
              </h2>
              <p className="mb-3 sm:mb-4 text-md sm:text-lg w-full sm:max-w-lg font-normal">
                Pay us to handle your coursework, assignments, and discussions. Ace your classes stress-free with our online class help services.
              </p>

              <h2 className="mb-3 sm:mb-3 text-2xl sm:text-3xl font-bold tracking-wide w-full lg:max-w-sm md:text-3xl">
                Get a quote in 1 Minutes
              </h2>

              <p className="mb-3 sm:mb-4 text-md sm:text-md w-full sm:max-w-lg  font-normal">
                Get a text Back in 1 Minutes!
              </p>

              <div className="mb-3 button w-full">
                <div className="max-w-sm">
                  <PhoneNumberForm />
                </div>
              </div>

              <div className="buttons flex justify-center items-center flex-wrap gap-2">
                <a
                  href="https://api.whatsapp.com/send?phone=17163749747"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex text-nowrap w-32 justify-center shadow-sm border border-gray-300 gap-x-1 items-center bg-white text-black font-medium rounded-md text-sm px-5 py-2.5"><IoLogoWhatsapp className='text-green-500' size={22} /> Whatsapp</a>

                <button
                  onClick={() => {
                    Tawk_API.toggle();
                  }}
                  className="flex text-nowrap w-32 justify-center shadow-sm border border-gray-300 gap-x-1 items-center bg-white text-black font-medium rounded-md text-sm px-5 py-2.5"><IoChatbubbleSharp className='text-blue-500' size={22} /> Chat Now</button>

                <a
                  href="mailto:support@Studywello.com"
                  target="_blank"
                  className="flex text-nowrap w-32 justify-center shadow-sm border border-gray-300 gap-x-1 items-center bg-white text-black font-medium rounded-md text-sm px-5 py-2.5"><MdEmail className='text-red-500' size={22} /> Email Us</a>
              </div>
            </div>

            {/* EMAIL FORM */}
            <div className="lg:max-w-lg lg:w-1/2 w-full px-2 mt-10 lg:mt-0">
              <EmailFormExamsHelp />
            </div>
          </div>
        </div>
      </section>

      {/* --------------- TRUST SECTION ---------------  */}
      <TrustSec />

      {/* --------------- LOGO GRID ---------------  */}
      <LogoGrid />

      {/* --------------- IMAGE & TEXT SECTION -----------  */}
      <section className="body-font">
        <div className="max-w-6xl mx-auto flex px-1 sm:px-4 py-20 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_72173.png?v=1712918878"
            />
          </div>

          <div className="lg:flex-grow px-5 md:px-5 md:w-1/2 md:pl-6 lg:pl-14 xl:pl-12 flex flex-col text-left">
            <h1 className="mb-5 font-bold max-w-lg text-3xl md:text-4xl text-[#272727]">
              Struggling to Keep Up with Online Classes? Let Our Expert Team Handle It for You!
            </h1>
            <p className="mb-6 leading-relaxed">
              Managing online coursework can be overwhelming and time-consuming, but you don't have to do it alone. With StudyWello, you gain access to over 50+ top-rated, degreed professionals who are ready to help you succeed. Our team specializes in delivering high-quality, plagiarism-free work tailored to meet strict academic standards. Say goodbye to the stress of looming deadlines and tough assignments, and hello to expert assistance that ensures top grades and peace of mind. We're here to handle your classes with precision and care, so you can focus on what matters most.
            </p>
            <div className="flex justify-start">
              <Button text="Get Your Free Quote Now!" />
            </div>
          </div>
        </div>
      </section>

      {/* --------------- WHY CHOOSE US ---------------  */}
      <WhyChooseUs />

      {/* --------------- CTA SECTION ---------------  */}
      <CtaOneV2 />

      {/* --------------- COMPARISON ---------------  */}
      <Comparison />

      {/* --------------- CTA ONE ---------------  */}
      <CtaOne text="Take my class" />

      {/* --------------- PROOF ---------------  */}
      <section className="bg-white">
        <div className="max-w-5xl px-5 xl:px-0 mx-auto pt-20 pb-10">
          {/* --------------- HEADER TEXT ---------------  */}
          <h2 className="mb-3 font-bold text-2xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">
            Proof of Our Excellence:
          </h2>
          <h2 className="mb-3 font-bold text-2xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">
            Achieved A-Grades for Students!
          </h2>

          {/* --------------- CONTENT ---------------  */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-8">
            {images.map((data, index) => (
              <div key={index} className="my-3">
                <img
                  className="rounded-lg h-full border border-gray-300"
                  src={data.img}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------- PROCESS WE FOLLOW ---------------  */}
      <Process />

      {/* --------------- SERVICES ---------------  */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto py-20">
          {/* --------------- HEADER TEXT ---------------  */}
          <h2 className="mb-3 font-bold text-3xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">
            Further Academic Services
          </h2>
          <p className="w-[90%] sm:w-[80%] lg:w-[50%] mx-auto text-black text-center">
            In order to avail of our academic writing services, you have to
            follow the simplest procedure mentioned below
          </p>

          {/* --------------- CONTENT ---------------  */}
          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-8 sm:px-10 px-4">
            {/* CARD 1 */}
            <div className="service_card group box_shadow px-6 py-6 rounded-2xl bg-white hover:bg-[#1A73E8]">
              <div className="mb-3 logo w-16 h-16 p-1.5 rounded-xl bg-[#E8F1FD]">
                <img
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/question_1.png?v=1713360866"
                  alt=""
                />
              </div>

              <h3 className="mb-2 font-medium text-xl text-[#1A73E8] group-hover:text-white">
                Online Exams
              </h3>
              <p className="mb-3 sm:mb-4 text-sm leading-6 font-normal text-black group-hover:text-white">
                Online exams are usually tough to conduct. Hire law subject
                experts to get your law exam done within the right time and get
                an A+ grade for sure.
              </p>

              <button className="flex items-center gap-2 text-md font-medium text-[#1A73E8] group-hover:text-white">
                READ MORE <FaArrowRightLong size={14} />
              </button>
            </div>

            {/* CARD 2 */}
            <div className="service_card group box_shadow px-6 py-6 rounded-2xl bg-white hover:bg-[#1A73E8]">
              <div className="mb-3 logo w-16 h-16 p-1.5 rounded-xl bg-[#E8F1FD]">
                <img
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/question_1.png?v=1713360866"
                  alt=""
                />
              </div>

              <h3 className="mb-2 font-medium text-xl text-[#1A73E8] group-hover:text-white">
                Online Assignments
              </h3>
              <p className="mb-3 sm:mb-4 text-sm leading-6 font-normal text-black group-hover:text-white">
                For online assignments, our subject experts perform thorough
                research to bring the most relevant and appropriate content.
                Moreover, you will find our online assignment services
                grammatically correct and plagiarism-free.
              </p>

              <button className="flex items-center gap-2 text-md font-medium text-[#1A73E8] group-hover:text-white">
                READ MORE <FaArrowRightLong size={14} />
              </button>
            </div>

            {/* CARD 3 */}
            <div className="service_card group box_shadow px-6 py-6 rounded-2xl bg-white hover:bg-[#1A73E8]">
              <div className="mb-3 logo w-16 h-16 p-1.5 rounded-xl bg-[#E8F1FD]">
                <img
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/question_1.png?v=1713360866"
                  alt=""
                />
              </div>

              <h3 className="mb-2 font-medium text-xl text-[#1A73E8] group-hover:text-white">
                Online Class
              </h3>
              <p className="mb-3 sm:mb-4 text-sm leading-6 font-normal text-black group-hover:text-white">
                While taking your online class, if you are assigned homework to
                be submitted urgently or in an extended period, get our reliable
                services. AtDomyclassscholarly, we offer the most efficient
                homework services at quite reasonable prices with unlimited
                revisions.
              </p>

              <button className="flex items-center gap-2 text-md font-medium text-[#1A73E8] group-hover:text-white">
                READ MORE <FaArrowRightLong size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --------------- SECOND CTA SECTION ---------------  */}
      <CtaTwo text="Do my class" />

      {/* --------------- SUBJECT DETAILS ---------------  */}
      <Subject />

      {/* --------------- CONTENT SEO ---------------  */}
      <SeoContentBlock />

      {/* --------------- FAQ'S ---------------  */}
      <Faq />

      {/* --------------- TESTIMONIAL ---------------  */}
      <Testimonial />
    </>
  );
};

export default DoMyClass;
