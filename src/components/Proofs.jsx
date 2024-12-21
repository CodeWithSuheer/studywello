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
          <div className="onlineClass">
            <h4 className="mt-12 text-[#272727] text-lg md:text-2xl text-start font-semibold">Online Class</h4>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
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
        </div>
      </section>
    </>
  );
};

export default Proofs;
