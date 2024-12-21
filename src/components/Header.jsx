import { useEffect, useRef, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./components.css";

const Header = () => {
  const [state, setState] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [responsiveMenu, setResponsiveMenu] = useState();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropDownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleMoveToTop = () => {
    window.scroll(0, 0);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropDownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setIsDropDownOpen(false);
    setResponsiveMenu(false);
    handleMoveToTop();
  };

  const currentPath = location.pathname;

  return (
    <>
      <nav className={`navbar md:text-sm bg-white border-b border-gray-300`}>
        <div className="items-center px-3 max-w-full mx-auto md:flex md:px-1 lg:px-16">
          <div className="flex items-center justify-between py-3 md:py-4 md:block">
            {/* COMPANY LOGO */}
            <Link to="/" onClick={() => window.scroll(0, 0)} className="flex items-center">
              <img
                className="w-12"
                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/aaa.png?v=1713875658"
                alt="logo"
              />
              <h2 className="poppins text-gray-800 dark:text-gray-200 text-xl font-semibold tracking-wide">
                StudyWello
              </h2>
            </Link>

            <div className="md:hidden">
              <button
                className="text-gray-700 outline-none p-2 rounded-md"
                onClick={() => setResponsiveMenu(!responsiveMenu)}
              >
                {responsiveMenu ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* MENU */}
          <div
            className={`flex-1 justify-self-center pb-8 mt-8 md:block md:pb-0 md:mt-0 ${responsiveMenu ? "block" : "hidden"
              }`}
          >
            <ul className="text-center justify-center items-center space-y-8 md:flex md:space-x-6 lg:space-x-8 md:space-y-0">
              <li
                className="text-gray-800 hover:text-[#1A73E8]"
                ref={dropdownRef}
                onMouseEnter={() => setIsDropDownOpen(true)}
                onMouseLeave={() => {
                  const isHoveringButton = dropdownRef.current.contains(
                    document.activeElement
                  );
                  if (!isHoveringButton) {
                    setIsDropDownOpen(false);
                  }
                }}
              >
                <div className="dropdown relative">
                  <button
                    onClick={() => setIsDropDownOpen(!isDropDownOpen)}
                    className="text-md font-medium tracking-wide text-gray-700 rounded-xl"
                  >
                    <span className="poppins flex items-center font-medium text-[0.95rem] lg:text-[1.05rem]">
                      Services
                      {isDropDownOpen ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="21"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="pt-0.5 lucide lucide-chevron-up"
                        >
                          <path d="m18 15-6-6-6 6" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="21"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="pt-0.5 lucide lucide-chevron-down"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      )}
                    </span>
                  </button>

                  {isDropDownOpen && (
                    <div
                      className="absolute right-0 z-20 w-40 py-2 mt-0 overflow-hidden origin-top-right bg-white rounded-xl shadow-xl"
                      onMouseEnter={() => setIsDropDownOpen(true)}
                      onMouseLeave={() => setIsDropDownOpen(false)}
                    >
                      {/* {currentPath !== "/do-my-class" ? (
                        <Link
                          to="/online-classes"
                          onClick={handleLinkClick}
                          className="block px-4 py-3 w-full text-left text-sm text-gray-800 font-medium capitalize transition-colors duration-300 transform hover:bg-gray-100"
                        >
                          Online Classes
                        </Link>
                      ) : (
                        <Link
                          to="/do-my-class"
                          onClick={handleLinkClick}
                          className="block px-4 py-3 w-full text-left text-sm text-gray-800 font-medium capitalize transition-colors duration-300 transform hover:bg-gray-100"
                        >
                          Do My Class
                        </Link>
                      )} */}

                      <Link
                        to="/do-my-class"
                        onClick={handleLinkClick}
                        className="block px-4 py-3 w-full text-left text-sm text-gray-800 font-medium capitalize transition-colors duration-300 transform hover:bg-gray-100"
                      >
                        Do My Class
                      </Link>

                      <hr className="border-gray-200" />

                      {/* {currentPath !== "/exams-help" ? (
                        <Link
                          to="/exams"
                          onClick={handleLinkClick}
                          className="block px-4 py-3 w-full text-left text-sm text-gray-800 font-medium capitalize transition-colors duration-300 transform hover:bg-gray-100"
                        >
                          Exams
                        </Link>
                      ) : (
                        <Link
                          to="/exams-help"
                          onClick={handleLinkClick}
                          className="block px-4 py-3 w-full text-left text-sm text-gray-800 font-medium capitalize transition-colors duration-300 transform hover:bg-gray-100"
                        >
                          Exams Help
                        </Link>
                      )} */}

                      <Link
                        to="/exams-help"
                        onClick={handleLinkClick}
                        className="block px-4 py-3 w-full text-left text-sm text-gray-800 font-medium capitalize transition-colors duration-300 transform hover:bg-gray-100"
                      >
                        Exams Help
                      </Link>

                      <hr className="border-gray-200" />


                      <Link
                        to="/help-with-class"
                        onClick={handleLinkClick}
                        className="block px-4 py-3 w-full text-left text-sm text-gray-800 font-medium capitalize transition-colors duration-300 transform hover:bg-gray-100"
                      >
                        Help With Class
                      </Link>

                      <hr className="border-gray-200" />

                      <Link
                        to="/help-with-exam"
                        onClick={handleLinkClick}
                        className="block px-4 py-3 w-full text-left text-sm text-gray-800 font-medium capitalize transition-colors duration-300 transform hover:bg-gray-100"
                      >
                        Help With Exam
                      </Link>

                      <hr className="border-gray-200" />

                      <Link
                        to="/assignments"
                        onClick={handleLinkClick}
                        className="block px-4 py-3 w-full text-left text-sm text-gray-800 font-medium capitalize transition-colors duration-300 transform hover:bg-gray-100"
                      >
                        Assignments
                      </Link>

                      {/* <Link
                        to="/do-my-class"
                        onClick={handleLinkClick}
                        className="block px-4 py-3 w-full text-left text-sm text-gray-800 font-medium capitalize transition-colors duration-300 transform hover:bg-gray-100"
                      >
                        Do My Class
                      </Link> */}
                    </div>
                  )}
                </div>
              </li>

              <li className="poppins text-gray-800 hover:text-[#1A73E8]">
                <Link
                  to="/samples"
                  onClick={handleLinkClick}
                  className="font-medium text-[0.9rem] lg:text-[1.05rem]"
                >
                  Samples
                </Link>
              </li>

              <li className="poppins text-gray-800 hover:text-[#1A73E8]">
                <Link
                  to="/about"
                  onClick={handleLinkClick}
                  className="font-medium text-[0.9rem] lg:text-[1.05rem]"
                >
                  About Us
                </Link>
              </li>

              <li className="poppins text-gray-800 hover:text-[#1A73E8]">
                <Link
                  to="/contact"
                  onClick={handleLinkClick}
                  className="font-medium text-[0.9rem] lg:text-[1.05rem]"
                >
                  Contact Us
                </Link>
              </li>

              {isMobile && (
                <li className="poppins text-gray-800 hover:text-[#1A73E8]">
                  <a
                    href="tel:+1-716-374-9747"
                    className="font-medium text-[0.9rem] lg:text-[1.05rem]"
                  >
                    <span className="">+1 (716) 374-9747</span>
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* BUTTON */}
          <div className="hidden md:inline-block">
            <a
              href="tel:+1-716-374-9747"
              className="min-w-48 h-12 flex items-center text-white border border-[#1A73E8] bg-[#1A73E8] rounded-[2rem] shadow cursor-pointer"
            >
              <span className="bg-white h-full w-11 mr-2 flex justify-center items-center rounded-full">
                <FaPhoneAlt size={17} className="text-indigo-600" />
              </span>
              <span className="">+1 (716) 374-9747</span>
            </a>
          </div>
        </div>
      </nav>
      {/* )} */}
    </>
  );
};

export default Header;
