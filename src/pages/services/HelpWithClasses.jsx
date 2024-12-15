import { Helmet } from "react-helmet";
import { FaArrowRightLong } from "react-icons/fa6";

// Shared Components
import Button from "../../components/Button";
import Subject from "../../components/Subject";
import WhyChooseUs from "../../components/WhyChooseUs";
import TrustSec from "../../components/TrustSec";
import CtaOneV2 from "../../components/CtaOneV2";
import EmailForm from "../../components/EmailForm";
import ExpertsAvailable from "../../components/ExpertsAvailable";
import Comparison from "../../components/Comparison";

// Page-specific Components
import Faq from "../home/Faq";
import Process from "../home/Process";
import LogoGrid from "../home/LogoGrid";
import Testimonial from "../home/Testimonial";
import CtaOne from "../home/CtaOne";
import CtaTwo from "../home/CtaTwo";

// Styles
import "../home/Home.css";
import EmailFormForHelpWithClass from "../../components/email-forms/EmailFormForHelpWithClass";
import WhyChooseUsForHelpWithClass from "../../components/WhyChooseUsForHelpWithClass";
import ProcessForHelpWithClass from "../../components/ProcessForHelpWithClass";
import FaqClass from "../home/FaqClass";

import img01 from "../../assets/img01.webp"



const HelpWithClasses = () => {
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
        <title>Pay Someone To Do My Class For Me | Take My Class</title>
      </Helmet>

      {/* --------------- HERO SECTION ---------------  */}
      <section className="text-white onlineClass_backgroundImage mb-0 lg:mb-0">
        <div className="max-w-7xl mx-auto md:px-10 pt-28 pb-10 flex justify-center items-center min-h-[95vh] relative z-10">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            {/* CONTENT */}
            <div className="px-4 sm:px-5 lg:flex-grow lg:w-1/2 xl:pr-20 lg:pr-12 md:pr-16 flex flex-col md:items-start md:text-left items-start">
              <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-semibold tracking-wide w-full lg:max-w-md md:text-3xl lg:text-4xl">
                Pay an Expert for Online Class Assistance to Boost Your Grades!
              </h2>
              <p className="mb-3 sm:mb-4 text-md sm:text-md w-full sm:max-w-lg font-normal">
                Struggling to keep up with your online classes? Don't worry,
                Studywello is here to help! Our experienced tutors and academic
                experts can provide you with the support you need to succeed in
                your coursework.
              </p>

              <div className="button mt-4 flex justify-start items-center gap-x-7">
                <div className="text-center bg-gradient-to-tl from-blue-500 via-purple-500 to-pink-500 rounded-lg text-white px-5 py-3">
                  <h2 className="mb-1 text-3xl font-semibold">8200+</h2>
                  <p className="text-sm">Classes With A/B</p>
                </div>

                <div className="text-center bg-gradient-to-tl from-blue-500 via-purple-500 to-pink-500 rounded-lg text-white px-5 py-3">
                  <h2 className="mb-1 text-3xl font-semibold">9.8/10</h2>
                  <p className="text-sm">Feedback rating</p>
                </div>
              </div>

              <ExpertsAvailable />
            </div>

            {/* EMAIL FORM */}
            <div className="lg:max-w-lg lg:w-1/2 w-full px-2 mt-10 lg:mt-0">
              <EmailFormForHelpWithClass />
            </div>
          </div>
        </div>
      </section>

      {/* --------------- TRUST SECTION ---------------  */}
      <TrustSec />

      {/* --------------- LOGO GRID ---------------  */}
      <LogoGrid />

      {/* ----------- IMAGE & TEXT SECTION -----------  */}
      <section className="body-font">
        <div className="max-w-6xl mx-auto flex px-1 sm:px-4 py-20 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded-3xl"
              alt="img"
              src={img01}
            />
          </div>

          <div className="lg:flex-grow px-5 md:px-5 md:w-1/2 md:pl-6 lg:pl-14 xl:pl-12 flex flex-col text-left">
            <h1 className="mb-5 font-bold max-w-lg text-3xl md:text-4xl text-[#272727]">
              Struggling to Keep Up with Online Classes? Let Our Expert Team Support Your Success!
            </h1>
            <p className="mb-6 leading-relaxed">
              Managing online coursework can be overwhelming and time-consuming, but you don't have to face it alone. With StudyWello, you gain access to over 50+ top-rated, degreed professionals who are ready to guide you toward academic excellence. Our team specializes in delivering high-quality, plagiarism-free work that meets strict academic standards. Say goodbye to the stress of looming deadlines and tough assignments, and hello to expert assistance that ensures top results and peace of mind. We're here to handle your coursework with precision and care, so you can focus on what matters most.
            </p>
            <div className="flex justify-start">
              <Button text="Get Your Free Quote Now!" />
            </div>
          </div>
        </div>
      </section>

      {/* --------------- WHY CHOOSE US ---------------  */}
      <WhyChooseUsForHelpWithClass />

      {/* --------------- CTAV2 ---------------  */}
      <CtaOneV2
        mainHeading="Say goodbye to struggling for good grades—connect with our experts now "
        buttonText="Get Your Class Help Now"
      />

      {/* --------------- COMPARISON ---------------  */}
      <Comparison
        mainHeading="Why Should You Hire Us to Support Your Online Class?"
        subHeading="We can meet the standards of all universities and schools, ensuring that our assistance aligns perfectly with your academic requirements."
      />

      {/* --------------- PROOF ---------------  */}
      <section className="bg-white">
        <div className="max-w-5xl px-5 xl:px-0 mx-auto pt-20 pb-10">
          {/* --------------- HEADER TEXT ---------------  */}
          <h2 className="mb-3 font-bold text-2xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">
            We Helped Students Achieved A+ Grades
          </h2>
          {/* <h2 className="mb-3 font-bold text-2xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">
            Achieved A-Grades for Students!
          </h2> */}

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

      {/* --------------- CTA SECTION ---------------  */}
      <CtaOne text="Take my class" />

      {/* --------------- PROCESS WE FOLLOW ---------------  */}
      <ProcessForHelpWithClass />

      {/* --------------- SERVICES ---------------  */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto py-20">
          {/* --------------- HEADER TEXT ---------------  */}
          <h2 className="mb-3 font-bold text-3xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">
            Further Academic Services
          </h2>
          {/* <p className="w-[90%] sm:w-[80%] lg:w-[50%] mx-auto text-black text-center">
            In order to avail of our academic writing services, you have to
            follow the simplest procedure mentioned below
          </p> */}

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
                Online exams can be challenging due to time constraints and complexity. Connect with our law subject experts for dedicated guidance to confidently navigate your law exams and achieve top results.
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
                Our subject experts thoroughly research and craft your assignments, ensuring relevance, clarity, and originality. Expect grammatically correct, plagiarism-free solutions that meet high academic standards.
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
                If you find yourself overwhelmed by urgent assignments or extensive coursework during your online classes, StudyWello offers flexible, reliable homework support. We provide efficient assistance at reasonable prices, including
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

      {/* --------------- FAQ'S ---------------  */}
      <FaqClass />

      {/* --------------- TESTIMONIAL ---------------  */}
      <Testimonial />
    </>
  );
};

export default HelpWithClasses;
