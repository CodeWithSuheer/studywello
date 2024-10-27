import React from 'react'

const TrustSec = () => {
    return (
        <>
            <section className='w-full bg-blue-400 px-5 sm:px-3 py-8 mb-5'>
                <div className="max-w-5xl mx-auto grid sm:place-items-center grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
                    {/* BOX 1 */}
                    <div className="box flex items-center gap-2">
                        <span className='w-10'><img className='w-full p-1' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/100-percent_1.png?v=1713438051" alt="" /></span>
                        <span className='text-white font-medium text-lg xxl:text-xl'>100% confidential</span>
                    </div>
                    {/* BOX 2 */}
                    <div className="box flex items-center gap-2">
                        <span className='w-10'><img className='w-full p-1' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/100-percent_1_1.png?v=1713438051" alt="" /></span>
                        <span className='text-white font-medium text-lg xxl:text-xl'>No spam</span>
                    </div>
                    {/* BOX 3 */}
                    <div className="box flex items-center gap-2">
                        <span className='w-10'><img className='w-full p-1' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/100-percent_1_2.png?v=1713438051" alt="" /></span>
                        <span className='text-white font-medium text-lg xxl:text-xl text-nowrap'>8200+ Classes with A/B</span>
                    </div>
                    {/* BOX 4 */}
                    <div className="box flex items-center gap-2">
                        <span className='w-10'><img className='w-full p-1' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/100-percent_1_3.png?v=1713438051" alt="" /></span>
                        <span className='text-white font-medium text-lg xxl:text-xl'>9.8/10 feedback rating</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TrustSec
