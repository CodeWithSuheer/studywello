// assignment
import assignmentimg01 from '../assets/sample-assignment/img01.jpeg'
import assignmentimg02 from '../assets/sample-assignment/img02.jpeg'
import assignmentimg03 from '../assets/sample-assignment/img03.jpeg'
import assignmentimg04 from '../assets/sample-assignment/img04.jpeg'
import assignmentimg05 from '../assets/sample-assignment/img05.jpeg'
import assignmentimg06 from '../assets/sample-assignment/img06.jpeg'

// classes
import classesimg01 from '../assets/samples-classes/img01.jpeg'
import classesimg02 from '../assets/samples-classes/img02.jpeg'
import classesimg03 from '../assets/samples-classes/img03.jpeg'
import classesimg04 from '../assets/samples-classes/img04.jpeg'
import classesimg05 from '../assets/samples-classes/img05.jpeg'
import classesimg06 from '../assets/samples-classes/img06.jpeg'
import classesimg07 from '../assets/samples-classes/img07.jpeg'
import classesimg08 from '../assets/samples-classes/img08.jpeg'
import classesimg10 from '../assets/samples-classes/img10.jpeg'

// GEDTest
import GEDTestimg01 from '../assets/GEDTest/img01.jpeg'
import GEDTestimg02 from '../assets/GEDTest/img02.jpeg'

// exams
import examimg01 from '../assets/sample-exam/img01.jpeg'
import examimg02 from '../assets/sample-exam/img02.jpeg'
import examimg03 from '../assets/sample-exam/img03.jpeg'
import examimg04 from '../assets/sample-exam/img04.jpeg'


const Proofs = () => {

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
    {
      img: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/ss5.png?v=1713880339",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/ss6.png?v=1713880337",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/ss7.png?v=1713880331",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/WhatsApp_Image_2024-04-23_at_11.49.26_PM.jpg?v=1713898212",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/WhatsApp_Image_2024-04-23_at_11.47.50_PM.jpg?v=1713898212",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/WhatsApp_Image_2024-04-23_at_11.50.24_PM.jpg?v=1713898307",
    },
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

  const assignment = [
    {
      img: assignmentimg01,
    },
    {
      img: assignmentimg02,
    },
    {
      img: assignmentimg03,
    },
    {
      img: assignmentimg04,
    },
    {
      img: assignmentimg05,
    },
    {
      img: assignmentimg06,
    },
  ]

  const exams = [
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
  ]

  const GEDTest = [
    {
      img: GEDTestimg01,
    },
    {
      img: GEDTestimg02,
    },
  ]


  const classes = [
    {
      img: classesimg01,
    },
    {
      img: classesimg02,
    },
    {
      img: classesimg03,
    },
    {
      img: classesimg04,
    },
    {
      img: classesimg05,
    },
    {
      img: classesimg06,
    },
    {
      img: classesimg07,
    },
    {
      img: classesimg08,
    },
    {
      img: classesimg10,
    },
  ]

  return (
    <>
      <section className="bg-white">
        <div className="max-w-5xl px-5 sm:px-0 mx-auto pt-20 pb-10">
          {/* --------------- HEADER TEXT ---------------  */}
          <h2 className="mb-3 font-bold text-2xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">
            Proof of Our Excellence:
          </h2>
          <h2 className="mb-3 font-bold text-2xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">
            Achieved A-Grades for Students!
          </h2>

          {/* --------------- CONTENT ---------------  */}
          {/* assignment */}
          <div className="assignment">
            <h4 className="mt-12 text-[#272727] text-lg md:text-2xl text-start font-semibold">Assignment</h4>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
              {assignment.map((data, index) => (
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

          {/* exams */}
          <div className="exams">
            <h4 className="mt-12 text-[#272727] text-lg md:text-2xl text-start font-semibold">Exams</h4>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
              {exams.map((data, index) => (
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

          {/* Class */}
          <div className="">
            <h4 className="mt-12 text-[#272727] text-lg md:text-2xl text-start font-semibold">Online Class</h4>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
              {classes.map((data, index) => (
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

          {/* GEDTest */}
          <div className="GEDTest">
            <h4 className="mt-12 text-[#272727] text-lg md:text-2xl text-start font-semibold">GED Test</h4>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
              {GEDTest.map((data, index) => (
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
        </div>
      </section>
    </>
  );
};

export default Proofs;
