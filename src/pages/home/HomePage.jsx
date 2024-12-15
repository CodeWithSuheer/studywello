import Services from "./Services";
import LogoGrid from "./LogoGrid";
import ChooseFrom from "./ChooseFrom";
import Commitments from "./Commitments";
import Button from "../../components/Button";
import Testimonial from "./Testimonial";
import Process from "./Process";
import Faq from "./Faq";
import CtaTwo from "./CtaTwo";
import CtaOne from "./CtaOne";
import "./Home.css";
import { Helmet } from "react-helmet";
import CtaOneV2 from "../../components/CtaOneV2";
import PhoneNumberForm from "../../components/PhoneNumberForm";
import Comparison from "../../components/Comparison";
import HomeServices from "./HomeServices";
import HomeProcess from "./HomeProcess";
import Subject from "../../components/Subject";
import FaqHome from "./FaqHome";
import HomeAssignmentServices from "../../components/HomeServices";
import OpeningModal from "../../components/modals/popupModal";
import { useState } from "react";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      <section className="gradient">
        <div className="max-w-full pt-28 pb-20 lg:pt-24 xl:pt-16 lg:pb-10 mx-auto">
          <div className="items-center lg:flex lg:min-h-[90vh]">
            <div className="pt-0 md:pt-2 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-2">
              <div className="content px-5 pt-0 pb-8 sm:pt-14 md:pb-12 sm:px-4 md:px-20 lg:pl-14 xl:pl-16 xl:pr-0">
                <h2 className="mainHeading mb-5">
                  Your Trusted Academic Partner for Exams, Assignments & Online Classes
                </h2>
                <p className="mb-3 sm:text-md md:text-md xl:text-lg font-normal">
                  Overwhelmed by coursework? Looking to excel in complex subjects? StudyWello connects you with seasoned academic professionals who provide personalized guidance, helping you learn more efficiently, gain confidence, and achieve better results.
                </p>

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

              <div className="content pt-0 sm:pt-14 lg:pt-8">
                <img
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_72166_f8ee09d3-a74c-4a61-886e-610b0b8adb4a.png?v=1713266395"
                  alt=""
                />
              </div>
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
      <CtaOneV2 />

      <Comparison
        mainHeading="Why Should You Hire Us to Support Your Online Class, Assignments & Exams?"
        subHeading="We can meet the standards of all universities and schools, ensuring that our assistance aligns perfectly with your academic requirements."
      />

      <CtaOne text="Take my class" />

      {/* --------------- PROCESS WE FOLLOW ---------------  */}
      <HomeProcess />

      <Subject heading="Subjects We have Professionals For" />

      {/* --------------- COMMITMENTS ---------------  */}
      <Commitments />

      {/* ---------------SECOND CTA SECTION ---------------  */}
      <CtaTwo text="Do my class" />

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
