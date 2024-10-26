

const Commitments = () => {
    return (
        <>
            <section className='bg-white'>
                <div className="max-w-7xl mx-auto py-20">
                    {/* --------------- HEADER TEXT ---------------  */}
                    <h2 className="mb-3 font-bold text-3xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">Our Commitments</h2>
                    <p className='w-[90%] sm:w-[80%] lg:w-[50%] mx-auto text-black text-center'>Our team of skilled online assignment helpers and subject experts offer a variety of services to ensure your academic success.</p>


                    {/* --------------- CONTENT ---------------  */}
                    <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-4 lg:gap-5 sm:px-8 px-4">

                        {/* CARD 1 */}
                        <div className="service_card box_shadow px-5 py-7 rounded-2xl bg-white">
                            <img className='mb-4 size-10' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/no-stopping_1_4.png?v=1713363364" alt="" />
                            <h3 className="mb-2  font-semibold text-md text-black group-hover:text-white">Delivering Strategic Solutions</h3>
                            <p className=" text-sm leading-6 font-normal text-black group-hover:text-white">Discover effective solutions tailored to assist you in successfully completing your online tasks, prioritizing timely completion to meet your deadlines with precision.</p>
                        </div>
                        {/* CARD 2 */}
                        <div className="service_card box_shadow px-5 py-7 rounded-2xl bg-white">
                            <img className='mb-4 size-10' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/image_11.png?v=1713359194" alt="" />
                            <h3 className="mb-2 font-semibold text-md text-black group-hover:text-white">Experienced Subject Specialists</h3>
                            <p className=" text-sm leading-6 font-normal text-black group-hover:text-white">The experts are recruited after a strict screening process. So, you can be confident that your examination paper is in safe hands.</p>
                        </div>
                        {/* CARD 3 */}
                        <div className="service_card box_shadow px-5 py-7 rounded-2xl bg-white">
                            <img className='mb-4 size-10' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/image_11_1.png?v=1713359195" alt="" />
                            <h3 className="mb-2  font-semibold text-md text-black group-hover:text-white">24/7 Assistance</h3>
                            <p className=" text-sm leading-6 font-normal text-black group-hover:text-white">We are available in the mid of the night or early as well. We will respond to your needs and ensure that you get your examinations done with the best scores</p>
                        </div>
                        {/* CARD 4 */}
                        <div className="service_card box_shadow px-5 py-7 rounded-2xl bg-white">
                            <img className='mb-3 mt-1 size-10' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/image_11_2.png?v=1713359194" alt="" />
                            <h3 className="mb-2  font-semibold text-md text-black group-hover:text-white">Non-Plagiarized Content</h3>
                            <p className=" text-sm leading-6 font-normal text-black group-hover:text-white">We guarantee that all our content is plagiarism-free, and our team conducts thorough research on every topic to ensure uniqueness.</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Commitments
