import { Helmet } from "react-helmet";
import "../home/Home.css";
// 
import Process from "../home/Process";
import LogoGrid from "../home/LogoGrid";
import Button from "../../components/Button";
import Testimonial from "../home/Testimonial";
import Subject from "../../components/Subject";
import TrustSec from "../../components/TrustSec";
import Comparison from "../../components/Comparison";
import EmailFormExamsHelp from "../../components/EmailFormForExamsHelp";
import FaqExams from "../home/FaqExams";
import HelpWithAllType from "../../components/HelpWithAllType";
import CtaOneV2Exams from "../../components/CtaOneV2Exams";

// Image
import img from "./img1.jpg";
import EmailFormForHelpWithExams from "../../components/email-forms/EmailFormForHelpWithExams";


// exams
import examimg01 from '../../assets/sample-exam/img01.jpeg'
import examimg02 from '../../assets/sample-exam/img02.jpeg'
import examimg03 from '../../assets/sample-exam/img03.jpeg'
import examimg04 from '../../assets/sample-exam/img04.jpeg'

// GEDTest
import GEDTestimg01 from '../../assets/GEDTest/img01.jpeg'
import GEDTestimg02 from '../../assets/GEDTest/img02.jpeg'

const HelpWithExams = () => {
  const images = [
    {
      img: examimg01,
    },
    {
      img: examimg02,
    },
    {
      img: examimg03,
    },
    {
      img: examimg04,
    },
    {
      img: GEDTestimg01,
    },
    {
      img: GEDTestimg02,
    },
  ];

  const tick = (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.75 8.75l3.5 3.5l7-7.5" /></svg>
  )

  const studyWelloData = [
    "Professional Exam Helpers",
    "Total Confidentiality",
    "Affordable & Flexible",
    "24/7 Support",
    "Fast Turnaround",
  ]

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Exams Help</title>
      </Helmet>

      {/* --------------- HERO SECTION ---------------  */}
      <section className="text-white onlineClass_backgroundImage mb-0 lg:mb-0">
        <div className="max-w-7xl mx-auto md:px-10 pt-28 pb-10 flex justify-center items-center min-h-[100vh] relative z-10">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            {/* CONTENT */}
            <div className="px-4 sm:px-5 lg:flex-grow lg:w-1/2 xl:pr-20 lg:pr-12 md:pr-16 flex flex-col md:items-start md:text-left items-start">
              <h1 className="mb-3 font-semibold max-w-lg text-lg text-blue-200 tracking-wide">
                No More Exam Stress
              </h1>
              <h1 className="mb-5 font-bold max-w-lg text-3xl md:text-4xl text-white">
                Secure Top Grades with Expert's Online Exam Help
              </h1>


              {studyWelloData?.map((data, index) => (
                <div key={index} className="flex gap-x-2 sm:gap-x-3 justify-start items-center">
                  <span className="icon text-green-500">
                    {tick}
                  </span>
                  <p className='text-sm sm:text-lg font-normal'>{data}</p>
                </div>
              ))}

              <div className="mt-6 flex justify-start">
                <Button text="Claim 50% Student Discount Now" />
              </div>
            </div>

            {/* EMAIL FORM */}
            <div className="lg:max-w-lg lg:w-1/2 w-full px-2 mt-10 lg:mt-0">
              <EmailFormForHelpWithExams />
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
              className="object-cover object-center rounded-xl"
              alt="hero"
              src={img}
            />
          </div>

          <div className="lg:flex-grow px-5 md:px-5 md:w-1/2 md:pl-6 lg:pl-14 xl:pl-12 flex flex-col text-left">
            <h1 className="mb-3 font-semibold max-w-lg text-md text-blue-500 tracking-wide">
              ONLINE EXAM HELP
            </h1>
            <h1 className="mb-5 font-bold max-w-lg text-3xl md:text-4xl text-[#272727]">
              No More Exam Stress This Season - We're Here to Help!
            </h1>
            <p className="mb-6 leading-relaxed">
              Exams can be overwhelming, but you don't have to face them alone. With StudyWello, get expert guidance and support from professionals across various subjects, ensuring top results with ease. Reach out, relax, and let us provide you with tailored assistance with complete confidentiality and around-the-clock support. Plus, our student-friendly rates mean quality help that won't break the bank.
            </p>
            <div className="flex justify-start">
              <Button text="Click to Avail Discount" />
            </div>
          </div>
        </div>
      </section>

      {/* --------------- PROOF ---------------  */}
      <section className="bg-white">
        <div className="max-w-5xl px-5 xl:px-0 mx-auto pt-8 sm:pt-20 pb-10">
          {/* --------------- HEADER TEXT ---------------  */}
          <h2 className="mb-3 font-bold text-3xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">
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

          <div className="mt-10 flex justify-center items-center">
            <Button text="Book My Exam Help Now" />
          </div>
        </div>
      </section>

      {/* --------------- CTAV2 ---------------  */}
      <CtaOneV2Exams desc="Hiring experts to assist with your online Exam is a smart investment for achieving good grades." />

      {/* --------------- COMPARISON ---------------  */}
      <Comparison
        mainHeading="Why You Should Hire Us To Support Your Online Exams"
        text="Book My Exam Help Now"
      />

      {/* --------------- SUBJECT DETAILS ---------------  */}
      <Subject text="Book My Exam Help" />

      {/* --------------- HELP WITH ALL TYPE ---------------  */}
      <HelpWithAllType />

      {/* --------------- FAQ'S ---------------  */}
      <FaqExams />

      {/* --------------- TESTIMONIAL ---------------  */}
      <Testimonial />
    </>
  );
};

export default HelpWithExams;
