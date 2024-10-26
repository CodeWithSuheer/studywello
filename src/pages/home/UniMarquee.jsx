import React from 'react'
import Marquee from 'react-fast-marquee';

const data = [
    {
        img: 'https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Rectangle_1144_3.png?v=1711998172'
    },
    {
        img: 'https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Rectangle_1144_3.png?v=1711998172'
    },
    {
        img: 'https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Rectangle_1144_3.png?v=1711998172'
    },
    {
        img: 'https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Rectangle_1144_3.png?v=1711998172'
    },
    {
        img: 'https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Rectangle_1144_3.png?v=1711998172'
    },
    {
        img: 'https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Rectangle_1144_3.png?v=1711998172'
    },
];

const UniMarquee = () => {
    return (
        <>
            <section className='max-w-6xl mx-auto py-5 sm:py-14 px-0'>
                <Marquee
                    direction='left'
                    gradient
                    gradientWidth={100}
                    className='testimonial_marquee mt-10'>
                    {data.map((data, i) => (
                        <div className='group mx-10' key={i}>
                            <img src={data.img} alt="" className='h-28' />
                        </div>
                    ))}
                </Marquee>
            </section>
        </>
    )
}

export default UniMarquee