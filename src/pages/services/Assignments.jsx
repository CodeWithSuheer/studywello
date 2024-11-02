import React from "react";
import Faq from "../home/Faq";
import Process from "../home/Process";
import LogoGrid from "../home/LogoGrid";
import Button from "../../components/Button";
import Testimonial from "../home/Testimonial";
import { LuMessagesSquare } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";
import TrustSec from "../../components/TrustSec";
import Subject from "../../components/Subject";
import CtaOne from "../home/CtaOne";
import CtaTwo from "../home/CtaTwo";
import "../home/Home.css";
import "./service.css";
import { Helmet } from "react-helmet";

const Assignments = () => {
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

  const assignmentServiceData = [
    {
      name: "Lab Assignments",
      image:
        "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/news_1.png?v=1713362546",
    },
    {
      name: "Certification Courses",
      image:
        "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/news_2.png?v=1713362546",
    },
    {
      name: "Online discussions",
      image:
        "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/news_3.png?v=1713362546",
    },
    {
      name: "Take-Home Exams",
      image:
        "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/news_4.png?v=1713362546",
    },
    {
      name: "Case Studies",
      image:
        "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/news_5.png?v=1713362546",
    },
    {
      name: "Internship Courses",
      image:
        "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/news_6.png?v=1713362546",
    },
  ];

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Write My Assignment | Help Me to Do my Assignment</title>
      </Helmet>

      {/* --------------- HERO SECTION ---------------  */}
      <section className="text-white banner_backgroundImage mb-0 lg:mb-0 ">
        <div className="max-w-7xl mx-auto md:px-10 pt-28 pb-10 flex justify-center items-center min-h-[85vh]">
          <div className="flex flex-col sm:flex-row justify-center items-center">
            {/* CONTENT */}
            <div className="lg:flex-grow md:w-1/2 xl:pr-20 lg:pr-12 md:pr-16 flex flex-col md:items-start md:text-left items-start">
              <h2 className="mb-3 sm:mb-4 text-3xl font-semibold tracking-wide w-full lg:max-w-md md:text-4xl">
                Do My Assignment - Professional Assignment Help
              </h2>
              <p className="mb-3 sm:mb-4 text-md sm:text-md w-full sm:max-w-lg  font-normal">
                Ditch the stress and frustration of assignments. Get the expert
                assistance you need to excel in your academic journey.
              </p>

              <div className="button mt-4">
                <button
                  onClick={() => {
                    Tawk_API.toggle();
                  }}
                  className="bg-white text-[#1A73E8] font-medium rounded-3xl px-5 py-2.5 flex items-center gap-2"
                >
                  <LuMessagesSquare /> Lets Chats <FaArrowRightLong size={14} />
                </button>
              </div>
            </div>
            {/* IMAGE */}
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-10 md:mt-0">
              <img
                className="object-cover object-center rounded px-3 md:px-10"
                alt="hero"
                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Ellipse_64_1.png?v=1716290653"
              />
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
              className="object-cover object-center rounded"
              alt="hero"
              src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_72179.png?v=1712918885"
            />
          </div>

          <div className="lg:flex-grow px-5 md:px-5 md:w-1/2 md:pl-6 lg:pl-14 xl:pl-12 flex flex-col text-left">
            <h1 className="mb-5 font-bold max-w-md text-3xl md:text-4xl text-[#272727]">
              Choose Our Experienced Assignment Writers “Pay Someone To DMy
              Assignment”
            </h1>
            <p className="mb-6 leading-relaxed">
              At Studywello, we understand that choosing the right assignment
              writer is crucial for your academic success. That's why we have
              assembled a team of highly qualified and experienced writers who
              are dedicated to providing you with exceptional service. Our
              writers are skilled in crafting clear, concise, and well-organized
              assignments that meet the highest academic standards. They have a
              strong command of grammar, punctuation, and style.
            </p>
            <div className="flex justify-start">
              <Button />
            </div>
          </div>
        </div>
      </section>

      {/* --------------- WHY CHOOSE US ---------------  */}
      <section className="bg-[#F4F8FE]">
        <div className="max-w-5xl mx-auto py-14">
          {/* --------------- HEADER TEXT ---------------  */}
          <h2 className="mb-3 font-bold pl-2 text-3xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">
            Services We Offer for Free
          </h2>
          <p className="w-[90%] sm:w-[80%] lg:w-[50%] mx-auto text-black text-center">
            In the “Do My Assignment” package, you get many free features from
            us. These features include:
          </p>

          <div className="flex flex-wrap my-10 sm:my-12">
            <div className="w-full border-b md:w-1/2 md:border-r border-[#1A73E8] lg:w-1/2 px-4 py-5 sm:px-8 sm:py-8">
              <img
                className="w-12"
                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Mask_group.png?v=1713363228"
                alt=""
              />
              <h3 className="mt-2 text-xl">
                Conquer Exam Anxiety and Boost Your Confidence:
              </h3>
              <p className="mt-2 text-gray-700 text-sm leading-normal">
                Let our experienced test-takers handle the pressure of your
                exams, allowing you to approach them with a clear mind and
                enhanced focus. Our experts are trained to handle exam stress
                effectively, ensuring you perform at your best and achieve your
                desired score.
              </p>
            </div>

            <div className="w-full border-b md:w-1/2 lg:w-1/2 lg:border-r-0 border-[#1A73E8] px-4 py-5 sm:px-8 sm:py-8">
              <img
                className="w-12"
                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/no-stopping_1.png?v=1713363228"
                alt=""
              />
              <h3 className="mt-2 text-xl">
                Achieve Top Scores and Reach Your Academic Goals
              </h3>
              <p className="mt-2 text-gray-700 text-sm leading-normal">
                Our team consists of highly qualified individuals with a proven
                track record of success in various academic fields. Our
                test-takers possess a deep understanding of the exam format,
                content, and scoring criteria, ensuring they can tackle any
                question with confidence.
              </p>
            </div>

            <div className="w-full border-b md:w-1/2 md:border-r md:border-b-0 border-[#1A73E8] lg:w-1/2 lg:border-b-0 px-4 py-5 sm:px-8 sm:py-8">
              <img
                className="w-12"
                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/no-stopping_1_1.png?v=1713363228"
                alt=""
              />
              <h3 className="mt-2 text-xl">Save Valuable Time and Effort:</h3>
              <p className="mt-2 text-gray-700 text-sm leading-normal">
                Free up your precious time to focus on other important aspects
                of your academic journey, such as studying for other exams,
                completing assignments, or pursuing extracurricular activities.
                Our experts will handle the studying and preparation for you,
                allowing you to relax and focus on other priorities.
              </p>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/2 px-4 py-5 sm:px-8 border-[#1A73E8] sm:py-8">
              <img
                className="w-12"
                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/no-stopping_1_2.png?v=1713363228"
                alt=""
              />
              <h3 className="mt-2 text-xl">
                Maintain Confidentiality and Discretion:
              </h3>
              <p className="mt-2 text-gray-700 text-sm leading-normal">
                We understand the importance of confidentiality. Your personal
                information and exam details will be kept strictly confidential.
                Our team adheres to the highest ethical standards, ensuring your
                exam experience is handled with the utmost professionalism and
                discretion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --------------- CTA SECTION ---------------  */}
      <CtaOne text="Write my assignment" />

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
            Meet Our Prestigious Subject Experts
          </h2>
          <p className="w-[90%] sm:w-[80%] lg:w-[80%] mx-auto text-black text-start sm:text-center">
            Are you ready to meet our subject specialists? Introducing our
            highly skilled and knowledgeable team of subject matter experts,
            equipped to provide unmatched insights and quick academic solutions.
          </p>

          {/* --------------- TUTORS ---------------  */}
          <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-8 sm:px-10 px-4 py-16">
            {/* CARD 1 */}
            <div className="mb-0 sm:mb-10 md:mb-10 testimonial_card relative card text-center mt-14 sm:mt-0 pt-12 pb-5 px-4 rounded-3xl">
              <div className="absolute -top-12 flex justify-center items-center h-20  w-20  inset-0 mx-auto">
                <img
                  className="mid_img h-20  w-20  object-cover"
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Ellipse_11.png?v=1713362272"
                  alt=""
                />
              </div>
              <h2 className="mb-2 mt-0 text-lg font-semibold">David Carlton</h2>
              <p className="my-2 text-gray-700 text-md font-normal">
                MS in Computer Science
              </p>

              <div className="grid w-full place-items-center overflow-x-scroll rounded-lg p-0 lg:overflow-visible">
                <div className="inline-flex items-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mx-0.5 w-5 h-5 text-[#FC9802] cursor-pointer"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mx-0.5 w-5 h-5 text-[#FC9802] cursor-pointer"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mx-0.5 w-5 h-5 text-[#FC9802] cursor-pointer"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mx-0.5 w-5 h-5 text-[#FC9802] cursor-pointer"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mx-0.5 w-5 h-5 text-[#FC9802] cursor-pointer"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>

              <h3 className="my-2.5">
                Expertise in Computer Science assignements with 12 years
                experience.
              </h3>

              <button
                onClick={() => {
                  Tawk_API.toggle();
                }}
                className="mt-3 bg-blue-600 rounded-3xl px-6 py-2.5 text-white"
              >
                Hire Me
              </button>
            </div>

            {/* CARD 2 */}
            <div className="mb-0 sm:mb-10 md:mb-10 testimonial_card relative card text-center mt-14 sm:mt-0 pt-12 pb-5 px-4 rounded-3xl">
              <div className="absolute -top-12 flex justify-center items-center h-20  w-20  inset-0 mx-auto">
                <img
                  className="mid_img h-20  w-20  object-cover"
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Ellipse_11-3.png?v=1713362273"
                  alt=""
                />
              </div>
              <h2 className="mb-2 mt-0 text-lg font-semibold">David Carlton</h2>
              <p className="my-2 text-gray-700 text-md font-normal">
                MS in Applied Mathematics
              </p>

              <div className="grid w-full place-items-center overflow-x-scroll rounded-lg p-0 lg:overflow-visible">
                <div className="inline-flex items-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mx-0.5 w-5 h-5 text-[#FC9802] cursor-pointer"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mx-0.5 w-5 h-5 text-[#FC9802] cursor-pointer"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mx-0.5 w-5 h-5 text-[#FC9802] cursor-pointer"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mx-0.5 w-5 h-5 text-[#FC9802] cursor-pointer"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mx-0.5 w-5 h-5 text-[#FC9802] cursor-pointer"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>

              <h3 className="my-2.5">
                Expertise in mathematics assignements with 10 years experience.
              </h3>

              <button
                onClick={() => {
                  Tawk_API.toggle();
                }}
                className="mt-3 bg-blue-600 rounded-3xl px-6 py-2.5 text-white"
              >
                Hire Me
              </button>
            </div>

            {/* CARD 3 */}
            <div className="mb-0 sm:mb-10 md:mb-10 testimonial_card relative card text-center mt-14 sm:mt-0 pt-12 pb-5 px-4 rounded-3xl">
              <div className="absolute -top-12 flex justify-center items-center h-20  w-20  inset-0 mx-auto">
                <img
                  className="mid_img h-20  w-20  object-cover"
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Ellipse_11-1.png?v=1713362272"
                  alt=""
                />
              </div>
              <h2 className="mb-2 mt-0 text-lg font-semibold">David Carlton</h2>
              <p className="my-2 text-gray-700 text-md font-normal">
                MS in Applied Mathematics
              </p>

              <div className="grid w-full place-items-center overflow-x-scroll rounded-lg p-0 lg:overflow-visible">
                <div className="inline-flex items-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mx-0.5 w-5 h-5 text-[#FC9802] cursor-pointer"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mx-0.5 w-5 h-5 text-[#FC9802] cursor-pointer"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mx-0.5 w-5 h-5 text-[#FC9802] cursor-pointer"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mx-0.5 w-5 h-5 text-[#FC9802] cursor-pointer"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mx-0.5 w-5 h-5 text-[#FC9802] cursor-pointer"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>

              <h3 className="my-2.5">
                Expertise in mathematics assignements with 10 years experience.
              </h3>

              <button
                onClick={() => {
                  Tawk_API.toggle();
                }}
                className="mt-3 bg-blue-600 rounded-3xl px-6 py-2.5 text-white"
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --------------- SECOND CTA SECTION ---------------  */}
      <CtaTwo text="Do my assignment" />

      {/* --------------- ASSIGNMENT SERVICE ---------------  */}
      <section className="bg-[#F4F8FE]">
        <div className="max-w-5xl mx-auto py-20 px-6 lg:px-0">
          {/* --------------- HEADER TEXT ---------------  */}
          <h2 className="mb-3 font-bold text-3xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">
            Assignment Services
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 place-items-center lg:gap-6">
            {assignmentServiceData.map((data, index) => (
              <div
                key={index}
                className="min-w-72 flex items-center text-black bg-white rounded-[2rem] shadow cursor-pointer"
              >
                <span className="bg-blue-500 h-full w-16 mr-2 flex justify-center items-center rounded-full">
                  <img className="p-4" src={data.image} alt="" />
                </span>
                <span className="mx-3 font-medium text-md">{data.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------- SUBJECT DETAILS ---------------  */}
      <Subject />

      {/* --------------- FAQ'S ---------------  */}
      <Faq />

      {/* --------------- TESTIMONIAL ---------------  */}
      <Testimonial />
    </>
  );
};

export default Assignments;
