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

const HomePage = () => {
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
                  Access Academic Assistance Promptly, Exactly When You Need It.
                </h2>
                <p className="mb-3 sm:text-md md:text-md xl:text-lg font-normal">
                  Whether you seek assistance for a particular task or require
                  continuous support throughout the academic term, we're here to
                  meet your need
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

      {/* --------------- SERVICES ---------------  */}
      <Services />

      {/* --------------- CTA SECTION ---------------  */}
      <CtaOne text="Take my class" />

      <CtaOneV2 />

      {/* --------------- PROCESS WE FOLLOW ---------------  */}
      <Process />

      {/* --------------- COMMITMENTS ---------------  */}
      <Commitments />

      {/* ---------------SECOND CTA SECTION ---------------  */}
      <CtaTwo text="Do my class" />

      {/* ---------------FAQ'S ---------------  */}
      <Faq />

      {/* --------------- TESTIMONIAL ---------------  */}
      <Testimonial />
    </>
  );
};

export default HomePage;
