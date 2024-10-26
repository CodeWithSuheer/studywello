
const PrivacyPolicy = () => {
    return (
        <>
            <section className="bg-[#ebecf5]">
                <div className="max-w-5xl px-4 sm:px-6 pt-28 pb-12 mx-auto min-h-screen">
                    <h2 className='poppin text-3xl lg:text-4xl font-bold tracking-wide'>Privacy Policy - Study Wello</h2>

                    <p className="mb-4 mt-3">Studywello is committed to protecting the privacy of our users. This Privacy Policy describes how we collect, use, and disclose information we obtain from users of our website and services.</p>


                    {/* FIRST DETAILS */}
                    <h2 className="mt-6 text-2xl font-bold mb-2">Information We Collect</h2>
                    <p className="mb-4">We collect the following information from our users:
                    </p>

                    <ul className="list-disc list-inside mb-4">
                        <li className='my-3'><span className='font-semibold'>Personal Information:</span> <br />
                            This includes information that identifies you personally, such as your name, email address, phone number, and address.
                        </li>
                        <li className='my-3'><span className='font-semibold'>Non-Personal Information:</span> <br />
                            This includes information that does not identify you personally, such as your browser type, operating system, IP address, and the pages you visit on our website.
                        </li>
                        <li className='my-3'><span className='font-semibold'>Usage Data:</span> <br />
                            This includes information about how you use our website and services, such as the date and time of your visit, the pages you view, and the features you use.
                        </li>

                    </ul>


                    {/* SECOND DETAILS */}
                    <h2 className="mt-6 text-2xl font-bold mb-2">How do we use your information?</h2>
                    <p className="mb-4">We use the information we collect to:</p>

                    <ul className="list-disc list-inside mb-4">
                        <li>Provide, operate, and improve our website and services.</li>
                        <li>Send you marketing and promotional communications.</li>
                        <li>Respond to your inquiries and requests.</li>
                        <li>Analyze how our website and services are used.</li>
                        <li>Comply with applicable laws and regulations</li>
                        <li>Sharing Your Information</li>

                        <p className="mt-5">We may share your information with third-party service providers who help us operate our website and services. These service providers are contractually obligated to protect your information and use it only for the purposes we specify.

                            We may also disclose your information if we are required to do so by law or if we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.
                        </p>
                    </ul>



                    <h2 className="mt-6 text-2xl font-bold mb-2">Your Choices</h2>
                    <p className="mb-4">You can control the information we collect and use in the following ways:
                        You can opt out of receiving marketing and promotional communications from us by clicking on the "unsubscribe" link in any email we send you.
                        You can delete your account at any time by contacting us.
                    </p>


                    <h2 className="mt-6 text-2xl font-bold mb-2">Data Security</h2>
                    <p className="mb-4">We take reasonable steps to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no website or online service is completely secure, and we cannot guarantee the security of your information.</p>

                    <h2 className="mt-6 text-2xl font-bold mb-2">Children's Privacy</h2>
                    <p className="mb-4">Our website and services are not intended for children under the age of 13. We do not knowingly collect personal information from children under the age of 13. If you are a parent or guardian and you believe that your child has provided us with personal information, please contact us and we will delete that information.
                    </p>

                    <h2 className="mt-6 text-2xl font-bold mb-2">Changes to This Privacy Policy</h2>
                    <p className="mb-4">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. You are advised to review this Privacy Policy regularly for any changes.
                    </p>

                    <h2 className="mt-6 text-2xl font-bold mb-2">Contact us</h2>
                    <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at:
                        Email: support@Studywello.com
                    </p>

                </div>
            </section>
        </>
    )
}

export default PrivacyPolicy
