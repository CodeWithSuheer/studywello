import Faq from "../home/Faq";
import Process from "../home/Process";
import LogoGrid from "../home/LogoGrid";
import Button from "../../components/Button";
import Testimonial from "../home/Testimonial";
import { LuMessagesSquare } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";
import Subject from "../../components/Subject";
import CtaOne from "../home/CtaOne";
import CtaTwo from "../home/CtaTwo";
import TrustSec from "../../components/TrustSec";
import "../home/Home.css";
import { Helmet } from "react-helmet";

const Exams = () => {
  const images = [
    {
      img: "../../../public/1.jpg",
    },
    {
      img: "../../../public/2.jpg",
    },
    {
      img: "../../../public/3.jpg",
    },
    {
      img: "../../../public/4.jpg",
    }
  ];

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Do my exam | Pay Someone To Do My Exam For Me</title>
      </Helmet>

      {/* --------------- HERO SECTION ---------------  */}
      <section className="text-white banner_backgroundImage mb-0 lg:mb-0 ">
        <div className="max-w-7xl mx-auto md:px-10 pt-28 pb-10 flex justify-center items-center min-h-[85vh]">
          <div className="flex flex-col sm:flex-row justify-center items-center">
            {/* CONTENT */}
            <div className="lg:flex-grow md:w-1/2 xl:pr-20 lg:pr-12 md:pr-16 flex flex-col md:items-start md:text-left items-start">
              <h2 className="mb-3 sm:mb-4 text-3xl font-semibold tracking-wide w-full lg:max-w-sm md:text-4xl">
                Hire Someone To Take My Exam For Me to Score High
              </h2>
              <p className="mb-3 sm:mb-4 text-md sm:text-md w-full sm:max-w-lg  font-normal">
                Focus on learning, not stressing. Get the grades you deserve
                without the hassle. Don't let test anxiety hold you back. Let
                Studywello help you achieve your academic goals.
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
              src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_72177.png?v=1712918873"
            />
          </div>

          <div className="lg:flex-grow px-5 md:px-5 md:w-1/2 md:pl-6 lg:pl-14 xl:pl-12 flex flex-col text-left">
            <h1 className="mb-5 font-bold max-w-md text-3xl md:text-4xl text-[#272727]">
              Conquer Your Online Exams with Confidence
            </h1>
            <p className="mb-6 leading-relaxed">
              Taking online tests can be stressful, but with Studywello's
              expert assistance, you can approach them with confidence. Our team
              of experienced test-takers will handle your exams with the utmost
              professionalism and discretion, ensuring you achieve the grades
              you deserve.We understand the challenges of online testing,
              including technical difficulties, time constraints, and the
              temptation to cheat. With Studywello, you can rest assured that
              your online tests are in good hands. Contact us today to learn
              more about our services and how we can help you achieve academic
              success.
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
          <h2 className="mb-3 font-bold pl-2 text-2xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">
            Top Reasons Why You Need Us To
          </h2>
          <h2 className="mb-3 font-bold pl-2 text-2xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">
            “Hire Someone To Take My Exam For Me”
          </h2>

          <div className="flex flex-wrap my-10 sm:my-12">
            <div className="w-full border-b md:w-1/2 md:border-r border-[#1A73E8] lg:w-1/2 px-4 py-5 sm:px-8 sm:py-8">
              <img
                className="w-12"
                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Mask_group_5.png?v=1713363364"
                alt=""
              />
              <h3 className="mt-2 text-xl">
                Feeling Time-Crunched in Your Online Program?
              </h3>
              <p className="mt-2 text-gray-700 text-sm leading-normal">
                Juggling work, family, and online coursework can be a real
                challenge. Many students find themselves struggling to carve out
                dedicated study time. At Studywello, we understand the
                pressures faced by busy learners. We offer a variety of
                resources and support services to help you succeed in your
                online program, including time management workshops and focus
                and productivity coaching.
              </p>
            </div>

            <div className="w-full border-b md:w-1/2 lg:w-1/2 lg:border-r-0 border-[#1A73E8] px-4 py-5 sm:px-8 sm:py-8">
              <img
                className="w-12"
                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/no-stopping_1_3.png?v=1713363363"
                alt=""
              />
              <h3 className="mt-2 text-xl">
                Don't Let Exam Anxiety Hold You Back
              </h3>
              <p className="mt-2 text-gray-700 text-sm leading-normal">
                Feeling unprepared or anxious before an online exam is a common
                experience. However, letting those anxieties take hold can
                hinder your performance. Studywello is here to help you
                approach exams with confidence. We offer personalized study
                plans, practice exams and quizzes, and test-taking skills
                workshops.
              </p>
            </div>

            <div className="w-full border-b md:w-1/2 md:border-r md:border-b-0 border-[#1A73E8] lg:w-1/2 lg:border-b-0 px-4 py-5 sm:px-8 sm:py-8">
              <img
                className="w-12"
                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/no-stopping_1_4.png?v=1713363364"
                alt=""
              />
              <h3 className="mt-2 text-xl">
                Feeling Unprepared for Your Next Exam?
              </h3>
              <p className="mt-2 text-gray-700 text-sm leading-normal">
                Exams can sneak up on you, especially in online programs. If you
                find yourself feeling behind or unprepared, don't panic!
                Studywello can help you get back on track. We offer a range of
                resources to help you maximize your understanding of the course
                material, including personalized study plans and targeted
                practice exercises.
              </p>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/2 px-4 py-5 sm:px-8 border-[#1A73E8] sm:py-8">
              <img
                className="w-12"
                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/no-stopping_1_5.png?v=1713363364"
                alt=""
              />
              <h3 className="mt-2 text-xl">
                Concerned About Your Online Exam Grades?
              </h3>
              <p className="mt-2 text-gray-700 text-sm leading-normal">
                Exams play a crucial role in your online program's success.
                Feeling anxious about your ability to perform well is
                understandable. Studywello can help you develop the skills and
                strategies you need to excel on exams. Our services include
                personalized study plans, practice tests, and test-taking skills
                workshops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --------------- CTA SECTION ---------------  */}
      <CtaOne text="Take my exam" />

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
        <div className="max-w-3xl mx-auto py-20">
          {/* --------------- HEADER TEXT ---------------  */}
          <h2 className="mb-3 font-bold text-3xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">
            Types Of Exam We Take For You
          </h2>

          {/* --------------- CONTENT ---------------  */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-8 sm:px-10 px-4">
            <div className="card_up_hover group cursor-pointer border overflow-hidden rounded-2xl shadow transition hover:shadow-lg my-1">
              <img
                alt=""
                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Rectangle_3943.png?v=1713362022"
                className="h-52 w-full object-cover"
              />

              {/* CARD - DATA */}
              <div className="bg-white p-4 sm:px-4 sm:py-4">
                <h2 className="text-xl text-blue-600 text-start font-semibold tracking-wide">
                  Proctored Exams
                </h2>
                <p className="text-sm my-1.5 w-[95%] md:w-[100%]">
                  We deliver proctored exam help through remote desktop exams
                  with confidentiality. We will coordinate with you via screen
                  sharing or picture sharing and provide you with answers.
                </p>
              </div>
            </div>

            <div className="card_up_hover group cursor-pointer border overflow-hidden rounded-2xl shadow transition hover:shadow-lg my-1">
              <img
                alt=""
                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Rectangle_3946.png?v=1713362021"
                className="h-52 w-full object-cover"
              />

              {/* CARD - DATA */}
              <div className="bg-white p-4 sm:px-4 sm:py-4">
                <h2 className="text-xl text-blue-600 text-start font-semibold tracking-wide">
                  Non-Proctored Exams
                </h2>
                <p className="text-sm my-1.5 w-[95%] md:w-[100%]">
                  In case it is a webcam lockdown browser exam, the tutor would
                  download the lockdown browser on their system and take your
                  non-proctored exam through your email on your behalf
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------- SECOND CTA SECTION ---------------  */}
      <CtaTwo text="Hire someone for my exam" />

      {/* --------------- SUBJECT DETAILS ---------------  */}
      <Subject />

      {/* --------------- FAQ'S ---------------  */}
      <Faq />

      {/* --------------- TESTIMONIAL ---------------  */}
      <Testimonial />
    </>
  );
};

export default Exams;
