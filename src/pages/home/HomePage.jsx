import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

import "./Home.css";

// Local components
import Button from "../../components/Button";
import CtaOneV2 from "../../components/CtaOneV2";
import Comparison from "../../components/Comparison";
import Subject from "../../components/Subject";
import HomeAssignmentServices from "../../components/HomeServices";
import OpeningModal from "../../components/modals/popupModal";
import EmailFormForHome from "../../components/email-forms/EmailFormForHome";

import LogoGrid from "./LogoGrid";
import ChooseFrom from "./ChooseFrom";
import Commitments from "./Commitments";
import Testimonial from "./Testimonial";
import CtaTwo from "./CtaTwo";
import CtaOne from "./CtaOne";
import HomeServices from "./HomeServices";
import HomeProcess from "./HomeProcess";
import FaqHome from "./FaqHome";


const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const tick = (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.75 8.75l3.5 3.5l7-7.5" /></svg>
  )

  const studyWelloData = [
    "50+ Verified Subject Specialists",
    "98% A/B Grade Success Rate",
    "24/7 Dedicated Assistance",
    "Secure & Confidential Support.",
  ]

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Study Wello: Academic Writing Services | Online Help with Money Back
          Guarantee
        </title>
      </Helmet>

      {/* --------------- HERO SECTION ---------------  */}
      <section className="text-white onlineClass_backgroundImage mb-0 lg:mb-0">
        <div className="max-w-7xl mx-auto md:px-10 pt-28 pb-10 flex justify-center items-center min-h-[95vh] relative z-10">
          <div className="flex flex-col lg:flex-row justify-center items-center">

            {/* CONTENT */}
            <div className="px-4 sm:px-5 lg:flex-grow lg:w-1/2 xl:pr-20 lg:pr-12 md:pr-16 flex flex-col md:items-start md:text-left items-start">
              <h2 className="mainHeading mb-5">
                Your Trusted Academic Partner for Exams, Assignments & Online Classes
              </h2>
              {/* <p className="mb-3 sm:text-md md:text-md xl:text-lg font-normal">
                Overwhelmed by coursework? Looking to excel in complex subjects? StudyWello connects you with seasoned academic professionals who provide personalized guidance, helping you learn more efficiently, gain confidence, and achieve better results.
              </p> */}

              {/* <button onClick={() => setIsOpen(true)}>
                  Open Modal
                </button> */}

              {studyWelloData?.map((data, index) => (
                <div key={index} className="flex gap-x-2 sm:gap-x-3 justify-start items-center">
                  <span className="icon text-green-500">
                    {tick}
                  </span>
                  <p className='text-sm sm:text-lg font-normal'>{data}</p>
                </div>
              ))}

              <div className="mt-6 flex justify-start">
                <Button text="Get a Free Quote Now " />
              </div>
            </div>


            {/* <div className="content pt-0 sm:pt-14 lg:pt-8">
                <img
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_72166_f8ee09d3-a74c-4a61-886e-610b0b8adb4a.png?v=1713266395"
                  alt=""
                />
              </div> */}

            {/* EMAIL FORM */}
            <div className="lg:max-w-lg lg:w-1/2 w-full px-2 mt-10 lg:mt-0">
              <EmailFormForHome />
            </div>
          </div>
        </div>
      </section>

      {/* --------------- TRUST SECTION ---------------  */}
      <section className="w-full bg-[#1A73E8] px-5 sm:px-3 py-8 mb-5">
        <div className="max-w-5xl mx-auto grid sm:place-items-center grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {/* BOX 1 */}
          <div className="box flex items-center gap-2">
            <span className="w-10">
              <img
                className="w-full p-1"
                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/100-percent_1.png?v=1713438051"
                alt=""
              />
            </span>
            <span className="text-white font-medium text-lg xxl:text-xl">
              100% confidential
            </span>
          </div>
          {/* BOX 2 */}
          <div className="box flex items-center gap-2">
            <span className="w-10">
              <img
                className="w-full p-1"
                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/100-percent_1_1.png?v=1713438051"
                alt=""
              />
            </span>
            <span className="text-white font-medium text-lg xxl:text-xl">
              No spam
            </span>
          </div>
          {/* BOX 3 */}
          <div className="box flex items-center gap-2">
            <span className="w-10">
              <img
                className="w-full p-1"
                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/100-percent_1_2.png?v=1713438051"
                alt=""
              />
            </span>
            <span className="text-white font-medium text-lg xxl:text-xl">
              Plagiarism Free Work
            </span>
          </div>
          {/* BOX 4 */}
          <div className="box flex items-center gap-2">
            <span className="w-10">
              <img
                className="w-full p-1"
                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/100-percent_1_3.png?v=1713438051"
                alt=""
              />
            </span>
            <span className="text-white font-medium text-lg xxl:text-xl">
              Money Back Guarantee
            </span>
          </div>
        </div>
      </section>

      {/* --------------- LOGO GRID ---------------  */}
      <LogoGrid />

      {/* --------------- CHOOSE FROM ---------------  */}
      <ChooseFrom />

      {/* --------------- WHY CHOOSE US ---------------  */}
      <HomeAssignmentServices />

      {/* --------------- SERVICES ---------------  */}
      <HomeServices />

      {/* --------------- CTA SECTION ---------------  */}
      <CtaOneV2
        mainHeading="Eliminate Grade Stress - Invest in Expert Academic Support Today"
        subHeading="Partner with StudyWello achieve top grades with professional guidance. A small investment for significant academic success."
        buttonText="Get Expert Support Now"
      />

      <Comparison
        mainHeading="Why Should You Hire Us to Support Your Online Class, Assignments & Exams?"
        subHeading="We can meet the standards of all universities and schools, ensuring that our assistance aligns perfectly with your academic requirements."
        buttonText="Get Expert Support Now"
      />


      {/* --------------- PROCESS WE FOLLOW ---------------  */}
      <HomeProcess />

      <CtaOne text="Get Expert Support Now" />

      <Subject heading="Subjects We have Professionals For" />

      {/* --------------- COMMITMENTS ---------------  */}
      <Commitments />

      {/* ---------------SECOND CTA SECTION ---------------  */}
      <CtaTwo text="Get Expert Support Now" />

      {/* ---------------FAQ'S ---------------  */}
      <FaqHome />

      {/* --------------- TESTIMONIAL ---------------  */}
      <Testimonial />


      {/* Upload Modal */}
      <OpeningModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default HomePage;
