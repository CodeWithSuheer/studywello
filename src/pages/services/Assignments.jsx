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
import EmailFormForAssignment from "../../components/email-forms/EmailFormForAssignment";
import ProcessForAssignments from "../../components/ProcessForAssignments";
import Comparison from "../../components/Comparison";
import AssignmentServices from "../../components/AssignmentServices";
import Samples from "../../components/OurSample";

// sample images
import sample01 from '../../assets/assignment/sample01.jpeg';
import sample02 from '../../assets/assignment/sample02.jpeg';
import sample03 from '../../assets/assignment/sample03.jpeg';
import sample04 from '../../assets/assignment/sample04.jpeg';
import sample05 from '../../assets/assignment/sample05.jpeg';

const Assignments = () => {

  const images = [
    {
      img: sample01,
    },
    {
      img: sample02,
    },
    {
      img: sample03,
    },
    {
      img: sample04,
    },
    {
      img: sample05,
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
      <section className="text-white assignment_backgroundImage mb-0 lg:mb-0">
        <div className="max-w-7xl mx-auto md:px-10 pt-28 pb-10 flex justify-center items-center min-h-[100vh] relative z-10">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            {/* CONTENT */}
            <div className="lg:flex-grow md:w-1/2 xl:pr-20 lg:pr-12 md:pr-16 flex flex-col md:items-start md:text-left items-start">
              <h2 className="mb-3 sm:mb-4 text-3xl font-semibold tracking-wide w-full lg:max-w-lg md:text-4xl">
                Stressed About Assignments? Let Our Experts Lighten Your Load!
              </h2>
              <p className="mb-3 sm:mb-4 text-md sm:text-md w-full sm:max-w-lg  font-normal">
                Managing multiple assignments can feel overwhelming—tight deadlines, complex instructions, and high standards can all add up to stress. At StudyWello, we're here to help turn that stress into confidence. Our top-rated, degreed professionals provide personalized support to ensure every assignment meets your academic goals.
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
            {/* EMAIL FORM */}
            <div className="lg:max-w-lg lg:w-1/2 w-full px-2 mt-10 lg:mt-0">
              <EmailFormForAssignment />
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
              Choose Our Experienced Assignment Experts
            </h1>
            <p className="mb-3 leading-relaxed">
              At StudyWello, we know that quality writing makes all the difference. Our team of seasoned professionals excels in crafting well-researched, clearly written, and perfectly formatted assignments—always delivered on time. Trust our experts to elevate your grades and ease your academic workload.
            </p>
            <p className="mb-4 leading-relaxed">
              Ready to Get Started?
            </p>
            <div className="flex justify-start">
              <Button text="Order Now" />
            </div>
          </div>
        </div>
      </section>

      {/* --------------- WHY CHOOSE US ---------------  */}
      <AssignmentServices />

      <Samples />

      {/* --------------- CTA SECTION ---------------  */}
      <CtaOne text="Help Me With Assignment" />

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
      <ProcessForAssignments />

      {/* --------------- COMPARISON ---------------  */}
      <Comparison
        mainHeading="Why Should You Hire Us to Support Your Assignments & Homework?"
        subHeading="We can meet the standards of all universities and schools, ensuring that our assistance aligns perfectly with your academic requirements."
        buttonText="Help Me With Assignment"
      />

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
      <CtaTwo heading="Don't let tough assignments hold you back. Get expert help now and secure the grades you deserve!" text="Hire an Expert" />

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
      <Subject heading="Subjects We have Professionals For" />

      {/* --------------- FAQ'S ---------------  */}
      <Faq />

      {/* --------------- TESTIMONIAL ---------------  */}
      <Testimonial />
    </>
  );
};

export default Assignments;
