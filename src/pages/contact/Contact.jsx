
const Contact = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 pt-10">
        <div className="container px-6 py-12 mx-auto">
          <div className="text-center ">
            <p className="font-medium text-blue-500 dark:text-blue-400">Contact us</p>

            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">We’d love to hear from you</h1>

            <p className="mt-3 text-gray-500 dark:text-gray-400">Chat to our friendly team.</p>
          </div>

          <img className="object-cover w-full h-64 mt-10 rounded-lg lg:h-96" src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/photo-1568992688065-536aad8a12f6_1.jpg?v=1716291024" alt="" />

          <div className="grid grid-cols-1 gap-12 lg:col-span-2 sm:grid-cols-2 pt-10">
            <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
              <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>
              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                Email
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Email to our friendly team.
              </p>
              <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                support@Studywello.com
              </p>
            </div>
            <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
              <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-message-circle-more"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                  <path d="M8 12h.01" />
                  <path d="M12 12h.01" />
                  <path d="M16 12h.01" />
                </svg>
              </span>
              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                Chat to support
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                We’re here to help.
              </p>
              <button
                onClick={() => {
                  Tawk_API.toggle();
                }}
                className="mt-2 text-sm text-blue-500 dark:text-blue-400"
              >
                Start new chat
              </button>
            </div>
            <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
              <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-message-square"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </span>
              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                WhatsApp us
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Chat to support
              </p>
              <a href="https://api.whatsapp.com/send?phone=17163749747"
                target="_blank" className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                Start new chat
              </a>
            </div>
            <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
              <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>
              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                Call Us
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                24/7
              </p>
              <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                +1 (716) 374-9747
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
