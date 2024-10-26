import Marquee from 'react-fast-marquee';

const LogoGrid = () => {
    const Institutions = [
        {
            img: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/image_4.png?v=1713358377",
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/image_5.png?v=1713358380",
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/image_8.png?v=1713358378",
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/image_9.png?v=1713358378",
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/image_10.png?v=1713358380",
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/image_7.png?v=1713358380",
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/image_6.png?v=1713358377",
        },
    ]

    return (
        <div className="py-8">
            <div className="max-w-6xl  mx-auto px-4 md:px-8">
                {/* --------------- HEADER TEXT ---------------  */}
                <h3 className="mb-2 font-medium text-md text-[#1A73E8] text-center">We Fulfil the Requirement of</h3>
                <h2 className="mb-3 font-bold text-3xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">All Educational Institutions</h2>

                {/* --------------- LOGO GRID ---------------  */}
                <div className="mt-12">
                    <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
                        <Marquee
                            direction='left'
                            gradient
                            gradientWidth={150}
                            className='testimonial_marquee mt-5'>

                            {Institutions?.map((data, index) => (
                                <li key={index}>
                                    <img className="w-[6.5rem] mx-6 sm:mx-10" src={data.img} alt="" />
                                </li>
                            ))}
                        </Marquee>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LogoGrid
